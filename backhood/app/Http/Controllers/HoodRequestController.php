<?php

namespace App\Http\Controllers;

use App\Data\Common\Response as CommonResponse;
use App\Http\Requests\{
    HoodSearchRequest,
    HoodStoreRequest,
    HoodUploadImageRequest
};
use App\Http\Resources\HoodCollection;
use App\Models\Hood;
use App\Services\Hood\HoodService;
use Illuminate\Http\Request;
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
    public function hoods(HoodSearchRequest $request, ?string $uuid = null): HoodCollection
    {
        $hoods = Hood::active($uuid)
            ->nearby($request)
            ->get();

        return new HoodCollection($hoods);
    }

    /**
     * @param HoodStoreRequest $request
     * 
     * @return CommonResponse
     */
    public function store(HoodStoreRequest $request): CommonResponse
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

        return $response;
    }

    /**
     * @param string $uuid
     * 
     * @return CommonResponse
     */
    public function delete(string $uuid): CommonResponse
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

        return $response;
    }

    /**
     * @param HoodUploadImageRequest $request
     * @param string $uuid
     * 
     * @return CommonResponse
     */
    public function uploadImage(HoodUploadImageRequest $request, string $uuid): CommonResponse
    {
        DB::beginTransaction();

        try {
            $this->hoodService->uploadImage($request->image, $uuid);

            $response = CommonResponse::from([
                'status' => 'success',
                'data' => [],
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

            $response = $this->createErrorResponse($e->getMessage(), 400);
        }

        return $response;
    }
}