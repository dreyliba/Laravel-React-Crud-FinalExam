<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Profiles;

class AdminController extends Controller
{
    public function index()
    {
        return Profiles::all();
    }

    public function findbyID($id)
    {
        return Profiles::find($id);
    }

    public function store(Request $request)
    {
        return Profiles::create($request->all());
    }

    public function updateProfile(Request $request, $id)
    {
        $profile = Profiles::findOrFail($id);
        $profile->update($request->all());
        return $profile;
    }

    public function deletebyID($id)
    {
        return [
            'delete' => Profiles::find($id)->delete(),
        ];
    }
}
