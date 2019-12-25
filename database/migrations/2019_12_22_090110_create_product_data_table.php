<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('material_id')->unsigned();
            $table->bigInteger('color_id')->unsigned();
            $table->bigInteger('gender_id')->unsigned();
            $table->bigInteger('producer_id')->unsigned();
            $table->bigInteger('type_id')->unsigned();

            $table->foreign('material_id')->references('id')->on('materials');
            $table->foreign('color_id')->references('id')->on('colors');
            $table->foreign('gender_id')->references('id')->on('genders');
            $table->foreign('producer_id')->references('id')->on('producers');
            $table->foreign('type_id')->references('id')->on('types');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_data');
    }
}
