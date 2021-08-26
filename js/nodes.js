const moviesContainer = document.getElementById('movies')

const cleanContainer = () => {
    moviesContainer.innerHTML = ''
}

const buildMovie = ({ Poster, Title, Year }) => {
    const e = document.createElement('div')
    e.setAttribute('class', 'movie-item')

    e.innerHTML = `
    <h4 class="title">${Title} (${Year})</h4>
    <img src=${Poster} width="300" height="445" alt="poster" />
  `

    return e
}

const buildImgContainer = (path, className, alt) => {
    const div = document.createElement('div')
    div.setAttribute('class', className)
    const img = document.createElement('img')

    cleanContainer()
    img.setAttribute('class', className)
    img.setAttribute('alt', alt)
    img.setAttribute('src', path)
    img.setAttribute('width', '100')
    img.setAttribute('height', '100')

    div.appendChild(img)

    return div
}

export const startLoading = () => {
    const loading = buildImgContainer('img/loading.svg', 'loading', 'loading...')
    moviesContainer.appendChild(loading)
}

export const buildError = (errorMsg) => {
    cleanContainer()

    const error = buildImgContainer('img/error.svg', 'error', 'error')

    const span = document.createElement('span')
    span.setAttribute('class', 'error')
    span.innerText = errorMsg

    error.appendChild(span)

    moviesContainer.appendChild(error)
}

export const buildMovies = (moviesData) => {
    cleanContainer()

    moviesData.map(data => buildMovie(data)).forEach(node => moviesContainer.appendChild(node))
}