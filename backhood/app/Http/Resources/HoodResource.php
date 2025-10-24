<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HoodResource extends JsonResource
{
    /**
     * @param Request $request
     * 
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'uuid' => $this->uuid,
            'name' => $this->name,
            'description' => $this->description,
            'location' => $this->location,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'before_image' => $this->before_image,
            'after_image' => $this->after_image,
            'distance_in_kilometers' => $this->distance,
            'distance_in_meters' => $this->getDistanceInMeters(),
        ];
    }

    /**
     * @return string|null
     */
    private function getDistanceInMeters(): ?string
    {
        if (empty($this->distance)) {
            return null;
        }

        return number_format($this->distance * 1000, 2, '.', '');
    }
}
