<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profiles extends Model
{
    protected $table = "profiles";

    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'course',
        'year_level',
        'sitio',
        'barangay',
        'municipality',
        'province',
        'zipcode',
        'image'
    ];
}
