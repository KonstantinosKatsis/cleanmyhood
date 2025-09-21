<?php

namespace App\Models;

use Illuminate\Database\Eloquent\{
    Model,
    Relations\BelongsTo
};

class HoodUploadImage extends Model
{
    protected $fillable = [
        'uuid',
        'image_path',
    ];

    public function hoods(): BelongsTo
    {
        return $this->belongsTo(Hood::class);
    }
}
