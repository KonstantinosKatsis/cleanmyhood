<?php

namespace App\Data\Common;

use Spatie\LaravelData\Data;

class Response extends Data
{
    public string $status = 'failed';
    public int $statusCode = 0;
    public string $error = '';
    public array $data = [];
}