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
// Route::post('login', 'LoginController')->name('login');
// Route::get('user/{email}', 'ProjectController@CheckIfUserExists');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
