export const MiembrosAdmin = () => {

  return (
<>
<section id="pantalla-d-grupo">
  <div class="izquierda-grupo">
    <h4>Estas en el grupo: Los Carteleros</h4>
    <h4>Tu amigo secreto es: Sin definir</h4>
  </div>
  <div class="derecha-grupo">
  <textarea autoCapitalize="characters" disableb placeholder="Descripción del grupo"class="descripción"></textarea>
  </div>
</section>

<section id="amigos">
    <h2>Miembros</h2>

<main>
       

    <section>
  
        <div>

            <div id="contenedor">
                <h4>Juan Manuel Gutiérrez</h4>
                <a>Me gusta la cebolla, pueden darme papitas de cebolla y cosas picantes, soy alergico al maní.</a> 
            </div>
            <br></br>
            <div id="contenedor">
                <h4>Pedro Pablo León Jaramillo</h4>
                <a>Me gustan mucho las gomitas y el mecato en general, lo único que no me gusta son los Doritos. </a> 
            </div>
            <br></br>
            <div id="contenedor">
                <h4>Cesar Augusto Casas</h4>
                <a>Me gusta la paleta pero no me gusta mucho el mecato, prefiero un Arequipe que un paquete de papitas. </a> 
            </div>
            <br></br>
            <div id="contenedor">
                <h4>Andres Olmedo Cifuentes</h4>
                <a>Me encanta el maní en todas sus presentaciones, dulce, salado, mixto, etc... no me gustan mucho las aceitunas </a> 
            </div>
        </div>
   
    </section>

    <h4>Fechas Especiales</h4>
    <input type="date"></input> <button>Agregar</button>

</main>

</section>
</>
)
};

