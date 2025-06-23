<?php

namespace Tests;

use Database\Seeders\TestHoodSeeder;
use Illuminate\Foundation\Testing\{
    DatabaseTransactions,
    TestCase as BaseTestCase
};

abstract class TestCase extends BaseTestCase
{
    use DatabaseTransactions;

    protected function setUp(): void
    {
        parent::setUp();

        \DB::table('hoods')->delete();

        $this->seed(TestHoodSeeder::class);
    }
}
