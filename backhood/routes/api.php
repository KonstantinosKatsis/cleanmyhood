<?php

use App\Http\Controllers\HoodRequestController;
use Illuminate\Support\Facades\Route;

Route::middleware('throttle:60,1')->group(function (): void {
    Route::get('/hoods/{uuid?}', [HoodRequestController::class, 'hoods']);
    Route::post('/hoods', [HoodRequestController::class, 'store']);
    Route::delete('/hoods/{uuid}', [HoodRequestController::class, 'delete']);
});