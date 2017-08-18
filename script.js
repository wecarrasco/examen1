$(document).ready(function(){
  $('#agregar').click(function(){
     var obj = {};
     var nombre = "";
     var elements = document.querySelectorAll("input");
     for (var i = 0; i < elements.length; ++i) {
       var element = elements[i];
       var id = element.id;
       if (id == "nombreCalcetin") {
         nombre = element.value;
       }
       var value = element.value;
       if (id) {
         obj[id]= value;
       }
     }
     //guardar a localStorage
    localStorage.setItem(nombre, JSON.stringify(obj));
    $('#formID')[0].reset();
});

  $('#modificar').click(function(){
    var obj = {};
    var nombre = "";
    var elements = document.querySelectorAll("");
  })

  $('#search').click(function(){
    var nombre = document.getElementById("searchID").value;
    var js = localStorage.getItem(nombre);
    if (!js) {
      alert("No existe el calcetin "+nombre);
    }else{
      var obj = JSON.parse(js);
      document.getElementById("nombreCalcetin").value = obj.nombreCalcetin;
      document.getElementById("marcaCalcetin").value = obj.marcaCalcetin;
      document.getElementById("colorCalcetin").value = obj.colorCalcetin;
      document.getElementById("tallaCalcetin").value = obj.tallaCalcetin;
      document.getElementById("tipoCalcetin").value = obj.tipoCalcetin;
      document.getElementById("precioCalcetin").value = obj.precioCalcetin;
      document.getElementById("imagenCalcetin").value = obj.imagenCalcetin;      
    }
  })
});
