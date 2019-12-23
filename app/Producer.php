<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    //
    protected $fillable = ['name','country'];
    public function product_data()
    {
      return $this->belongsToMany(ProductData::class);
    }
}
