<?php

namespace App\Utilities;

use Illuminate\Http\UploadedFile;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;

class ImageHelper
{
    public const MAXIMUM_IMAGE_SIZE = 150;
    public const MAXIMUM_IMAGE_WIDTH = 800;
    public const IMAGE_QUALITY = 75;

    /**
     * @param UploadedFile $uploadedImage
     * 
     * @return string
     */
    public static function compressImage(UploadedFile $uploadedImage): string
    {
        $manager = new ImageManager(new Driver());

        $image = $manager->read($uploadedImage->getRealPath());
        if ($image->width() > self::MAXIMUM_IMAGE_WIDTH) {
            $image->scale(self::MAXIMUM_IMAGE_WIDTH);
        }

        $encoded = (string) $image->encodeByExtension($uploadedImage->extension());
        $sizeKB = strlen($encoded) / 1024;

        if (self::isLessThanMaximumSize($sizeKB)) {
            return (string) $image->encodeByExtension($uploadedImage->extension());
        }

        $quality = self::IMAGE_QUALITY;

        do {
            $compressed = (string) $image->encodeByExtension(
                $uploadedImage->extension(),
                $quality
            );

            $sizeKB = strlen($compressed) / 1024;
            $quality -= 5;
        } while ($sizeKB > self::MAXIMUM_IMAGE_SIZE && $quality > 50);

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