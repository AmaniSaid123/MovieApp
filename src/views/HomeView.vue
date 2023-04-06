<script setup lang="ts">
import { reactive , onMounted} from "vue";
import { store } from '../services/store.js'
const movies = reactive({ data: [] });

onMounted(async () => {
  const response = await store.getAllMovies();
  movies.data = response;
  //state.isLoading = false
})

</script>
<template>
  <b-container>
    <b-row>
      <b-card-group class="col-md-3" v-for="movie in movies.data">
        <b-card :title="movie.Title" :img-src=movie.Poster img-alt="Img" img-top>
          <p class="card-text">
            {{ movie.Year }}
          </p>
          <p class="card-text">
            {{ movie.Type }}
          </p>
          <div slot="footer">
            <router-link :to="`/movie/${movie.imdbID}`">
              <Details></Details>
            </router-link>
            <div class="fav-icon" >
              <i  class="fab fa-gratipay"></i>
            </div>
          </div>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<style scoped>
.card{
    margin-bottom: 50px;
}
.fav-icon {
  color: red;
  text-align: right;
}
</style>
