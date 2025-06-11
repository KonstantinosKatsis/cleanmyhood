<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HoodFactory extends Factory
{
    public function definition(): array
    {
        return [
            'uuid' => $this->faker->uuid,
            'name' => $this->faker->word,
            'latitude' => $this->faker->latitude,
            'longitude' => $this->faker->longitude,
            'before_image' => $this->faker->imageUrl(),
        ];
    }
}
