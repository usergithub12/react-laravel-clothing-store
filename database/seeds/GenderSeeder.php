<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sGender= ['Чоловічий','Жіночий','Дитячий'];
        $genders = [];
        for ($i = 0; $i < count($sGender); $i++) {
            $genders[$i]=['name' => $sGender[$i]];
        }
        DB::table('genders')->insert($genders);
    }
}
