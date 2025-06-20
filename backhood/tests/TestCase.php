<?php

namespace Tests;

use Database\Seeders\TestHoodSeeder;
use Illuminate\Foundation\Testing\{
    RefreshDatabase,
    TestCase as BaseTestCase
};

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(TestHoodSeeder::class);
    }
}
