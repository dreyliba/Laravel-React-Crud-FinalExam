<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/profiles', 'AdminController@index');
Route::get('/profiles/{id}', 'AdminController@findbyID');
Route::put('/profiles/{id}', 'AdminController@updateProfile');
Route::post('profiles', 'AdminController@store');
Route::delete('profiles/{id}', 'AdminController@deletebyID');