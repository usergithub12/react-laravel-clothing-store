<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    //
    public function getProducts()
    {
        $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')->get();
        return   $products->toJson();
    }

    public function getProduct(Request $request)
    {
        $id= request('id');
        $product = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')->get()->where('id', $id)->first();
        return   $product->toJson();
    }

}
