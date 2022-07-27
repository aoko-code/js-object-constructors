
function book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.info = function(){
        return book = `The ${this.title} by ${this.author}, ${page} pages , ${this.read} `
    };
}
const book1 = new book('Miss Monet', 'perleka', 300, 'not read yet')





// return book = new book(`The ${this.title} by ${this.author}, ${page} pages , ${this.read} `)
