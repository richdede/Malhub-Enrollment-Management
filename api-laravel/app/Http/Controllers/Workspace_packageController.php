<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Workspace_Package;
use Illuminate\Http\Request;

class Workspace_packageController extends Controller
{
    protected $workspace_package;
    public function __construct(){
        $this->workspace_package = new Workspace_Package();

    }
    public function index()
    {
        return $this->workspace_package->all();

    }

    public function store(Request $request)
    {
     return $this->workspace_package->create($request->all());


    }

    public function show(string $id)
    {
     return $workspace_package = $this->workspace_package->find($id);
    }

    public function update(Request $request, string $id)
    {
         $workspace_package = $this->workspace_package->find($id);
         $workspace_package->update($request->all());
         return $workspace_package;
    }
    public function destroy(string $id)
    {
     $workspace_package = $this->workspace_package->find($id);
    return $workspace_package->delete();
    }
}
