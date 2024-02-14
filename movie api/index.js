const wordName = document.getElementById('movieName');
const btn = document.getElementById('btn');
const isresult = document.getElementById("movieDetails");

async function fetchmovieDetails() {
    const word = movieName.value;
    const result = await fetch(`https://www.omdbapi.com/?t=${word}&apikey=c37526bb`);
    const jsonData = await result.json();
    isresult.innerHTML = "";

    // Create a div to hold the movie details
    let div = document.createElement("div");

    // Create a div to hold the movie poster
    const posterDiv = document.createElement("div");
    posterDiv.classList.add("movieImg");
    posterDiv.innerHTML = `<img src="${jsonData.Poster}">`;

    // Append the movie poster div to the movie details div
    div.appendChild(posterDiv);

    // Append the movie details to the movie details div
    div.innerHTML += `
    <h2>Title : <span>${jsonData.Title}</span></h2>
<p><strong>Year : </strong><span>${jsonData.Year}</span></p>
<p><strong>Director : </strong><span>${jsonData.Director}</span></p>
<p><strong>Actors : </strong><span>${jsonData.Actors}</span></p>
<p><strong>Released : </strong><span>${jsonData.Released}</span></p>
<p><strong>Plot : </strong><span>${jsonData.Plot}</span></p>
<p><strong>Awards : </strong><span>${jsonData.Awards}</span></p>
<p><strong>Country : </strong><span>${jsonData.Country}</span></p>
<p><strong>Language : </strong><span>${jsonData.Language}</span></p>
<p><strong>Production : </strong><span>${jsonData.Production}</span></p>
<p><strong>Writer : </strong><span>${jsonData.Writer}</span></p>`;

   

    isresult.appendChild(div);
}

btn.addEventListener('click', fetchmovieDetails);

