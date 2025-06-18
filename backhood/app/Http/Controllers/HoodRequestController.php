<?php

namespace App\Http\Controllers;

use App\Data\Common\Response as CommonResponse;
use App\Http\Requests\HoodStoreRequest;
use App\Http\Resources\HoodCollection;
use App\Models\Hood;
use App\Services\Hood\HoodService;
use Illuminate\Http\{
    JsonResponse,
    Request
};
use Illuminate\Support\Facades\DB;

class HoodRequestController extends Controller
{
    private HoodService $hoodService;

    public function __construct(HoodService $hoodService)
    {
        $this->hoodService = $hoodService;
    }

    /**
     * @param Request $request
     * 
     * @return array
     */
    public function hoods(Request $request, ?string $uuid = null): HoodCollection
    {
        $hoods = Hood::active($uuid)
            ->nearby($request)
            ->get();

        return new HoodCollection($hoods);
    }

    /**
     * @param HoodStoreRequest $request
     * 
     * @return JsonResponse
     */
    public function store(HoodStoreRequest $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            $hoods = $this->hoodService->setHoods($request->all())
                ->store()
                ->getHoodData();

            $response = CommonResponse::from([
                'status' => 'success',
                'data' => (new HoodCollection($hoods))->toArray($request),
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

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
        DB::beginTransaction();

        try {
            $this->hoodService->delete($uuid);

            $response = CommonResponse::from([
                'status' => 'success',
                'data' => [],
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            $response = $this->createErrorResponse($e->getMessage(), 400);
        }

        return response()->json($response, 200);
    }
}