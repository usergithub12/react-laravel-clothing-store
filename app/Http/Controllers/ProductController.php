<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    //
    public function getProducts()
    {
        $product = Product::first();
        $colors = $product->product_data()->colors();
        foreach($colors as $color)
        {
            dd(c);
        }
        dd($product->toArray());
    }
}
