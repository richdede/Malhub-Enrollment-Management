<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PaymentController;
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

//crud functionality for course
Route::apiResource('/course', CourseController::class);
//Crud functionality for packages
Route::apiResource('workspace-packages', WorkspacepackageController::class);

//user enroll for course
Route::post('/courses/{courseId}/users/{userId}/enroll', [CourseUserController::class, 'enrollUserInCourse']);
//user subscribed to a package
Route::post('/workspacepackages/{workspacePackageId}/users/{userId}/enroll', [CourseUserController::class, 'enrollUserInWorkspacePackage']);


// for enrolled users
Route::get('/users/{userId}/courses', [CourseUserController::class, 'getCoursesByUserId']);
//for packages subscribed users
Route::get('/users/{userId}/workspace-packages', [CourseUserController::class, 'getWorkspacePackagesByUserId']);



//apiResource used above
/**
 * Verb          Path                        Action  Route Name
 *  GET           /users                      index   users.index
 *  POST          /users                      store   users.store
 *  GET           /users/{user}               show    users.show
 *  PUT|PATCH     /users/{user}               update  users.update
 *   DELETE        /users/{user}               destroy users.destroy
 */


Route::apiResource('payments', PaymentController::class);

/**
 * To retrieve all payments: GET http://your-app-url/api/payments
 *  To retrieve a specific payment: GET http://your-app-url/api/payments/{id}
 *   To create a new payment: POST http://your-app-url/api/payments with the enrollment_id in the request payload.
 */
