<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Producer;
use App\Type;
use App\Material;
use App\Color;
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

    public function getProductsbyPriceDesc()
    {
        $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')->orderBy('price', 'DESC')->get();
        return   $products->toJson();
    }
    public function getProductsbyPriceAsc()
    {
        $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')->orderBy('price', 'ASC')->get();
        return   $products->toJson();
    }

public function getProductsforMens(){
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    // ->where('product_data.gender_id',1)
   ->whereHas('product_data', function($q){
        $q->where('gender_id','1');
    })
    ->get();
    return   $products->toJson();
}
public function getProductsforWomens(){
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    // ->where('product_data.gender_id',1)
   ->whereHas('product_data', function($q){
        $q->where('gender_id','2');
    })
    ->get();
    return   $products->toJson();
}
public function getProductsforKids(){
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    // ->where('product_data.gender_id',1)
   ->whereHas('product_data', function($q){
        $q->where('gender_id','3');
    })
    ->get();
    return   $products->toJson();
}

public function getProducers(){
    $producers = Producer::get();
    return   $producers->toJson();
}

public function getProductsbyProducer(Request $request){
    $id= $request->id;
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    ->whereHas('product_data', function($q) use ($id){
        $q->where('producer_id',$id);
    })
    ->get();
    return   $products->toJson();
    }

public function getTypes(){
        $types = Type::get();
        return   $types->toJson();
}

public function getProductsbyType(Request $request){
    $id= $request->id;
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    ->whereHas('product_data', function($q) use ($id){
        $q->where('type_id',$id);
    })
    ->get();
    return   $products->toJson();
}


public function getMaterials(){
    $materials = Material::get();
    return   $materials->toJson();
}

public function getProductsbyMaterial(Request $request){
$id= $request->id;
$products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
->whereHas('product_data', function($q) use ($id){
    $q->where('material_id',$id);
})
->get();
return   $products->toJson();
}

public function getProductsbySize(Request $request){
    $size= $request->size;
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    ->where('size',$size)
    ->get();
    return   $products->toJson();
    }


    public function getColors(){
        $colors = Color::get();
        return   $colors->toJson();
    }
    
    public function getProductsbyColor(Request $request){
    $id= $request->id;
    $products = Product::with('product_data.color','product_data.material','product_data.type','product_data.gender','product_data.producer.country')
    ->whereHas('product_data', function($q) use ($id){
        $q->where('color_id',$id);
    })
    ->get();
    return   $products->toJson();
    }
}
