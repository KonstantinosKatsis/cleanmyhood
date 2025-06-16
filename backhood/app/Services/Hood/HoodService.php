<?php

namespace App\Services\Hood;

use App\Data\Hood\Store\AddHoodData;
use App\Models\Hood;
use App\Services\Service;

class HoodService extends Service
{
    /**
     * @return HoodService
     */
    public function store(): HoodService
    {
        foreach ($this->getHoods() as $hood) {
            $hoodData = AddHoodData::from($hood, AddHoodData::withAuthUuid());
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