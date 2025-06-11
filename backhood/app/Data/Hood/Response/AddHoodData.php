<?php

namespace App\Data\Hood\Response;

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

    public function __construct(
        string $name,
        string $latitude,
        string $longitude,
        string $before_image,
    ) {
    }
}