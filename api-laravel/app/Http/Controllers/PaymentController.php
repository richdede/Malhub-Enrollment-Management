<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::all();

        return response()->json(['payments' => $payments]);
    }

    public function show($id)
    {
        $payment = Payment::find($id);

        if (!$payment) {
            return response()->json(['message' => 'Payment not found'], 404);
        }

        return response()->json(['payment' => $payment]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'enrollment_id' => 'required|exists:enrollments,id',
        ]);

        $payment = Payment::create([
            'enrollment_id' => $request->enrollment_id,
            'status' => 'pending',
            'time_initiated' => now(),
        ]);

        return response()->json(['payment' => $payment], 201);
    }


    /**
     * Get payments made by a particular user.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserPayments($userId)
    {
        $userPayments = Payment::whereHas('enrollment.user', function ($query) use ($userId) {
            $query->where('id', $userId);
        })->with(['enrollment.course', 'user'])->get();

        if ($userPayments->isEmpty()) {
            return response()->json(['message' => 'No payment history found'], 200);
        }

        return response()->json(['userPayments' => $userPayments]);
    }

}