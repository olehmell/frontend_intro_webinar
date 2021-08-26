import { buildError, buildMovies, startLoading } from './nodes.js'
import { createOmdbApiUrl, MOVIES_KEY } from './utils.js'

const renderSavedMovies = () => {
    const maybeMovies = JSON.parse(localStorage.getItem(MOVIES_KEY))

    if (maybeMovies) return buildMovies(maybeMovies)
}

const searchByTitle = () => {
    const form = document.forms.search;

    const value = form.elements.searchValue.value;

    startLoading()

    fetch(createOmdbApiUrl([{ param: 's', value }]))
        .then(response => response.json())
        .then(jsonResponse => {
            console.log('Response', jsonResponse)
            if (jsonResponse.Response === "True") {
                localStorage.setItem(MOVIES_KEY, JSON.stringify(jsonResponse.Search))
                buildMovies(jsonResponse.Search)
            } else {
                buildError(jsonResponse.Error);
            }
        })
}

renderSavedMovies()

window.searchByTitle = searchByTitle