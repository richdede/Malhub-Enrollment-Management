<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Models\Workspacepackage;
use App\Http\Controllers\Controller;

class CourseUserController extends Controller
{

    public function enrollUserInCourse(Request $request, $courseId, $userId)
    {

        $enrollment = new Enrollment();
        $enrollment->user_id = $userId;
        $enrollment->course_id = $courseId;
        $enrollment->save();

        return response()->json(['message' => 'User enrolled in the course successfully']);
    }

    public function enrollUserInWorkspacePackage(Request $request, $workspacepackageId, $userId)
    {

        $enrollment = new Enrollment();
        $enrollment->user_id = $userId;
        $enrollment->workspacepackage_id = $workspacepackageId;
        $enrollment->save();

        return response()->json(['message' => 'User subscribed in the workspace package successfully']);
    }


    public function getCoursesByUserId($userId)
    {

        $user = User::find($userId);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $enrolledCourses = $user->courses;

        if ($enrolledCourses->isEmpty()) {
            return response()->json(['message' => 'You are not enrolled in any course']);
        }

        $courses = $enrolledCourses->map(function ($course) {
            return [
                'id' => $course->id,
                'name' => $course->name,
                'amount' => $course->amount,
                'duration' => $course->duration,
            ];
        });

        return response()->json(['courses' => $courses]);
    }

    public function getWorkspacePackagesByUserId($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $enrolledWorkspacePackages = $user->workspacePackages;

        if ($enrolledWorkspacePackages->isEmpty()) {
            return response()->json(['message' => 'You are not subscribed in any workspace package']);
        }

        $workspacePackages = $enrolledWorkspacePackages->map(function ($workspacePackage) {
            return [
                'id' => $workspacePackage->id,
                'name' => $workspacePackage->name,
                'amount' => $workspacePackage->amount,
                'days' => $workspacePackage->days,
            ];
        });

        return response()->json(['workspacePackages' => $workspacePackages]);
    }
}
