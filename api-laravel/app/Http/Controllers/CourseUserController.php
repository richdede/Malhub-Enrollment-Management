<?php

namespace App\Http\Controllers;

use Log;
use App\Models\User;
use App\Models\Course;
use App\Models\Payment;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use App\Models\Workspacepackage;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class CourseUserController extends Controller
{

    public function enrollUserInCourse(Request $request, $courseId, $userId)
    {
        $check = Enrollment::where([
            'user_id' => $userId,
            'course_id' => $courseId,
        ])->count();

        if ($check > 0) return response()->json([
            'success' => false,
            'message' => 'You have been enrolled to this course.'
        ]);

        $course = Course::where('id', $courseId)->first();

        if (!$course) return response()->json([
            'success' => false,
            'message' => "Invalid course selected"
        ]);

        $enrollment = Enrollment::create([
            'user_id' => $userId,
            'course_id' => $course->id,
        ]);

        $payment = Payment::create([
            'enrollment_id' => $enrollment->id,
            'amount' => $course->amount,
            'status' => 'pending',
            'time_initiated' => now()
        ]);

        $data['enrollment'] = $enrollment;
        $data['enrollment']['payment'] = $payment;

        return response()->json([
            'data' => $data,
            'message' => 'User enrolled in the course successfully'
        ]);
    }

    public function enrollUserInWorkspacePackage(Request $request, $workspacepackageId, $userId)
    {

        $check = Enrollment::where([
            'user_id' => $userId,
            'workspacepackage_id' => $workspacepackageId,
        ])->count();

        if ($check > 0) return response()->json([
            'success' => false,
            'message' => 'You have been subscribed to this package.'
        ]);

        $workspacepackage = Workspacepackage::where('id', $workspacepackageId)->first();

        if (!$workspacepackage) return response()->json([
            'success' => false,
            'message' => "Invalid workspace Package selected"
        ]);

        $enrollment = Enrollment::create([
            'user_id' => $userId,
            'workspacepackage_id' => $workspacepackageId,
        ]);

        $payment = Payment::create([
            'enrollment_id' => $enrollment->id,
            'amount' => $workspacepackage->amount,
            'status' => 'pending',
            'time_initiated' => now()
        ]);

        $data['enrollment'] = $enrollment;
        $data['enrollment']['payment'] = $payment;

        return response()->json([
            'data' => $data,
            'message' => 'User subscribed in the workspace package successfully'
        ]);

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


    public function markPaymentAsPaid(Request $request, $paymentId)
    {
        try {
            DB::beginTransaction();
    
            $payment = Payment::find($paymentId);
   
            if (!$payment) {
                DB::rollBack();
                return response()->json(['message' => 'Payment not found'], 404);
            }
    
            if ($payment->status !== 'pending') {
                DB::rollBack();
                return response()->json(['message' => 'Payment has already been processed'], 400);
            }
    
            $isPaymentSuccessful = true;
    
            if ($isPaymentSuccessful) {
                $payment->update([
                    'status' => 'paid',
                    'time_completed' => now(),
                ]);
    
                DB::commit();
    
                return response()->json(['success' => true, 'message' => 'Payment marked as paid']);
            } else {
                DB::rollBack();
                return response()->json(['success' => false, 'message' => 'Payment failed'], 500);
            }
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e);
    
            return response()->json(['success' => false, 'message' => 'Error marking payment as paid'], 500);
        }
    }


}
