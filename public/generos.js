window.addEventListener("load", function(){

var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var idGenero = queryString.get("idgenero")
  var nombreGen= queryString.get("nombregenero")
  document.querySelector(".nombredegenero").innerHTML= "<h2 class=generotitulo>" + nombreGen + "</h2>"

 // esto es el js para las peliculas del genero
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=063b16f0b4b52316bdf354da4c0177d7&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" + idGenero)
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

    var arrayDePeliculas= information.results

    console.log(information.results);

      for (var i = 0; i < arrayDePeliculas.length; i++) {
        var titulo= arrayDePeliculas[i].original_title
        var imagen= arrayDePeliculas[i].poster_path
        var id= arrayDePeliculas[i].id
        var url = "https://image.tmdb.org/t/p/original"
          elementoHTML = "<div class='uk-position-center uk-panel'>"
          elementoHTML += "</div>"
          document.querySelector(".generardo").innerHTML+= "<li> <a href= /home/detalle/?idmovie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"

  }


  })

  .catch(function(error) { console.log("Error: " + error);
  })


   // Esto de abajo es el js para la lista de generos

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

var arrayDeGeneros= information.genres

for (var i = 0; i < arrayDeGeneros.length; i++) {
var nombres = arrayDeGeneros[i].name
var id = arrayDeGeneros[i].id
document.querySelector(".generos-drop").innerHTML += "<a href='/genero/?idgenero=" + id + "&nombregenero="+nombres+ "'>" + nombres + "</a>"

}

console.log(information.genres);
})

  .catch(function(error) { console.log("Error: " + error);
  })

})
