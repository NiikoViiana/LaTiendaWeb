<template>
    <div class="container">

        <div class="card">
            <div class="card-body">
                <form @submit.prevent="crearAutor" method="POST">
                    <h5 class="card-title">Autores</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Crear autor</h6>
                    <div class="card-text">                        
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" class="form-control" v-model="autor.nombre">
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

    name: "crear-autor",
    data(){
        return{
            autor:{}
        }
    },
    methods: {
        async crearAutor(){
            await this.axios.post('api/autor', this.autor)
            .then(response => {
                this.$router.push({name: "mostrarAutores"});
            })
            .catch(error => {
                console.log(error);
            })
        },        
        regresar(){
            this.$router.push({name: "mostrarAutores"});
        }
    }


}
</script>
