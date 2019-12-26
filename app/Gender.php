<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    //
    protected $fillable = ['name'];
    public function product_data()
    {
      return $this->hasMany(ProductData::class);
    }
}
