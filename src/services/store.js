import { reactive } from 'vue'
import * as api from './api'

export const store = reactive({
  allShows: [],

  async getAllMovies() {
    if (this.allShows?.length > 0) {
      return this.allShows
    }
    this.allShows = await api.getAllMovies()
    return this.allShows
  }
})
