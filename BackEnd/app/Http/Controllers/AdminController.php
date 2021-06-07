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
        $profile = new Profiles;

        $profile->fname = $request->input('fname');
        $profile->mname = $request->input('mname');
        $profile->lname = $request->input('lname');
        $profile->course = $request->input('course');
        $profile->year_level = $request->input('year_level');
        $profile->sitio = $request->input('sitio');
        $profile->barangay = $request->input('barangay');
        $profile->municipality = $request->input('municipality');
        $profile->province = $request->input('province');
        $profile->zipcode = $request->input('zipcode');
        $profile->image = $request->input('image');

        $profile->save();

        return response()->json([
            'status' => 200,
            'message' => 'Profile Added Successfully',
        ]);

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

    public function edit($id)
    {
        $profile = Profiles::find($id);
        return response()->json([
            'status' => 200,
            'profile' => $profile,
        ]);
    }

    public function updatebyID(Request $request, $id)
    {
        $profile =  Profiles::find($id);

        $profile->fname = $request->input('fname');
        $profile->mname = $request->input('mname');
        $profile->lname = $request->input('lname');
        $profile->course = $request->input('course');
        $profile->year_level = $request->input('year_level');
        $profile->sitio = $request->input('sitio');
        $profile->barangay = $request->input('barangay');
        $profile->municipality = $request->input('municipality');
        $profile->province = $request->input('province');
        $profile->zipcode = $request->input('zipcode');
        $profile->image = $request->input('image');

        $profile->update();

        return response()->json([
            'status' => 200,
            'message' => 'Updated Profile Successfully',
        ]);
    }
}
