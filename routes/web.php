<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/administrator-login', [DashboardController::class, 'login']);
Route::get('/administrator-dashboard', [DashboardController::class, 'dashboard']);
Route::get('/admin-forgot-password', [DashboardController::class, 'index']);