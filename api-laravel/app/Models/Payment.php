<?php

namespace App\Models;

use App\Models\User;
use App\Models\Enrollment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'enrollment_id',
        'amount',
        'status',
        'time_initiated',
        'time_completed',
    ];

    protected $casts = [
        'time_initiated' => 'datetime',
        'time_completed' => 'datetime',
    ];
    public function enrollment()
    {
        return $this->belongsTo(Enrollment::class);
    }

    public function getCourseAttribute()
    {
        return optional($this->enrollment)->course;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}