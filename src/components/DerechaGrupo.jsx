import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";


export default function DerechaGrupo () {

    return (
      <>
    
    <Container className="pt-5 ">
    <div className=" fs-5 text d-flex  aling-content-end ">
            <textarea autoCapitalize="characters" placeholder="Agregar descripcion del grupo" className="descripción p-2 w-100%"></textarea>
        <div className="p-1">
            <Link to={"/"} className="btn btn-primary mt-3 px-3" type="button">Agregar</Link>
        </div>
    </div>
    </Container>
     </>
      
       
    )}


    <div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


