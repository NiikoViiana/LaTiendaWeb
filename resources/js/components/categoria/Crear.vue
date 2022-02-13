<template>
    <div class="container">

        <div class="card">
            <div class="card-body">
                <form @submit.prevent="crearCategoria" method="POST">
                    <h5 class="card-title">Categorias</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Crear categoria</h6>
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

    name: "crear-categoria",
    data(){
        return{
            categoria:{}
        }
    },
    methods: {
        async crearCategoria(){
            await this.axios.post('api/categoria', this.categoria)
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
