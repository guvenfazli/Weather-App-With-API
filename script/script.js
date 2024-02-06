
let url = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

async function callData() {
	const response = await fetch(url, options);
	const result = await response.json();
  console.log(result.weather[0].main)
	console.log((result.main.temp-30) / 2);
  let innerHTML = `<h1>${((result.main.temp-30) / 2).toFixed(1)}</h1>`;
  document.querySelector('.degree-section')
    .innerHTML = innerHTML
  
  let renderPNG = `<img src="images/${result.weather[0].main}.png" alt="">`
  document.querySelector('.weather-image')
    .innerHTML = renderPNG

  document.querySelector('.weather-info')
    .innerHTML = `<h1>${result.weather[0].description}</h1>`
}




const buttonElement = document.querySelector('.search-button')



buttonElement.addEventListener('click', () => {
  const inputElement = document.querySelector('.js-search-input')
  const cityName = inputElement.value; 
  url = `https://open-weather13.p.rapidapi.com/city/${cityName}`
  callData()
})



/*
const deneme = {"coord":{"lon":-3.7026,"lat":40.4165},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":54.66,"feels_like":52.12,"temp_min":52.11,"temp_max":56.46,"pressure":1018,"humidity":49},"visibility":10000,"wind":{"speed":9.22,"deg":240},"clouds":{"all":75},"dt":1699283700,"sys":{"type":2,"id":2007545,"country":"ES","sunrise":1699253391,"sunset":1699290418},"timezone":3600,"id":3117735,"name":"Madrid","cod":200}

console.log(deneme.main.temp)
*/



