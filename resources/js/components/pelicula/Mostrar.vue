<template>

    <div class="container">

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Peliculas</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    Lista de peliculas
                    <router-link :to='{name:"crearPelicula"}' class="btn btn-sm btn-success">
                        Nuevo
                    </router-link>
                </h6>
                <div class="card-text">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr v-for="pelicula in peliculas" :key="pelicula.id_pelicula">
                                            <td>{{pelicula.id_pelicula}}</td>
                                            <td>{{pelicula.nombre}}</td>
                                            <td>
                                                <div class="btn-group" role="group">
                                                    <router-link :to="{name: 'editarPelicula', params: {id_pelicula: pelicula.id_pelicula}}" class="btn btn-sm btn-info mr-2">
                                                        Editar
                                                    </router-link>
                                                    <button class="btn btn-sm btn-danger" @click="borrarPelicula(pelicula.id_pelicula)">Borrar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    

</template>

<script>
    export default {
        name: "peliculas",
        data() {
            return{
                peliculas:[]
            }
        },
        mounted() {
            this.mostrarPeliculas()
        },
        methods: {
            async mostrarPeliculas() {
                await   this.axios.get('api/pelicula')
                        .then(response => {
                            this.peliculas = response.data
                        })
                        .catch(error => {
                            this.peliculas = [];
                        })
            },
            borrarPelicula(id) {
                if( confirm("¿Confirma eliminar la pelicula?") ) {
                    this.axios.delete(`/api/pelicula/${id}`)
                    .then(response => {
                        this.mostrarPeliculas();
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
            }
        }
    }
</script>
