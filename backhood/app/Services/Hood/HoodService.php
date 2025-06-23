<?php

namespace App\Services\Hood;

use App\Data\Hood\Store\AddHoodData;
use App\Models\Hood;
use App\Services\Service;

class HoodService extends Service
{
    /**
     * 
     * @throws \InvalidArgumentException
     * 
     * @return HoodService
     */
    public function store(): HoodService
    {
        $this->validateEmptyData();

        foreach ($this->getHoods() as $hood) {
            $hoodData = AddHoodData::from($hood, ['uuid' => $this->generateUuid()]);
            $hood = Hood::create($hoodData->toArray());

            $this->addHood($hood);
        }

        return $this;
    }

    /**
     * @param string $uuid
     * 
     * @return HoodService
     */
    public function delete(string $uuid): HoodService
    {
        $hood = Hood::where('uuid', $uuid)->firstOrFail();
        $hood->delete();

        return $this;
    }
}