<?php

namespace App\Http\Requests;

class HoodStoreRequest extends BaseRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            '*.name' => 'required|string|max:255',
            '*.latitude' => 'required|numeric',
            '*.longitude' => 'required|numeric',
            '*.before_image' => 'required|string',
        ];
    }
}
