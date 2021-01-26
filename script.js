function openClose() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " squishy";
    } else {
        x.className = "nav";
    }
}

//let url = 'https://api.nasa.gov/planetary/apod';
let url = 'https://api.nasa.gov/planetary/apod?api_key=XTO4jTyAzdJAZ47Rz0Ya6e52dYM3HuZuY6vzGnPf';
let data;


function fetchyFetch() {
    fetch(url)
    // fetch(url, {
    //     headers: {
    //         'api_key':'XTO4jTyAzdJAZ47Rz0Ya6e52dYM3HuZuY6vzGnPf'
    //     }
    // })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        data = json;
        document.querySelector('#title').innerText = data.title;
        document.querySelector('#dailyImageSD').src = data.url;
        document.querySelector('#dailyImageHD').src = data.hdurl;
        document.querySelector('#date').innerText = data.date;
        document.querySelector('#explan').innerText = data.explanation;
    })
    .catch(err => console.log('oops something went wrong', err))
}
fetchyFetch();

let sd = document.querySelector('#sd');
let hd = document.querySelector('#hd');
let sdPic = document.querySelector('#dailyImageSD');
let hdPic = document.querySelector('#dailyImageHD');

function changeActiveSD() {
    // sdPic.classList.add("active")
    sdPic.target.style.display = 'inline';
    // hdPic.classList.remove('active');
    hdPic.style.display = 'none';
}
sd.addEventListener('click',changeActiveSD);

function changeActiveHD(event) {
    // hdPic.classList.add("active")
    hdPic.style.display = 'inline';
    // sd.classList.remove('active');
    sd.style.display = 'none';
}
hd.addEventListener('click',changeActiveHD);