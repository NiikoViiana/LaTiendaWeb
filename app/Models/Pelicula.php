<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    use HasFactory;
    protected $table        =   'peliculas';
    protected $primaryKey   =   'id_pelicula';
    protected $fillable     =   ['nombre', 'fecha_lanzamiento', 'productora', 'id_categoria', 'id_autor'];
}
