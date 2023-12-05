<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CourseUserController;
use App\Http\Controllers\WorkspacepackageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/register', [LoginController::class, 'createUser']);
Route::post('/auth/login', [LoginController::class, 'loginUser']);

Route::apiResource('/course', CourseController::class);
Route::apiResource('/package', WorkspacepackageController::class);

//user enroll for course
Route::post('/courses/{courseId}/users/{userId}/enroll', [CourseUserController::class, 'enrollUserInCourse']);
//user subscribed to a package
Route::post('/workspacepackages/{workspacePackageId}/users/{userId}/enroll', [CourseUserController::class, 'enrollUserInWorkspacePackage']);


// for enrolled users
Route::get('/users/{userId}/courses', [CourseUserController::class, 'getCoursesByUserId']);
//for packages subscribed users
Route::get('/users/{userId}/workspace-packages', [CourseUserController::class, 'getWorkspacePackagesByUserId']);
