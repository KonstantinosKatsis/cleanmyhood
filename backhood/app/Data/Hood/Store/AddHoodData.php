<?php

namespace App\Data\Hood\Store;

use Spatie\LaravelData\Attributes\Validation\{
    Required,
    Max
};
use Spatie\LaravelData\Data;

class AddHoodData extends Data
{
    #[Required, Max(255)]
    public string $name;

    #[Required]
    public string $latitude;

    #[Required]
    public string $longitude;

    #[Required]
    public string $before_image;

    #[Required]
    public string $uuid;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * 
     * @return AddHoodData
     */
    public function setName(string $name): AddHoodData
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getLatitude(): string
    {
        return $this->latitude;
    }

    /**
     * @param string $latitude
     * 
     * @return AddHoodData
     */
    public function setLatitude(string $latitude): AddHoodData
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * @return string
     */
    public function getLongitude(): string
    {
        return $this->longitude;
    }

    /**
     * @param string $longitude
     * 
     * @return AddHoodData
     */
    public function setLongitude(string $longitude): AddHoodData
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getBeforeImage(): string
    {
        return $this->before_image;
    }

    /**
     * @param string $before_image
     * 
     * @return AddHoodData
     */
    public function setBeforeImage(string $before_image): AddHoodData
    {
        $this->before_image = $before_image;

        return $this;
    }

    /**
     * @return string
     */
    public function getUuid(): string
    {
        return $this->uuid;
    }
}