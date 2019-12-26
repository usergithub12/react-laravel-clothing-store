<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    //
    public function product_data()
    {
      return $this->hasMany(ProductData::class);
    }
}
  