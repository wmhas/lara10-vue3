<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class StudentController extends Controller
{
    //
    public function studentFormSubmit(Request $request)
    {
        // Log the incoming data
        Log::info('Student Form Data:', $request->all());

        // Optionally return a response
        return response()->json([
            'message' => 'Form data received',
            'data' => $request->all()
        ]);
    }
}
