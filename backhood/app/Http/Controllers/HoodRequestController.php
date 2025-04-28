<?php

namespace App\Http\Controllers;

use App\Models\Hood;

class HoodRequestController extends Controller
{
    /**
     * @return array
     */
    public function index(): array
    {
        $hoods = Hood::active()->get();

        return [
            'hoods' => $hoods,
        ];
    }
}