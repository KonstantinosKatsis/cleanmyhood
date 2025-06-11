<?php

namespace App\Data\Common;

use Spatie\LaravelData\Data;

class Response extends Data
{
    public string $status;
    public string $statusCode;
    public string $error;
    public array $data;

    public function __construct(
        string $status = 'failed',
        string $statusCode = '',
        string $error = '',
        array $data = [],
    ) {
    }
}