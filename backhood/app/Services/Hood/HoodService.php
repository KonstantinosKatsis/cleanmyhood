<?php

namespace App\Services\Hood;

use App\Data\Hood\Store\AddHoodData;
use App\Models\Hood;
use App\Models\HoodUploadImage;
use App\Services\Service;
use App\Utilities\ImageHelper;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class HoodService extends Service
{
    /**
     * 
     * @throws \InvalidArgumentException
     * 
     * @return Service
     */
    public function store(): HoodService
    {
        $this->validateEmptyData();

        foreach ($this->getHoods() as $hood) {
            $hoodData = AddHoodData::from($hood, ['uuid' => $this->generateUuid()]);
            $hood = Hood::create($hoodData->toArray());

            $this->addHood($hood);
        }

        return $this;
    }

    /**
     * @param string $uuid
     * 
     * @return HoodService
     */
    public function delete(string $uuid): HoodService
    {
        $hood = Hood::where('uuid', $uuid)->firstOrFail();
        $hood->delete();

        return $this;
    }

    /**
     * @param UploadedFile $image
     * @param string $uuid
     * 
     * @return HoodService
     */
    public function uploadImage(UploadedFile $image, string $uuid): HoodService
    {
        $imageName = time() . '.' . $image->extension();

        $compressedImage = ImageHelper::compressImage($image);

        $path = "uploaded/{$uuid}/{$imageName}";
        Storage::disk(name: 'private')->put($path, $compressedImage);

        HoodUploadImage::create([
            'uuid' => $uuid,
            'image_path' => $path,
        ]);

        return $this;
    }
}