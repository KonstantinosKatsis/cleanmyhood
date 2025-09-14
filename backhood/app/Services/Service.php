<?php

namespace App\Services;

use App\Models\Hood;

abstract class Service
{
    private array $hoods = [];
    private array $hoodData = [];

    /**
     * @return array
     */
    public function getHoods(): array
    {
        return $this->hoods;
    }

    /**
     * @param array $hoods
     * 
     * @return Service
     */
    public function setHoods(array $hoods): Service
    {
        $this->hoods = $hoods;

        return $this;
    }

    /**
     * @return array
     */
    public function getHoodData(): array
    {
        return $this->hoodData;
    }

    /**
     * @param Hood $hood
     * 
     * @return Service
     */
    protected function addHood(Hood $hood): Service
    {
        $this->hoodData[] = $hood;

        return $this;
    }

    /**
     * @return string
     */
    protected function generateUuid(): string
    {
        return \Str::uuid()->toString();
    }

    /**
     * @return Service
     */
    abstract public function store(): Service;

    /**
     * @param string $uuid
     * 
     * @return Service
     */
    abstract public function delete(string $uuid): Service;

    /**
     * This needs to be implemented by a Validation class.
     * 
     * @throws \InvalidArgumentException
     * 
     * @return void
     */
    protected function validateEmptyData(): void
    {
        if (empty($this->getHoods())) {
            throw new \InvalidArgumentException('Data cannot be empty.');
        }
    }
}