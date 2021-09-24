"use strict"

//EVENTS
$("#btnNew").click(function(){
  openModalCreate(true)

});

$("#frmGame").submit(function(e){

  sendForm();
  e.preventDefault();
});

function openModalCreate(reset = true){
  $('#modalNewGame').modal('show');

  if(reset)
  resetForm();
}

function openModalViewGame  (id){
  $('#modalViewGame').modal('show');
}

function deleteGame(id){
  if(!confirm("Deseja realmente remover?"))
  return;

  console.log(id);
}

//SEND

function sendForm(){
  var obj = {
    id : $("txtId").val(),
    title : $("txtTitle").val(),
    description : $("txtDescription").val(),
    videoid : $("txtVideoid").val()
  };

  var result = validate(obj);
  if(result != ""){
    $("#dvAlert").text(result);
    return;
  }

  if(obj.id == 0){
    console.log("Cadastrar");
  }else{
    console.log("Editar");
  }
  
  console.log(obj);
}

function validate(obj){

  if(obj.id < 0){
    return "ID invalido"
  }
  if(obj.title.length < 4 || obj.title.length > 100){
    return "Titulo invalido";
  }

  if(obj.description.length < 10 || obj.description.length > 250){
    return "Descricao Invalida";
  }

  if(obj.videoid == "" || obj.description.length > 15){
    return "Video ID inválido";
  }

  return "";
}

function resetForm(){
    $("#txtId").val("0");
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtVideoid").val("");
    $("#dvAlert").html("&nbsp;");
  }
