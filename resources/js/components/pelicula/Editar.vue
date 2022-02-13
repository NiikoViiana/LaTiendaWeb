<template>

    <div class="container">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="editarPelicula" method="POST">
                    <h5 class="card-title">Peliculas</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Editar pelicula</h6>

                     <div class="card-text">
                         <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" class="form-control" v-model="pelicula.nombre">
                        </div>                    

                        <div class="form-group">
                            <label>Autor</label>
                            <select class="form-control" v-model="pelicula.id_autor">
                                <option 
                                    v-for="autor in autores" :key="autor.id_autor"
                                    v-bind:value="autor.id_autor"
                                >
                                    {{autor.nombre}}
                                </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Categoria</label>
                            <select class="form-control" v-model="pelicula.id_categoria">
                                <option 
                                    v-for="categoria in categorias" :key="categoria.id_categoria"
                                    v-bind:value="categoria.id_categoria"
                                >
                                    {{categoria.nombre}}
                                </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Productora</label>
                            <input type="text" class="form-control" v-model="pelicula.productora">
                        </div>

                        <div class="form-group">
                            <label>Fecha de Lanzamiento</label>
                            <input type="text" class="form-control" v-model="pelicula.fecha_lanzamiento">
                        </div>
                     </div>
                     <span class="card-link">
                        <button type="button" class="btn btn-info" v-on:click="regresar()">Regresar</button>
                    </span>
                    <span class="card-link">
                        <button type="submit" class="btn btn-primary">Editar</button>
                    </span>
                </form>
            </div>
        </div>
    </div>

    
</template>

<script>
export default {

    name: "editar-pelicula",
    data(){
        return{
            autores:[],
            categorias:[],
            pelicula:{},
        }
    },
    mounted(){
        this.mostrarAutores();
        this.mostrarCategorias();
        this.mostrarPelicula();
    },
    methods: {
        async mostrarAutores(){
            await this.axios.get(`../api/autor/`)
            .then(response => {
                this.autores = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        async mostrarCategorias(){
            await this.axios.get(`../api/categoria/`)
            .then(response => {
                this.categorias = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        async mostrarPelicula(){
            await this.axios.get(`../api/pelicula/${this.$route.params.id_pelicula}`)
            .then(response => {
                this.pelicula = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        async editarPelicula(){
            await this.axios.put(`../api/pelicula/${this.$route.params.id_pelicula}`, this.pelicula)
            .then(response => {
                this.$router.push({name: "mostrarPeliculas"});
            })
            .catch(error => {
                console.log(error);
            })
        },        
        regresar(){
            this.$router.push({name: "mostrarPeliculas"});
        }
    },



}
</script>
