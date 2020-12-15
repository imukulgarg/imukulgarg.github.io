const auth = '563492ad6f91700001000001202dcab29bbb4413ad19bcdae089a9a9';
const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.submit');
const search = document.querySelector('.input');
const load = document.querySelector('.more');
let searchQuery;
let page = 1;
let fetchLink;
let lastSearch;

search.addEventListener('input', updateSearchQuery);
btn.addEventListener('click', updateResults);
load.addEventListener('click', loadMore);

function updateSearchQuery(){
    searchQuery = search.value;
}

function updateResults(e){
    e.preventDefault();
    lastSearch = searchQuery;
    searchPhotos(searchQuery);
    clear();
}

function clear(){
    gallery.innerHTML = "";
    search.value="";
}

async function fetchAPI(url){
    let response = await fetch(url, {
        method : "GET",
        headers : {
            Accept : "application/json",
            Authorization : auth
        }
    });

    let data = await response.json();
    return data;
}

async function generateImages(data){
    data.photos.forEach(photo => {
        let photoDiv = document.createElement('div');
        photoDiv.innerHTML = `<div class="info">
                                <p>${photo.photographer}</p> 
                                <a target="_blank" href=${photo.src.original}>Download</a>
                                </div> 
                                <img src="${photo.src.large}"></img> `
        photoDiv.classList.add('photo');
        gallery.append(photoDiv);
    });
}

async function getData(){
    fetchLink = 'https://api.pexels.com/v1/curated?per_page=24&page=1'
    const data = await fetchAPI(fetchLink);
    generateImages(data);
}

async function searchPhotos(query){
    fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=24&page=1`
    const data = await fetchAPI(fetchLink);
    generateImages(data);
}

async function loadMore(){
    page++;
    if(lastSearch){
        fetchLink = `https://api.pexels.com/v1/search?query=${lastSearch}+query&per_page=24&page=${page}`
    }else{
        fetchLink = `https://api.pexels.com/v1/curated?per_page=24&page=${page}`
    }
    const data = await fetchAPI(fetchLink);
    generateImages(data);
}

getData();