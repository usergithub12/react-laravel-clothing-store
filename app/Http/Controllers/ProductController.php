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

          $product=new Product();

          $product->name=$request->name;
          $product->price=$request->price;
          $product->size=$request->size;
          $product->rating=$request->rating;
          $product->main_image=$request->main_image;
          $product->images=$request->main_image;
//belongs to
        //   $user->account()->associate($account);

        $product_data = new ProductData();
        //color
        $color=new Color();
        $color->name=$request->color;
        $product_data->color()->associate($color);
        //$color->save();
         //material
         $material=new Material();
         $material->name=$request->material;
         $product_data->material()->associate($material);
       //  $material->save();
          //Type
          $type=new Type();
          $type->name=$request->type;
          $product_data->type()->associate($type);
        //  $type->save();
           //Gender
         $gender=new Gender();
         $gender->name=$request->gender;
         $product_data->gender()->associate($gender);
       //  $gender->save();
          //Country
          $producer=new Producer();
          $country=new Country();
          $country->name=$request->country;
          $producer->name=$request->producer;
       //   $country->save();
          $producer->country()->associate($country);
        //  $producer->save();
            //Producer
         
          $producer->name=$request->producer;
          
          $product_data->producer()->associate($producer);
       
        
       
       
      

        // $product = Product::create([
        //     'name' => $validatedData['name'],
        //     'price' => $validatedData['price'],
        //     'size' => $validatedData['size'],
        //     'rating' => $validatedData['rating'],
        //     'main_image' => $validatedData['main_image'],
        //     ]);
        $product_data->save();
        $product_data->products()->save($product);
        $product->save();
        // $product->attach($product_data->Id);
        $product->product_data()->save($product_data);
    //    $product->push();
             
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
