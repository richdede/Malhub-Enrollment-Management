<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    protected $course;
    public function __construct(){
        $this->course = new Course();

    }
    public function index()
    {
        return $this->course->all();

    }

    public function store(Request $request)
    {
     return $this->course->create($request->all());


    }

    public function show(string $id)
    {
     return $course = $this->course->find($id);
    }

    public function update(Request $request, string $id)
    {
         $course = $this->course->find($id);
         $course->update($request->all());
         return $course;
    }
    public function destroy(string $id)
    {
     $course = $this->course->find($id);
    return $course->delete();
    }
}
