// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require("../stylesheets/main.scss")

//TODO - Your ES6 JavaScript code (if any) goes here

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert'


//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { searches } from './searches'

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
                    <a><!-- Missing closing tag in the original code -->
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