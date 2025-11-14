const app = Vue.createApp({
    data() {
        return {
            url : 'www.youtube.com',
            books:[
                { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isFav: true, img: "assets/1.jpg"},
                { title: 'To Kill a Mockingbird', author: 'Harper Lee', isFav: false, img: "assets/2.jpg"},
                { title: '1984', author: 'George Orwell', isFav: true, img: "assets/3.jpg"},
            ],
            showBooks: true
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        eventHandler(e) {
            console.log(e)
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app');