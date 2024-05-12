const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');


formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        await fetch('https://sheet.best/api/sheets/e16c9eb6-9f29-4a20-8983-ae52a07ef467',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                "Nombre": formulario.nombre.value,
                "Correo": formulario.Correo.value,
                "Telefono": formulario.telefono.value
            })
        });

    }catch(error){
        console.log(error);
    }
    
    // leer filas 

    /*try {
        const respuesta = await fetch('https://sheet.best/api/sheets/e16c9eb6-9f29-4a20-8983-ae52a07ef467',
        {
            method: 'DELETE'
        });
        
        const contenido = await respuesta.json();
        console.log(contenido);

    }catch(error){
        console.log(error);
    } */


    registro.classList.remove('activo');
    exito.classList.add('activo');
});