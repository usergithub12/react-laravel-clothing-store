<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sType = ['Кеди', 'Ботинки', 'Кроссовки', 'Луноходи', 'В`єтнамки', 'Тапки', 'Туфли', 'Чешки', 'Эспадрильи'];
        $types = [];
        for ($i = 0; $i < count($sType); $i++) {
            $types[$i]=['name' => $sType[$i]];
        }
        DB::table('types')->insert($types);
    }
}
