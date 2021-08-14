export const createOmdbApiUrl = (params) => {
  const paramsStr = params.map(({ param, value }) => `${param}=${value}`).join('&')
  return `https://www.omdbapi.com/?${paramsStr}&apikey=4a3b711b`
}

export const MOVIES_KEY = 'movies'