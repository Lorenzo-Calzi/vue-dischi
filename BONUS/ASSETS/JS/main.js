const app = new Vue({
    el: '#app',

    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        musicData: [],
        genres: [],
        selectedGenre: 'All',

    }, 

    methods: {

    },

    mounted() {
        const fullUrl = this.url;
        axios
            .get(fullUrl)
            .then(resp => {
                this.musicData = resp.data.response;

                this.musicData.forEach(element => {
                    if(!this.genres.includes(element.genre)) {
                        this.genres.push(element.genre)
                    }
                });
                console.log(this.genres);
            })

            .catch(e => {
                console.error(e)
        })
    }

})


