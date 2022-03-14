
//Asignacion de x cuando se cargue documento
let x = $(document);
//Valida que el documento este OK
x.ready(EventosON);

function EventosON() {
    //alert("Cargo pagina");
    document.tooltip();

};

