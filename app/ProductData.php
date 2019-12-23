<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductData extends Model
{
    //
    public function product_data()
    {
      return $this->hasOne(Product::class);
    }
     public function colors()
     {
       return $this->belongsToMany(Color::class);
     }
     public function materials()
     {
       return $this->belongsToMany(Material::class);
     }
     public function producers()
     {
       return $this->belongsToMany(Producer::class);
     }
     public function types()
     {
       return $this->belongsToMany(Type::class);
     }
     public function genders()
     {
       return $this->belongsToMany(Gender::class);
     }


}
