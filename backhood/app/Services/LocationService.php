<?php

namespace App\Services;

use App\Data\Hood\Location;
use App\Models\Hood;

class LocationService
{
    private const int EARTH_RADIUS_IN_METERS = 6371000;

    private const int MINIMUM_DISTANCE_FROM_CLEANING = 100;

    /**
     * @param Location $location
     * 
     * @return LocationService
     */
    public function validateLocation(Location $location): LocationService
    {
        throw_if(
            $location->latitude === null || $location->longitude === null,
            \Exception::class,
            'Location coordinates are required!'
        );
        return $this;
    }

    /**
     * @param Location $location
     * @param string $uuid
     * 
     * @return LocationService
     */
    public function isNearCleaning(Location $location, string $uuid): LocationService
    {
        $userLatitude = $location->latitude;
        $userLongitude = $location->longitude;

        $hood = Hood::where('uuid', $uuid)->first();

        $distance = $this->haversineGreatCircleDistance($userLatitude, $userLongitude, $hood->latitude, $hood->longitude);

        throw_if(
            $distance > 100,
            \Exception::class,
            'Please get closer to the cleaning!'
        );

        return $this;
    }

    private function haversineGreatCircleDistance(
        float $latitudeFrom,
        float $longitudeFrom,
        float $latitudeTo,
        float $longitudeTo
    ): float {
        $latFrom = deg2rad($latitudeFrom);
        $lonFrom = deg2rad($longitudeFrom);
        $latTo = deg2rad($latitudeTo);
        $lonTo = deg2rad($longitudeTo);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
            cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));

        return $angle * self::EARTH_RADIUS_IN_METERS;
    }
}