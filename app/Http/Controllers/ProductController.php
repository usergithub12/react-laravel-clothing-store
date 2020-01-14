<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Producer;
use App\Type;
use App\Material;
use App\Color;
use App\Gender;
use App\ProductData;
use App\Country;
use App\Fileupload;

class ProductController extends Controller
{
    //


    public function AddProduct(Request $request)
    {
        // $validatedData = $request->validate([
        //     'name' => 'required',
        //     'price' => 'required',
        //     'size' => 'required',
        //     'rating' => 'required',
        //     'main_image' => 'required',
        //   ]);
        $image = Fileupload::latest('id')->first()->filename;
          $product=new Product();

          $product->name=$request->name;
          $product->price=$request->price;
          $product->size=$request->size;
          $product->rating=$request->rating;
          $product->main_image=$image;
          $product->images=$image;
//belongs to
        //   $user->account()->associate($account);

        $product_data = new ProductData();
        //color
       // $color=Color::where('name',$request->color)->first();
       $color=Color::find($request->color);
        $product_data->color()->associate($color);
      
         //material
       //  $material=Material::where('name',$request->material)->first();
       $material=Material::find($request->material);
         $product_data->material()->associate($material);
       //  $material->save();
          //Type
        //  $type=Type::where('name',$request->type)->first();
          $type=Type::find($request->type);
          $product_data->type()->associate($type);
        //  $type->save();
           //Gender
         //  $gender=Gender::where('name',$request->gender)->first();
         $gender=Gender::find($request->gender);
         $product_data->gender()->associate($gender);
       //  $gender->save();
          //Country
        //   $producer=Producer::where('name',$request->producer)->first();
        $producer=Producer::find($request->producer);
       // $country=Country::where('name',$request->country)->first();
          $country=Country::find($request->country);
          $producer->country()->associate($country);
          $product_data->producer()->associate($producer);
          $product_data->save();
          $product->product_data()->associate($product_data);
          $product->save();
        //   $product_data->products()->associate($product);
 
             
   return response()->json('Product created!');
    }

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

public function getGenders(){
    $genders = Gender::get();
    return   $genders->toJson();
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

public function getCountries(){
    $countries = Country::get();
    return   $countries->toJson();
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
