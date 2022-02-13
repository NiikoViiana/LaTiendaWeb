<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AutorController;
use App\Http\Controllers\CategoriaController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('autor', App\Http\Controllers\AutorController::class)->only(['index', 'store', 'update', 'show', 'destroy']);

Route::resource('categoria', App\Http\Controllers\CategoriaController::class, ['parameters' => [
    'categoria' => 'categoria'
]])->only(['index', 'store', 'update', 'show', 'destroy']);

Route::resource('pelicula', App\Http\Controllers\PeliculaController::class, ['parameters' => [
    'pelicula' => 'pelicula'
]])->only(['index', 'store', 'update', 'show', 'destroy']);



