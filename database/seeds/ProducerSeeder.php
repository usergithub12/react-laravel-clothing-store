<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProducerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sBrand= ['Nike', 'Puma', 'Adiddas', 'Vans', 'Lacosta', 'Reebok'];
        $types = [];
        for ($i = 0; $i < count($sBrand); $i++) {
            $types[$i]=[
                'name' => $sBrand[$i],
                'country_id' => rand(0,150)
            ];
        }
        DB::table('producers')->insert($types);
    }
}
