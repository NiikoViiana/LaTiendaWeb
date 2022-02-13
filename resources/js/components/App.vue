<template>

    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">La tienda web</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link  to="/autores" class="nav-link active" aria-current-value="page">
                            Autores
                        </router-link>

                    </li>
                    <li class="nav-item">
                        <router-link to="/categorias" class="nav-link">Categorias</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/peliculas" class="nav-link">Peliculas</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="mt-4">
            <router-view></router-view>
        </div>
    </main>

    

</template>