<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adminstrators', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('telephone_number')->nullable();
            $table->string('device_token')->nullable();
            $table->integer('region_id')->nullable()->defualt(1);
            $table->string('staff_id')->nullable()->defualt(1);
            $table->integer('department_id')->nullable()->defualt(1);
            $table->integer('status')->nullable()->defualt(1);
            $table->integer('role_id')->nullable()->defualt(1);
            $table->string('password');
            $table->dateTime('last_login')->nullable();
            $table->string('mask');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adminstrators');
    }
};