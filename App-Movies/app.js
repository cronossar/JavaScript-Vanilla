fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "97d421c3c0msh96eadc884f7d5cep17ec64jsna6975c8abf58",
		"x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(data => {
    //console.log(data)
    const arrayMovies = data
    arrayMovies.map( (element) => {
        //console.log(element)
        const image = element.image
        console.log(image)
        const rank = element.rank
        console.log(rank)
        const genre = element.genre
        console.log(genre)
        const title = element.title
        console.log(title)
        const year = element.year
        console.log(year)

        const poster = `
            <div>
                <img src="${image}" />
                <h2 src="${title}"></h2>
                <small src="${genre}"></small>
                <small src="${year}"></small>
            </div>
            
            `
            document.getElementById('container').innerHTML += poster


    })
})

.catch(err => {
	console.error(err);
});