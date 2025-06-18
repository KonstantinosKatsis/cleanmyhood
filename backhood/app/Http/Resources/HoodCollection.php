<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class HoodCollection extends ResourceCollection
{
    public $collects = HoodResource::class;

    /**
     * @param Request $request
     * 
     * @return array
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }
}
