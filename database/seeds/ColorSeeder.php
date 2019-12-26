<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sColor = ['Червоний', 'Чорний', 'Синій', 'Білий', 'Сірий', 'Блактний', 'Розовий', 'Жовтий', 'Зелений', 'Фіолетовий'];
        $colors = [];
        for ($i = 0; $i < count($sColor); $i++) {
        $colors[$i]=['name' => $sColor[$i]];
        }
        DB::table('colors')->insert($colors);
    }
}
