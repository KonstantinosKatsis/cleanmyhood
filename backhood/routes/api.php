<?php

use App\Http\Controllers\HoodRequestController;
use Illuminate\Support\Facades\Route;

Route::get('/hoods', [HoodRequestController::class, 'index'])->name('hoods.index');