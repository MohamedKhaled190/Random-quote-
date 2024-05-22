var demo = document.getElementById('demo');
var writer =document.getElementById('writer')
var inserInput = document.getElementById('isert')
var quoteList = [];
var previousIndex ;


var qout = {
    quote: `“Be yourself; everyone else is already taken.”`,
    writer: `―Oscar Wilde`
};
var qout2 = {
    quote: `“So many books, so little time.”`,
    writer: `―Frank Zappa`
};
var qout3 = {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer: `―Albert Einstein`
};
var qout4 = {
    quote: `“A room without books is like a body without a soul.”`,
    writer: `―Marcus Tullius Cicero`
};

// function to insert any qoute you wnat
quoteList.push(qout,qout2,qout3,qout4)
function inser(){
    var product = {
        quote : inserInput.value ,
        writer : '-Sherine reda'
    }
    quoteList.push(product)
    inserInput.value = ""
}

// function when you click change the qoute

function changeQuote() {
    var randomIndex = Math.floor(Math.random() * quoteList.length);
    var random;

    if (randomIndex === previousIndex) {
        if (randomIndex > 0) {
            random = randomIndex - 1;
        } else {
            random = randomIndex + 1;
        }
    } else {
        random = randomIndex;
    }

    demo.innerHTML = quoteList[random].quote;
    writer.innerHTML = quoteList[random].writer;
    previousIndex = random;
}




