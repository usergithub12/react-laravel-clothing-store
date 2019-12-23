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

Route::get('prod','ProductController@getProducts');

Route::resource('fileupload', 'FileuploadController');
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');
Route::get('user', 'AuthController@getAuthUser');

 Route::post('userexists', 'UserController@CheckIfUserExists');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
