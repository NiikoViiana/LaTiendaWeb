<template>

    <div class="container">

        <div class="card">
            <div class="card-body">
                <form @submit.prevent="editarCategoria" method="POST">
                    <h5 class="card-title">Categorias</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Editar categoria</h6>
                    <div class="card-text">
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" class="form-control" v-model="categoria.nombre">
                        </div>
                    </div>
                    <span class="card-link">
                        <button type="button" class="btn btn-info" v-on:click="regresar()">Regresar</button>
                    </span>
                    <span class="card-link">
                        <button type="submit" class="btn btn-primary">Crear</button>
                    </span>
                </form>
            </div>
        </div>

    </div>

    
</template>

<script>
export default {

    name: "editar-categoria",
    data(){
        return{
            categoria:{}
        }
    },
    mounted(){
        this.mostrarCategoria();
    },
    methods: {
        async mostrarCategoria(){
            await this.axios.get(`../api/categoria/${this.$route.params.id_categoria}`)
            .then(response => {
                this.categoria = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        async editarCategoria(){
            await this.axios.put(`../api/categoria/${this.$route.params.id_categoria}`, this.categoria)
            .then(response => {
                this.$router.push({name: "mostrarCategorias"});
            })
            .catch(error => {
                console.log(error);
            })
        },
        regresar(){
            this.$router.push({name: "mostrarCategorias"});
        }
    }  
    


}
</script>
