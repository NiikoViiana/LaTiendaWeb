const Home      = ()=> import('./components/Home.vue');
const Contacto  = ()=> import('./components/Contacto.vue');

//Importamos los componentes para Autores
const Mostrar   = ()=> import('./components/autor/Mostrar.vue');
const Crear     = ()=> import('./components/autor/Crear.vue');
const Editar    = ()=> import('./components/autor/Editar.vue');


//Importamos los componentes para Autores
const MostrarAutor      = ()=> import('./components/autor/Mostrar.vue');
const CrearAutor        = ()=> import('./components/autor/Crear.vue');
const EditarAutor       = ()=> import('./components/autor/Editar.vue');

//Importamos los componentes para Categoria
const MostrarCategoria      = ()=> import('./components/categoria/Mostrar.vue');
const CrearCategoria        = ()=> import('./components/categoria/Crear.vue');
const EditarCategoria       = ()=> import('./components/categoria/Editar.vue');

//Importamos los componentes para Peliculas
const MostrarPelicula       = ()=> import('./components/pelicula/Mostrar.vue');
const CrearPelicula         = ()=> import('./components/pelicula/Crear.vue');
const EditarPelicula        = ()=> import('./components/pelicula/Editar.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'mostrarAutores',
        path: '/autores',
        component: MostrarAutor
    },
    {
        name: 'crearAutor',
        path: '/crear',
        component: CrearAutor
    },
    {
        name: 'editarAutor',
        path: '/editar/:id_autor',
        component: EditarAutor
    },
    {
        name: 'mostrarCategorias',
        path: '/categorias',
        component: MostrarCategoria
    },
    {
        name: 'crearCategoria',
        path: '/crearCategoria',
        component: CrearCategoria
    },
    {
        name: 'editarCategoria',
        path: '/editarCategoria/:id_categoria',
        component: EditarCategoria
    },
    {
        name: 'mostrarPeliculas',
        path: '/peliculas',
        component: MostrarPelicula
    },
    {
        name: 'crearPelicula',
        path: '/crearPelicula',
        component: CrearPelicula
    },
    {
        name: 'editarPelicula',
        path: '/editarPelicula/:id_pelicula',
        component: EditarPelicula
    }
];