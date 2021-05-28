const app = new Vue({
    el: '#app',

    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        musicData: ''
    }, 
    methods: {
        filter(){
            document.getElementById('categorie').addEventListener('change', function(){
                const genre = this.value
                console.log(genre);

                if(genre!= 'all') {
                    console.log('si');
                    const filteredAlbums = this.musicData.filter((item) => {
                        if(item.genre == genre) {
                            return item
                        }
                    })
                } else {
                    console.log('no');
                }
            })
        }
    },

    mounted() {
        const fullUrl = this.url;
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


