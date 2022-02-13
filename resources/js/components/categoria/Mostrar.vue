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
                <h5 class="card-title">Categorias</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    Lista de categorias
                    <router-link :to='{name:"crearCategoria"}' class="btn btn-sm btn-success">
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
                                        <tr v-for="categoria in categorias" :key="categoria.id_categoria">
                                            <td>{{categoria.id_categoria}}</td>
                                            <td>{{categoria.nombre}}</td>
                                            <td>
                                                <div class="btn-group" role="group">
                                                    <router-link :to="{name: 'editarCategoria', params: {id_categoria: categoria.id_categoria}}" class="btn btn-sm btn-info mr-2">
                                                        Editar
                                                    </router-link>
                                                    <button class="btn btn-sm btn-danger" @click="borrarCategoria(categoria.id_categoria)">Borrar</button>
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
        name: "categorias",
        data() {
            return{
                categorias:[],
                mostrarMensaje: false,
                mensaje: ""
            }
        },
        mounted() {
            this.mostrarCategorias()
        },
        methods: {
            async mostrarCategorias() {
                await   this.axios.get('api/categoria')
                        .then(response => {
                            this.categorias = response.data
                        })
                        .catch(error => {
                            this.categorias = [];
                        })
            },
            borrarCategoria(id) {
                if( confirm("¿Confirma eliminar la categoria?") ) {
                    this.axios.delete(`/api/categoria/${id}`)
                    .then(response => {
                        this.mostrarCategorias();
                    })
                    .catch(error => {
                        this.mensaje         =  `
                                                    <p>La categoría no puede ser eliminada, esto se puede deber a:</p>
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
