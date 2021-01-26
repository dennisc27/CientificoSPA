import router from './routes';

window.addEventListener('load', router); //Espera a que carguen todos los archivos para hacer render
window.addEventListener('hashchange', router); //Para cuando hay un cambio dentro del hash
