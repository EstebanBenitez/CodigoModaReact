import React from "react";
import "../components/styles/styles.css";
import {Link} from "react-router-dom"
import { AddGroup } from "../components/AddGroup"
import { SearchGroup } from "../components/SearchGroup";

function Home ()  {

     return (
        <>
    
<div className ="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to={"/login"} className="btn btn-primary mt-3 px-5" type="button">Ingresar</Link>
    <Link to={"/register"} className="btn btn-primary mt-3 px-5" type="button">Registrar</Link>
  
</div>
                  
        <section id="pantalla-dividida">
            <SearchGroup />
            
            <AddGroup />
            
        </section>
        </>
)}


export default Home;


