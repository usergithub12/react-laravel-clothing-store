<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    public $timestamps = false;
    protected $fillable = ['name','price','size','rating',
     'material','color','product_data_id'
    ];
    public function product_data()
    {
      return $this->belongsTo(ProductData::class);
    }
}
