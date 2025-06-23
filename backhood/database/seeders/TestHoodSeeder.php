<?php

namespace Database\Seeders;

use App\Models\Hood;
use Illuminate\Database\Seeder;

class TestHoodSeeder extends Seeder
{
    /**
     * @return void
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            Hood::create([
                'uuid' => "uuid-$i",
                'name' => "Hood $i",
                'description' => "Description for Hood $i",
                'before_image' => "images/before_$i.png",
                'after_image' => "",
                'latitude' => $i === 6 ? 38.04427699288631 : 40.0 + $i * 0.01,
                'longitude' => $i === 6 ? 23.65889907733886 : -74.0 - $i * 0.01,
                'is_active' => 1
            ]);
        }
    }
}
