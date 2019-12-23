<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = ['name','price',
     'project_id','size','rating',
     'material','color','gender_id',
     'producer_id','type_id',
    ];
    public function product_data()
    {
      return $this->hasOne(ProductData::class);
    }
}
