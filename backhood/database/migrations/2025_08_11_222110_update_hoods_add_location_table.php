<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::table('hoods', function (Blueprint $table): void {
            $table->string('location')->nullable();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::table('hoods', function ($table): void {
            $table->dropColumn('location');
        });
    }
};
