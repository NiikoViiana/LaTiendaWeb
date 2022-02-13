<template>

    <div class="container">

        <div class="alert alert-warning alert-dismissible" role="alert" v-if="mostrarMensaje">
            <strong>Error al eliminar</strong> <span v-html="mensaje"></span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on:click="mostrarMensaje = false">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Autores</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    Lista de autores
                    <router-link :to='{name:"crearAutor"}' class="btn btn-sm btn-success">
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
                                        <tr v-for="autor in autores" :key="autor.id_autor">
                                            <td>{{autor.id_autor}}</td>
                                            <td>{{autor.nombre}}</td>
                                            <td>
                                                <div class="btn-group" role="group">
                                                    <router-link :to="{name: 'editarAutor', params: {id_autor: autor.id_autor}}" class="btn btn-sm btn-info mr-2">Editar</router-link>
                                                    <button class="btn btn-sm btn-danger" @click="borrarAutor(autor.id_autor)">Borrar</button>
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
        name: "autores",
        data() {
            return{
                autores:[],
                mostrarMensaje: false,
                mensaje: ""
            }
        },
        mounted() {
            this.mostrarAutores()
        },
        methods: {
            async mostrarAutores() {
                await   this.axios.get('api/autor')
                        .then(response => {
                            this.autores = response.data
                        })
                        .catch(error => {
                            this.autores = [];
                        })
            },
            borrarAutor(id) {
                if( confirm("¿Confirma eliminar el autor?") ) {
                    this.axios.delete(`/api/autor/${id}`)
                    .then(response => {
                        this.mostrarAutores();
                    })
                    .catch(error => {
                        this.mensaje         =  `
                                                    <p>El autor no puede ser eliminado, esto se puede deber a:</p>
                                                    <ul>
                                                        <li>La categoría puede estar asociada a una película</li>
                                                        <li>Desconexión en la base de datos</li>                                                        
                                                        <li>Mantenimiento del sitio</li>
                                                    </ul>

                                                `;
                        this.mostrarMensaje  =   true;
                    })
                }
            }
        }
    }
</script>
