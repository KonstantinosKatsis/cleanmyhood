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
        Schema::create('hood_upload_images', function (Blueprint $table): void {
            $table->id();
            $table->string('uuid');
            $table->string('image_path');
            $table->foreign('uuid')->references('uuid')->on('hoods')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('hoods_upload_image');
    }
};
