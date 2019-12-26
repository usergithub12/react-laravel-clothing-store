<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    //
    public function product_data()
    {
      return $this->hasMany(ProductData::class);
    }
}
