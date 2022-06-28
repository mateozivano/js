const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = DARK_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
    let storedMode = sessionStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        btn.textContent = SUN;
        document.body.classList.add(DARK_MODE);

    } else if (mode === LIGHT_MODE) {
        btn.textContent = MOON;
        document.body.classList.remove(DARK_MODE);
    }
}

btn.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if (mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    }
});

//fetch

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e8eb0c39dmsh2f695483044f740p1d24dejsn7d2d7a32513d',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};








    
let url = "https://www.econdb.com/api/series/Y10YDAR/?format=json";

let tasa= document.getElementById("tasaInteres");

fetch(url)
.then(response => response.json())
.then(data => {
    

    tasa.innerHTML = `${data.data.values[327]}` + "%";
    console.log(data)
})
.catch(err=>console.log(err))



