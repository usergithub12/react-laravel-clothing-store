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

//CRUD Products
Route::post('addproduct','ProductController@AddProduct');

/////////////
Route::get('prod','ProductController@getProducts');
Route::get('product','ProductController@getProduct');
//FILTERS
Route::get('productbypricedesc','ProductController@getProductsbyPriceDesc');
Route::get('productbypriceasc','ProductController@getProductsbyPriceAsc');
//gender
Route::get('productbymen','ProductController@getProductsforMens');
Route::get('productbywomen','ProductController@getProductsforWomens');
Route::get('productbykids','ProductController@getProductsforKids');
//producers
Route::get('producers','ProductController@getProducers');
Route::get('productbyproducer','ProductController@getProductsbyProducer');
///types
Route::get('types','ProductController@getTypes');
Route::get('productbytype','ProductController@getProductsbyType');
////materials
Route::get('materials','ProductController@getMaterials');
Route::get('productbymaterial','ProductController@getProductsbyMaterial');
///sizes
Route::get('productbysize','ProductController@getProductsbySize');
//colors
Route::get('colors','ProductController@getColors');
Route::get('productbycolor','ProductController@getProductsbyColor');
//genders
Route::get('genders','ProductController@getGenders');
//countries
Route::get('countries','ProductController@getCountries');

///
Route::resource('fileupload', 'FileuploadController');
Route::post('register', 'AuthController@register');
Route::post('update', 'AuthController@update');
Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');
Route::get('user', 'AuthController@getAuthUser');

 Route::post('userexists', 'UserController@CheckIfUserExists');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
