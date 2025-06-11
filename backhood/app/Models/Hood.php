<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Hood extends Model
{
    use HasFactory;

    protected $hidden = ['id'];

    protected $fillable = [
        'uuid',
        'name',
        'latitude',
        'longitude',
        'before_image',
    ];

    /**
     * @param mixed $query
     * @param string|null $uuid
     * 
     * @return mixed
     */
    public function scopeActive($query, ?string $uuid): mixed
    {
        return $query->where('is_active', true)
            ->when(
                !empty($uuid),
                fn($query): mixed => $query->where('uuid', $uuid)
            );
    }
}