var appBuscarPeliculas = new Vue({
    el:'#frm-buscar-peliculas',
    data:{
        mispeliculas:[],
        valor:''
    },
    methods:{
        buscarPelicula:function(){
            fetch(`private/modulos/peliculas/procesos.php?proceso=buscarPelicula&peliculas=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.mispeliculas = resp;
            });
        },
        modificarPelicula:function(peliculas){
            apppelicula.peliculas = peliculas;
            apppelicula.peliculas.accion = 'modificar';
        },
        eliminarPelicula:function(idPelicula){
            fetch(`private/modulos/peliculas/procesos.php?proceso=eliminarPelicula&peliculas=${idPelicula}`).then(resp=>resp.json()).then(resp=>{
                this.buscarPelicula();
            });
        }
    },
    created:function(){
        this.buscarPelicula();
    }
});