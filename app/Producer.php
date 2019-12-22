<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    //
    protected $fillable = ['name','country'];
    public function products()
    {
      return $this->hasMany(Product::class);
    }
}
