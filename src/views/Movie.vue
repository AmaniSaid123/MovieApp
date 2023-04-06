<script>
import * as api from '../services/api.js'
import ShowDetailItem from '../components/ShowDetailItem.vue'
export default {
    data() {
        return {
            show: null,
            isLoading: true
        }
    },
    mounted() {
        this.loadMovie()
    },
    components: {ShowDetailItem},
    methods: {
        async loadMovie() {
            const id = this.$route.params.id;
            this.show = await api.getShowDetails(`i=${id}&apikey=b508d563`)

            this.isLoading = false
        }
    }
}
</script>
<template>
    <ShowDetailItem v-if="show" :Title="show.Title" :Genre="show.Genre"
        :Poster="show.Poster" :Actors="show.Actors" :Awards="show.Awards"
        :BoxOffice="show.BoxOffice" :Country="show.Country" :DVD="show.DVD"
        :Language="show.Language" :Plot="show.Plot" :Metascore="show.Metascore"
        :Released="show.Released" :Writer="show.Writer" :Type="show.Type" :Year="show.Year"
        :Rated="show.Rated" :Runtime="show.Runtime" :Ratings="show.Ratings" />
</template>

<style scoped>
.content {
    display: flex;
}

.cover {
    border-radius: 8px;
}
</style>
