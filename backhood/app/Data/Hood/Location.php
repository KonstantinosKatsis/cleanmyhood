<?php

namespace App\Data\Hood;

use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Data;

class Location extends Data
{
    #[Required]
    public string $latitude;

    #[Required]
    public string $longitude;
}