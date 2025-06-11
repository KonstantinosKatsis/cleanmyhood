<?php

namespace App\Http\Controllers;

use App\Data\Common\Response as CommonResponse;

abstract class Controller
{
    public function createErrorResponse(string $message, int $statusCode = 400): CommonResponse
    {
        return CommonResponse::from([
            'status' => 'failed',
            'statusCode' => $statusCode,
            'error' => $message,
            'data' => [],
        ]);
    }
}
