<?php

namespace App\Utilities;

use Illuminate\Http\UploadedFile;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;

class ImageHelper
{
    public const MAXIMUM_IMAGE_SIZE = 500;

    /**
     * @param UploadedFile $uploadedImage
     * 
     * @return string
     */
    public static function compressImage(UploadedFile $uploadedImage): string
    {
        $sizeKB = $uploadedImage->getSize() / 1024;
        if (self::isLessThanMaximumSize($sizeKB)) {
            return $uploadedImage->get();
        }

        $manager = new ImageManager(new Driver());

        $image = $manager->read($uploadedImage->getRealPath());
        $quality = 75;

        do {
            $compressed = (string) $image->encodeByExtension(
                $uploadedImage->extension(),
                quality: $quality
            );

            $sizeKB = strlen($compressed) / 1024;
            $quality -= 5;
        } while ($sizeKB > self::MAXIMUM_IMAGE_SIZE);

        return $compressed;
    }

    /**
     * @param float $size
     * 
     * @return bool
     */
    private static function isLessThanMaximumSize(float $size): bool
    {
        return $size <= self::MAXIMUM_IMAGE_SIZE;
    }
}