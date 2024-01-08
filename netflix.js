const sr = document.querySelector('#sr');
const cr = document.querySelector('#cr');
for (i = 0; i <= 9; i++) {
    const im = document.querySelector(`#im${i}`);
    const url = `https://moviesverse1.p.rapidapi.com/movies/category/latest-movies/${i}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b004f391b9msh8c00e9ba2a964c5p1f052ajsn468e96b6733c',
            'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(response => { return response.json() })
        .then(apiResponse => {
            const data = apiResponse.movies;
            const aTags = im.querySelectorAll('a');
            aTags.forEach((aTag, index) => { 
                const imgTag = aTag.querySelector('img');
                if (imgTag && data[index]) {
                    imgTag.src = `${data[index].img}`;
                    aTag.href=`${data[index].link}`;
                }
            });
            data.forEach((data, index) => {
                im.children[index].src = `${data.img}`;
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
function get() {
    document.location.href = 'https://www.youtube.com/watch?v=jMlJ7FTk35c&ab_channel=IGN';
}
cr.addEventListener('click', () => {
    cr.style.display = 'none';
    srch.style.display = 'none';
    sr.style.color = 'white'
    window.location.reload();
})

sr.addEventListener("click", (data) => {
    const value1 = document.getElementById('srch').value;
    srch.style.display = 'block';
    cr.style.display = 'block';
    sr.style.color = 'black';
    const url = `https://moviesverse1.p.rapidapi.com/movies/movieBySearch/1?search=${value1}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b004f391b9msh8c00e9ba2a964c5p1f052ajsn468e96b6733c',
            'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
        }
      };
    if (value1 === null || value1.trim() === "") {
        console.log("null")
    }
     else{
        document.getElementById("existing").classList.add('hidden')
        fetch(url, options).then(response => {
            return response.json();
        })
            .then(data => {
                console.log(data)
                const movie = data.movies;
                const resultsContainer = document.getElementById('resultsContainer');
                resultsContainer.innerHTML = '';
                displayResults(movie);
                
            })
            .catch(error => {
                console.error('Error:', error);
            });

        function displayResults(movie) {
            resultsContainer.classList.remove('hidden');
            resultsContainer.style.display='flex'
            const result = document.createElement('div');
            result.classList.add('result');
            resultsContainer.appendChild(result);
          
            if (movie.length === 0) {
                console.log("movies found")
                const title = document.createElement('h2');
                title.textContent = `Sorry no movie found.....`;
                result.appendChild(title);
            }
            else {
               
                const img = document.createElement('img');
                img.src = movie[0].img;
                result.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = movie[0].id;
                result.appendChild(title);

                const link = document.createElement('a');
                link.href = movie[0].link;
                link.textContent = movie[0].link;
                result.appendChild(link);

                console.log(result)

            }
        }
        
     }
});

