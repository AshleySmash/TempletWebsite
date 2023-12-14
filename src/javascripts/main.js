import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { searches } from './searches';

for (let s of searches) {
    let s_thumb = document.getElementById('s' + s.id)
    s_thumb.innerHTML = `
    <img src="${s.poster}" alt="${s.title}" class="img-thumbnail"/>
    `

    s_thumb.onclick = function () {
        displaySearch(s)
    }
}

let featured_Search = document.querySelector(".featured")

function displaySearch(search) {
    featured_Search.innerHTML = `
        <div class="card">
            <a class="" href="${search.link}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="card-header">${search.title}</div>
                <div class="card-body"> 
                    <a>
                        <div class="card-footer text-muted">
                            <button>Explore Now!</button>
                        </div>
                    </a>
            
                </div>
            </a>
        </div>
    `
}

function searchWeb(event) {
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for (let s of searches) {
        if (s.title.toUpperCase().indexOf(input.toUpperCase()) == -1) {
            document.querySelector(`#s${s.id}`).classList.add('d-none')
        } else {
            document.querySelector(`#s${s.id}`).classList.remove('d-none')
            count++
        }
    }

    featured_Search.innerHTML = count == 0 ? 'Nothing was found' : ''
}

document.querySelector("button").onclick = searchWeb;
document.querySelector('[type="search"]').onsearch = searchWeb;
document.querySelector("form").onsubmit = searchWeb;