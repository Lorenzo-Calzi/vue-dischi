const app = new Vue({
    el: '#app',

    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        musicData: ''
    }, 
    methods: {
    },

    mounted() {
        const fullUrl = this.url;
        console.log(fullUrl);
        axios
            .get(fullUrl)
            .then(resp => {
                this.musicData = resp.data.response;
        })

        .catch(e => {
            console.error(e)
        })
    }

})


