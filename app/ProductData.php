<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductData extends Model
{
    //
    public function products()
    {
      return $this->hasMany(Product::class);
    }
     public function color()
     {
       return $this->belongsTo(Color::class);
     }
     public function material()
     {
       return $this->belongsTo(Material::class);
     }
     public function producer()
     {
       return $this->belongsTo(Producer::class);
     }
     public function type()
     {
       return $this->belongsTo(Type::class);
     }
     public function gender()
     {
       return $this->belongsTo(Gender::class);
     }


}
