<?php

namespace Tests\Feature\Http\Controllers;

use App\Services\Hood\HoodService;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class HoodRequestControllerTest extends TestCase
{
    /**
     * @param string|null $uuid
     * @param array $queryParameters
     * @param string $expectedResponse
     * 
     * @throws \JsonException
     * 
     * @return void
     */
    #[DataProvider('searchProvider')]
    public function testSearchHood(?string $uuid, array $queryParameters = [], string $expectedResponse): void
    {
        $response = $this->getJson("/api/hoods/$uuid?" . http_build_query($queryParameters));

        $response->assertExactJson(json_decode($expectedResponse, true, 512, JSON_THROW_ON_ERROR));
    }

    /**
     * @param string $requestData
     * @param string $expectedResponse
     * 
     * @throws \JsonException
     * 
     * @return void
     */
    #[DataProvider('storeProvider')]
    public function testStoreHood(string $requestData, string $expectedResponse): void
    {
        $mockService = $this->getMockBuilder(HoodService::class)
            ->onlyMethods(['generateUuid'])
            ->getMock();
        $mockService->method('generateUuid')->willReturn('test_uuid');

        $this->app->bind(HoodService::class, fn() => $mockService);

        $response = $this->postJson('/api/hoods', json_decode($requestData, true, 512, JSON_THROW_ON_ERROR));

        $response->assertExactJson(json_decode($expectedResponse, true, 512, JSON_THROW_ON_ERROR));
    }

    /**
     * @param string|null $uuid
     * @param string $expectedResponse
     * 
     * @throws \JsonException
     * 
     * @return void
     */
    #[DataProvider('deleteProvider')]
    public function testDeleteHood(?string $uuid, string $expectedResponse): void
    {
        $response = $this->deleteJson("/api/hoods/$uuid");

        $response->assertExactJson(json_decode($expectedResponse, true, 512, JSON_THROW_ON_ERROR));
    }

    /**
     * @return \Generator
     */
    public static function searchProvider(): \Generator
    {
        yield 'get all hoods' => [
            null,
            [],
            '{"data":[{"uuid":"uuid-1","name":"Hood 1","latitude":"40.0100000","longitude":"-74.0100000","before_image":"images\/before_1.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-2","name":"Hood 2","latitude":"40.0200000","longitude":"-74.0200000","before_image":"images\/before_2.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-3","name":"Hood 3","latitude":"40.0300000","longitude":"-74.0300000","before_image":"images\/before_3.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-4","name":"Hood 4","latitude":"40.0400000","longitude":"-74.0400000","before_image":"images\/before_4.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-5","name":"Hood 5","latitude":"40.0500000","longitude":"-74.0500000","before_image":"images\/before_5.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-6","name":"Hood 6","latitude":"38.0442770","longitude":"23.6588991","before_image":"images\/before_6.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-7","name":"Hood 7","latitude":"40.0700000","longitude":"-74.0700000","before_image":"images\/before_7.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-8","name":"Hood 8","latitude":"40.0800000","longitude":"-74.0800000","before_image":"images\/before_8.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-9","name":"Hood 9","latitude":"40.0900000","longitude":"-74.0900000","before_image":"images\/before_9.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-10","name":"Hood 10","latitude":"40.1000000","longitude":"-74.1000000","before_image":"images\/before_10.png","distance_in_kilometers":null,"distance_in_meters":null}]}'
        ];

        yield 'search by uuid' => [
            'uuid-9',
            [],
            '{"data":[{"uuid":"uuid-9","name":"Hood 9","latitude":"40.0900000","longitude":"-74.0900000","before_image":"images\/before_9.png","distance_in_kilometers":null,"distance_in_meters":null}]}'
        ];

        yield 'uuid not found' => [
            'wrong key',
            [],
            '{"data": []}'
        ];

        yield 'search using filters' => [
            null,
            [
                'latitude' => 38.06054264653057,
                'longitude' => 23.58990936069931,
                'radius' => 20
            ],
            '{"data":[{"uuid":"uuid-6","name":"Hood 6","latitude":"38.0442770","longitude":"23.6588991","before_image":"images\/before_6.png","distance_in_kilometers":6.3057,"distance_in_meters":"6305.70"}]}'
        ];

        yield 'missing search using filters' => [
            null,
            [
                'latitude' => 38.06054264653057,
                'longitude' => 23.58990936069931,
            ],
            '{"data":[{"uuid":"uuid-1","name":"Hood 1","latitude":"40.0100000","longitude":"-74.0100000","before_image":"images\/before_1.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-2","name":"Hood 2","latitude":"40.0200000","longitude":"-74.0200000","before_image":"images\/before_2.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-3","name":"Hood 3","latitude":"40.0300000","longitude":"-74.0300000","before_image":"images\/before_3.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-4","name":"Hood 4","latitude":"40.0400000","longitude":"-74.0400000","before_image":"images\/before_4.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-5","name":"Hood 5","latitude":"40.0500000","longitude":"-74.0500000","before_image":"images\/before_5.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-6","name":"Hood 6","latitude":"38.0442770","longitude":"23.6588991","before_image":"images\/before_6.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-7","name":"Hood 7","latitude":"40.0700000","longitude":"-74.0700000","before_image":"images\/before_7.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-8","name":"Hood 8","latitude":"40.0800000","longitude":"-74.0800000","before_image":"images\/before_8.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-9","name":"Hood 9","latitude":"40.0900000","longitude":"-74.0900000","before_image":"images\/before_9.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-10","name":"Hood 10","latitude":"40.1000000","longitude":"-74.1000000","before_image":"images\/before_10.png","distance_in_kilometers":null,"distance_in_meters":null}]}'
        ];
    }

    /**
     * @return \Generator
     */
    public static function storeProvider(): \Generator
    {
        yield 'store hood' => [
            '[{"name":"Hood 11","latitude":40.1100000,"longitude":-74.1100000,"before_image":"images/before_11.png"}]',
            '{"status":"success","statusCode":0,"error":"","data":[{"uuid":"test_uuid","name":"Hood 11","latitude":"40.11","longitude":"-74.11","before_image":"images\/before_11.png","distance_in_kilometers":null,"distance_in_meters":null}]}'
        ];

        yield 'wrong data' => [
            '[{"name":"Hood 11","latitude":null,"longitude":-74.1100000,"before_image":"images/before_11.png"}]',
            '{"status":"failed","statusCode":422,"errors":{"0.latitude":["The 0.latitude field is required."]},"data":[]}'
        ];

        yield 'empty data' => [
            '[]',
            '{"status":"failed","statusCode":400,"error":"Data cannot be empty.","data":[]}'
        ];
    }

    /**
     * @return \Generator
     */
    public static function deleteProvider(): \Generator
    {
        yield 'delete hood' => [
            'uuid-6',
            '{"status":"success","statusCode":0,"error":"","data":[]}'
        ];

        yield 'wrong uuid' => [
            'uuid-61',
            '{"status":"failed","statusCode":400,"error":"No query results for model [App\\\Models\\\Hood].","data":[]}'
        ];
    }
}