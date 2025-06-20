<?php

namespace Tests\Feature\Http\Controllers;

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
    public function testSearchHoods(?string $uuid, array $queryParameters = [], string $expectedResponse): void
    {
        $response = $this->getJson("/api/hoods/$uuid?" . http_build_query($queryParameters));

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
            '{"data":[{"uuid":"uuid-1","name":"Hood 1","latitude":40.01,"longitude":-74.01,"before_image":"images\/before_1.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-2","name":"Hood 2","latitude":40.02,"longitude":-74.02,"before_image":"images\/before_2.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-3","name":"Hood 3","latitude":40.03,"longitude":-74.03,"before_image":"images\/before_3.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-4","name":"Hood 4","latitude":40.04,"longitude":-74.04,"before_image":"images\/before_4.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-5","name":"Hood 5","latitude":40.05,"longitude":-74.05,"before_image":"images\/before_5.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-6","name":"Hood 6","latitude":40.06,"longitude":-74.06,"before_image":"images\/before_6.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-7","name":"Hood 7","latitude":40.07,"longitude":-74.07,"before_image":"images\/before_7.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-8","name":"Hood 8","latitude":40.08,"longitude":-74.08,"before_image":"images\/before_8.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-9","name":"Hood 9","latitude":40.09,"longitude":-74.09,"before_image":"images\/before_9.png","distance_in_kilometers":null,"distance_in_meters":null},{"uuid":"uuid-10","name":"Hood 10","latitude":40.1,"longitude":-74.1,"before_image":"images\/before_10.png","distance_in_kilometers":null,"distance_in_meters":null}]}'
        ];

        yield 'search by uuid' => [
            'uuid-9',
            [],
            '{"data":[{"uuid":"uuid-9","name":"Hood 9","latitude":40.09,"longitude":-74.09,"before_image":"images\/before_9.png","distance_in_kilometers":null,"distance_in_meters":null}]}'
        ];

        yield 'uuid not found' => [
            'wrong key',
            [],
            '{"data": []}'
        ];
    }
}