<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Workspacepackage;
use Illuminate\Http\Request;

class WorkspacepackageController extends Controller
{
    protected $workspace;
    public function __construct(){
        $this->workspace = new Workspacepackage();

    }
    public function index()
    {
        return $this->workspace->all();

    }

    public function store(Request $request)
    {
     return $this->workspace->create($request->all());


    }

    public function show(string $id)
    {
     return $workspace = $this->workspace->find($id);
    }

    public function update(Request $request, string $id)
    {
         $workspace = $this->workspace->find($id);
         $workspace->update($request->all());
         return $workspace;
    }
    public function destroy(string $id)
    {
     $workspace = $this->workspace->find($id);
    return $workspace->delete();
    }
}
