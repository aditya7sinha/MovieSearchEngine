

const apiUrl='http://www.omdbapi.com/?apikey=';
const apiKey='bb568066';
var result;
// const output=document.getElementsByClassName("output")

// function f1(){
//   var searchBar=document.getElementById("searchBar").value;
//   getMovie(searchBar)
//   async function getMovie(name){
//     const response =await fetch(`${apiUrl}${apiKey}&t=${name}`)
//     const json = await response.json();
//     console.log(json)
// }
// }
//getting user input
document.getElementById("formData").addEventListener("submit",reply)
function reply(e){
    e.preventDefault();
    var result=document.getElementById("text-input").value
    getMovie(result).then( result =>{
      console.log(result)
      document.getElementById("image-class").innerHTML=`
      <img src=${result.Poster} alt="movie poster">`;
      document.getElementById("content").innerHTML=
      `<div id="card">
      <div id="movie-title">Title: ${result.Title}&nbsp;&nbsp;&nbsp;(${result.Year})</div>
      <div id="movie-genre">Genre: ${result.Genre}</div>
      <div id="movie-writer">Writer: ${result.Writer}</div>
      <div id="movie-language">Language: ${result.Language}</div>     
      <br>
      <div id="movie-plot">${result.Plot}</div>
      <div id="movie-ratings>Ratings: ${result.Ratings}</div>
      </div>
      `;
    }).catch(err => console.log(err))
    
  // document.getElementById('formData').reset();
}

async function getMovie(name){
  const response =await fetch(`${apiUrl}${apiKey}&t=${name}`)
  const json = await response.json();
  return json;
}


