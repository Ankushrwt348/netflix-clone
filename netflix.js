
url = 'https://moviesverse1.p.rapidapi.com/top-250-movies';
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
        let data = apiResponse.movies;
        console.log(data);
        for (let i = 1; i < 11; i++) {
            let im = document.querySelector(`#im${i}`);
            const images = im.querySelectorAll('img');
            console.log(images);
            images.forEach((images, index) => {
                images.src = data[index].image;
                // data.forEach((data, i) => {
                //     images[index].src = data.image;
                // });
            });



        }
    })
    .catch(error => {
        console.error('Error:', error);
    });



function get() {
    document.location.href = 'https://www.youtube.com/watch?v=jMlJ7FTk35c&ab_channel=IGN';
}