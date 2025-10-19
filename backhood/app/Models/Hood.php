<?php

namespace App\Models;

use Illuminate\Database\Eloquent\{
    Factories\HasFactory,
    Model,
    Relations\HasMany
};
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

    /**
     * @param mixed $query
     * @param string|null $uuid
     * 
     * @return mixed
     */
    public function scopeCleaned($query, ?string $uuid): mixed
    {
        return $query->where('is_active', 2)
            ->when(
                !empty($uuid),
                fn($query): mixed => $query->where('uuid', $uuid)
            );
    }

    public function scopeNearby($query, Request $request): mixed
    {
        $lattitude = $request->get('latitude', null);
        $longitude = $request->get('longitude', null);
        $radius = $request->get('radius', null);

        if (empty($lattitude) || empty($longitude) || empty($radius)) {
            return $query;
        }

        return $query
            ->selectRaw("hoods.*,
            ROUND(6371 * acos(
                cos(radians(?)) * cos(radians(latitude)) *
                cos(radians(longitude) - radians(?)) +
                sin(radians(?)) * sin(radians(latitude))
            ),5) AS distance", [$lattitude, $longitude, $lattitude])
            ->havingRaw('distance <= ?', [$radius])
            ->orderBy('distance');
    }

    /**
     * @return HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(HoodUploadImage::class, 'hood_uuid', 'uuid');
    }
}