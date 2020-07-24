const { link } = require("fs");
var $botao = document.querySelector('#btn');
$botao.addEventListener('click', addValor);
      function addValor(){
    
        console.log(parseFloat(typeof(valor.value)))
        var item = '<li>' + $valor.value + '</li>';
          $valor.value = '';
          $valor.focus();  
     } 
     
   
    $valor.value = "";
     
     function checkNumber(valor) {
       var regra1 = "Deserto de sal - Bolívia";
       var regra2 = "Svalbard - Ártico";
       var regra3 = "Lago Manchado - British Columbia";
       var regra4 = "Parque geológico sangue  Zhangye - China";
       var regra5 = "Fly geyser - Nevada";
       var regra6 = "Cofre de Sementes - Ártico";
       var regra7 = "Parque Hitsujiyama-Japão";
       var regra8 = "Vila de Shirakawago";
       var regra9 = "Lago hiller-Austrália";
       var regra10 = ""

       if(valor.value == ""){}
      { if (valor.match(regra1)) {
         window.location.href = "/Locations/Deserto+de+sal/Bolivia";
       }
       else if(valor.match(regra2)){
        window.location.href = "/Locations/Svalbard/Artico";
       }
       else if(valor.match(regra3)){
        window.location.href = "/Locations/Lago+Manchado/British+Columbia";
       }
       else if(valor.match(regra4)){
        window.location.href = "/Locations/Parque+geologico+sangue+Zhangye/China";
       }
       else if(valor.match(regra5)){
        window.location.href = "/Locations/Fly+geyser/Nevada";
       }
       else if(valor.match(regra6)){
        window.location.href = "/Locations/Cofre+de+Sementes/Artico";
       }
       else if(valor.match(regra7)){
        window.location.href = "/Locations/Parque+Hitsujiyama/Japao";
       }
       else if(valor.match(regra8)){
        window.location.href = "/Locations/Vila+de+Shirakawago/Japao";
       }
       else if(valor.match(regra9)){
        window.location.href = "/Locations/Lago+hiller/Australia";
       }
       else if (valor.match(regra10)){
        window.location.href ="/Search";
       }
    }
  };