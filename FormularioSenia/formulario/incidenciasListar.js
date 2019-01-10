$.getJSON( "incidencias", function( data ) {
    var items = [];
      $.each( data, function( key, val ) {
      console.log(key);
     var fila="<tr><td>" + val.alumne + 
     "</td><td> " + val.grupo + "</td><td> " + val.profesor + "</td><td> " + val.horario
      + "</td><td> " + val.data + "</td><td> " + val.hora + " </td><td> <a href='bootstrap2.html?"+ val._id + "'>Ver Incidencia</a>" + "</td></tr>";
      
     
      
      $( "#tablalistar" ).append(fila);
  
  
    });
   /*
    $( "<td/>", {
      html: items.join( "" )
    })*/
  });
  
  //Con los datos guardados rellenamos el formulario
  function rellenarFormulario(){
  
    
  
  }
  
  
  //tengo que guardar el formulario y mostrarlos en el segudno html
  function guardarFormulario(){
  
    
  
  }