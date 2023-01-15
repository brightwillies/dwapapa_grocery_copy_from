<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\AdminAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::get('/{id}', [AdminAuthController::class, 'getDetails']);
        Route::post('passwordreset', [AdminAuthController::class, 'resetPassword']);
        Route::post('/update/{id}', [AdminAuthController::class, 'UpdateAdmin']);
        Route::post('/login', [AdminAuthController::class, 'Login']);
        ;
    }
    );

});