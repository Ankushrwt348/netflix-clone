const sr = document.querySelector('#sr');
const cr = document.querySelector('#cr');

function get(){
    document.location.href = 'https://www.youtube.com/watch?v=jMlJ7FTk35c&ab_channel=IGN';
}
cr.addEventListener('click' ,() => {
    cr.style.display='none';
    srch.style.display= 'none';
    sr.style.color='white'
    window.location.reload();
})


// const outputElement = document.getElementsByid('p');
sr.addEventListener("click",(data)=>{
    console.log('click')
    const value = document.getElementById('srch').value;
    // const value = srch.value;
    srch.style.display= 'block';
    cr.style.display= 'block';
    sr.style.color='black';
   const btn = document.querySelector('button');
   const url = `https://moviesverse1.p.rapidapi.com/movies/movieBySearch/1?search=${value}`;
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b004f391b9msh8c00e9ba2a964c5p1f052ajsn468e96b6733c',
		'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
	}
};
    if(value===null || value.trim()===""){
       console.log("null")
    }
    else{
    console.log(value)
    data.preventDefault();
    fetch(url,options).then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        const movie =data.movies;
        const name = movie[0].id;
        console.log(name);
        
        displayResults(name);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function displayResults(name) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
        const resultItem = document.createElement('div');
        console.log(name)
        resultItem.innerHTML = name; // Adjust this based on your API response structure
        
        resultsContainer.appendChild(resultItem);
    resultsContainer.style.display = 'block';
}
}
});

for( i=0;i<=9;i++){
     const im= document.querySelector(`#im${i}`);
     const url = `https://moviesverse1.p.rapidapi.com/movies/category/latest-movies/${i}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b004f391b9msh8c00e9ba2a964c5p1f052ajsn468e96b6733c',
		'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
	}
};
fetch(url,options)
.then(response =>{ return response.json()})
.then(apiResponse =>{ 
    console.log(apiResponse)
    const data = apiResponse.movies;    
    data.forEach((data, index) => {
        im.children[index].src=`${data.img}`;
    });
})
.catch(error => {
    console.error('Error:', error);
  });

}