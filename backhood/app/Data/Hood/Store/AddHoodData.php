<?php

namespace App\Data\Hood\Store;

use Spatie\LaravelData\Attributes\Validation\{
    Required,
    Max
};
use Spatie\LaravelData\Data;

class AddHoodData extends Data
{
    #[Required, Max(255)]
    public string $name;

    #[Required]
    public string $latitude;

    #[Required]
    public string $longitude;

    #[Required]
    public string $before_image;

    #[Required]
    public string $uuid;

    public static function withAuthUuid(): array
    {
        return [
            'uuid' => \Str::uuid()->toString(),
        ];
    }
}