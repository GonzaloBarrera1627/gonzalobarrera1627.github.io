

fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data  => {
  
  let fot= document.getElementById('foto')
  fot.innerHTML= `<img id=fo src=${data.results[0].picture.large}></img>`

  let nom= document.getElementById('nombre')
  nom.innerHTML=`<p>Nombre Completo: ${data.results[0].name.first} ${data.results[0].name.last} ${data.results[0].name.title}</p>`

  let eda= document.getElementById('años')
  eda.innerHTML=`<p>Edad: ${data.results[0].dob.age}</p>`

  let gen= document.getElementById('genero')
  gen.innerHTML=`<p>Genero: ${data.results[0].gender}</p>`

  let ciu= document.getElementById('dir')
  ciu.innerHTML=`<p>Dirección: ${data.results[0].location.street.name} ${data.results[0].location.street.number}-${data.results[0].location.city}-${data.results[0].location.country}</p>`

  let nac= document.getElementById('nacimiento')
  nac.innerHTML=`<p>Fecha de Nacimiento: ${data.results[0].dob.date}</p>`

  let corto= document.getElementById('nombrecorto')
  corto.innerHTML=`<p>${data.results[0].name.first} ${data.results[0].name.title}</p>`

  let cel= document.getElementById('celular')
  cel.innerHTML=`<p>Celular: ${data.results[0].cell} </p>`

  let mai= document.getElementById('mail')
  mai.innerHTML=`<p>E-mail: ${data.results[0].email}</p>`

console.log(data);
})


document.getElementById("perfil").style.display = "block";
document.getElementById("informacion").style.display = "none";
document.getElementById("experiencias").style.display = "none";
document.getElementById("habilidades").style.display = "none";


function informacion(){

  document.getElementById("perfil").style.display = "none";
document.getElementById("informacion").style.display = "block";
document.getElementById("experiencias").style.display = "none";
document.getElementById("habilidades").style.display = "none";

}

function habilidades(){

  document.getElementById("perfil").style.display = "none";
document.getElementById("informacion").style.display = "none";
document.getElementById("experiencias").style.display = "none";
document.getElementById("habilidades").style.display = "block";

}

function experiencias(){

  document.getElementById("perfil").style.display = "none";
document.getElementById("informacion").style.display = "none";
document.getElementById("experiencias").style.display = "block";
document.getElementById("habilidades").style.display = "none";

}

function perfil(){

  document.getElementById("perfil").style.display = "block";
document.getElementById("informacion").style.display = "none";
document.getElementById("experiencias").style.display = "none";
document.getElementById("habilidades").style.display = "none";

}