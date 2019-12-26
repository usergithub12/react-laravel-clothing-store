<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    //
    public function producers()
    {
      return $this->hasMany(Producer::class);
    }
}
