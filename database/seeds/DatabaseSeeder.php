<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(ColorSeeder::class);
        $this->call(MaterialSeeder::class);
        $this->call(TypeSeeder::class);
        $this->call(CountriesSeeder::class);
        $this->call(GenderSeeder::class);
        $this->call(ProducerSeeder::class);
    }
}
