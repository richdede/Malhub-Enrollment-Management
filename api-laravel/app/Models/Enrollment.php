<?php

namespace App\Models;

use App\Models\User;
use App\Models\Course;
use App\Models\Workspacepackage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Enrollment extends Model
{
    use HasFactory;
    protected $table = 'enrollments';

    protected $fillable = [
        'user_id',
        'course_id',
        'workspacepackage_id'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function workspacePackage()
    {
        return $this->belongsTo(Workspacepackage::class, 'workspacepackage_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}