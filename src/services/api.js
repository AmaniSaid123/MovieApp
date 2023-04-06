import axios from 'axios'

const ENDPOINT = 'http://www.omdbapi.com'

export async function getAllMovies() {
  const response = await axios.get(`${ENDPOINT}/?s=Batman&apikey=b508d563`)
  return response.data.Search
}


export async function getShowDetails(id) {
    console.log(`${ENDPOINT}?${id}`)
  const response = await axios.get(`${ENDPOINT}?${id}`)
  console.log(response.data);
  return response.data
}
export async function searchShows({ query }) {
  const response = await axios.get(`${ENDPOINT}/search/shows`, {
    params: {
      q: query
    }
  })
  return response?.data?.map((items) => items.show)
}
