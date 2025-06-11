<?php

namespace App\Http\Controllers;

use App\Data\Common\Response as CommonResponse;
use App\Models\Hood;
use App\Services\Hood\StoreService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HoodRequestController extends Controller
{
    private StoreService $storeService;

    public function __construct(StoreService $storeService)
    {
        $this->storeService = $storeService;
    }

    /**
     * @param Request $request
     * 
     * @return array
     */
    public function hoods(?string $uuid = null): array
    {
        $hoods = Hood::active($uuid)->get();

        return [
            'hoods' => $hoods,
        ];
    }

    /**
     * @param Request $request
     * 
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        \DB::beginTransaction();

        try {
            $hoods = $this->storeService->store($request->all())
                ->getHoods();

            $response = CommonResponse::from([
                'status' => 'success',
                'data' => $hoods,
            ]);

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollBack();

            $response = $this->createErrorResponse($e->getMessage(), 400);
        }

        return response()->json($response, 201);
    }

    /**
     * @param string $uuid
     * 
     * @return JsonResponse
     */
    public function delete(string $uuid): JsonResponse
    {
        \DB::beginTransaction();

        try {
            $hood = Hood::where('uuid', $uuid)->firstOrFail();
            $hood->delete();

            $response = CommonResponse::from([
                'status' => 'success',
                'data' => [],
            ]);

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollBack();

            $response = $this->createErrorResponse($e->getMessage(), 400);
        }

        return response()->json($response, 200);
    }
}