function generate(){
   var quotes = {
    "- Albert Camus " : "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    "- Maya Angelou " : "The truth is, no one of us can be free until everybody is free.",
    "- Denis Diderot" : "Man will never be free until the last king is strangled with the entrails of the last priest."
   }
var authors = Object.keys(quotes);

var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;
}

