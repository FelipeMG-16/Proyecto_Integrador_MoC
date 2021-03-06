token = localStorage.getItem('token');
const formPublicar = document.querySelector('#formPublicar');

formPublicar.addEventListener('submit', (e) => {
    e.preventDefault();
    let selectCategoria = document.querySelector("[name='categoria']");
    let categoria = selectCategoria.options[selectCategoria.selectedIndex].value;
    const titulo = document.querySelector('#titulo').value;
    const descripcion = document.querySelector('#descripcion').value;
    const precio = document.querySelector('#precio').value;
    const imagen = document.querySelector('#imagen').value;

    // Comprobación y alerts para los campos
    if(categoria != 'Categoria:') {
        alert('Por favor selecciona una categoria');
    }
    if(titulo == '') {
        alert('Por favor introduce un título');
    }
    if(descripcion == '') {
        alert('Por favor introduce una descripción');
    }

    // Peticion fetch
    if (titulo != '' && descripcion != '') {
    
        fetch('https://masters-of-code-back.herokuapp.com/proyectos', {
            method: "POST",
            body: JSON.stringify({
                titulo: titulo,
                descripcion: descripcion,
                precio: precio,
                categoria: categoria,
                imagen: imagen,
                usuarios: {
                    id: userId
                }
            }),
            headers: {
                'Authorization': token,
                'Content-Type': "application/json"
            }
        })// Recarga la pagina
        .then(response => {
            if (response.status = 200) {
                alert('Prroyecto añadido con exito');
                location.reload();
            } else {
                alert('Error con el servidor, una disculpa');
            }
        })
    }
});
