<?php

namespace App\Services\Hood;

use App\Data\Hood\Store\AddHoodData;
use App\Models\Hood;

class StoreService
{
    private array $hoods = [];

    /**
     * @return array
     */
    public function getHoods(): array
    {
        return $this->hoods;
    }

    /**
     * @param Hood $hood
     * 
     * @return StoreService
     */
    private function addHood(Hood $hood): StoreService
    {
        $this->hoods[] = $hood;

        return $this;
    }

    /**
     * @param array $hoods
     * 
     * @return array
     */
    public function store(array $hoods): StoreService
    {
        foreach ($hoods as $hood) {
            $hoodData = AddHoodData::from($hood, AddHoodData::withAuthUuid());
            $hood = Hood::create($hoodData->toArray());

            $this->addHood($hood);
        }

        return $this;
    }
}