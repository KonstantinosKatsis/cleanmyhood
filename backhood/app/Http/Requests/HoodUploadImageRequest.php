<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HoodUploadImageRequest extends FormRequest
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
            'image' => 'required|image|max:10240',
            'metadata' => 'required',
        ];
    }
}
