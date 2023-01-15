<?php

namespace Database\Seeders\Personnel;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    
        DB::table('adminstrators')->insert([
            'first_name' => 'Groceries',
            'last_name' => 'Administrator',
            'email' => 'groceries@dwapapa.com',
            'telephone_number' => '0241849088',
            'status' => 1,
            'role_id' => 1,
            'region_id' => 1,
            'department_id' => 1,
            'staff_id' => 'BBEC-1',
            'mask' => \generate_mask(),
            'password' => Hash::make('Dwapapa@2023!!..'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),

        ]);
    }
}
