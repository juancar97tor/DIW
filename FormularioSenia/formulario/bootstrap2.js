var incidenciaId = window.location.href.split("?")[1];
console.log(incidenciaId);

$.getJSON( "incidencias/"+incidenciaId, function( data ) {
    
      $.each( data, function( key, val ) {
        console.log(key + ".." +val);
        
        //Prubes en casa //No funciona porque no vale, tengo que almacenar los datos del primer html en el segundo html
        //host google.es
        
        //var campo= document.getElementsByName(key)[0].value;
        if(document.getElementsByName(key)[0]!= undefined){
        document.getElementsByName(key)[0].value = val;
        }
       
        
       // campo.value  = val;

      console.log(val);

      
  
    });

  });