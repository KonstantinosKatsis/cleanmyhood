<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class BaseRequest extends FormRequest
{
    protected function failedValidation(Validator $validator): never
    {
        throw new HttpResponseException(response()->json([
            'status' => 'failed',
            'statusCode' => 422,
            'errors' => $validator->errors(),
            'data' => [],
        ], 422));
    }
}
