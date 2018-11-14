function onSubmit( form ){
    
    var data = JSON.stringify( $(form).serializeArray() );
    console.log("Angel"); //  <-----------
    console.log( data );
    return false; //don't submit
  }

  function showContent() {

    var appBanners = document.getElementsByClassName('grave'), i;
 
    var appBanners2 = document.getElementsByClassName('leve'), j;
 
    var check = document.getElementById("check");
 
    if (check.checked==true) {
     for (var i = 0; i < appBanners.length; i ++) {
       appBanners[i].style.display = 'block';
 
   }
 
   for (var j = 0; j < appBanners2.length; j ++) {
     appBanners2[j].style.display = 'none';
 
 }
 
    }
    else {
     for (var i = 0; i < appBanners.length; i ++) {
       appBanners[i].style.display = 'none';
     }
 
     for (var j = 0; j < appBanners2.length; j ++) {
       appBanners2[j].style.display = 'block';
     }
    }
 
    
 }