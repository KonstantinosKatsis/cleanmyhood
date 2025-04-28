<?php

namespace Database\Seeders;

use App\Models\Hood;
use Illuminate\Database\Seeder;

class HoodSeeder extends Seeder
{
    public function run(): void
    {
        Hood::factory()->count(10)->create();
    }
}
