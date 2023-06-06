
import Eventito from "./event.js";

class App {
  constructor(){
    this._FetchAll()
  }
 _FetchAll(){
  const contenedor = document.querySelector("Tarea")
  fetch("/Lookup")





  contenedor.innerHTML = NuevoContenido
 }
}


const app = new App();