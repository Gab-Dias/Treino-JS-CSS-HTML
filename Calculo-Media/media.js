function CalcularMedia(){

    var total = 0;
    var quantidade = arguments.length;
    var x = 0;

    while(typeof arguments[x] === 'number') { // se o tipo do arguments[x] for considerado number, entrar no calculo
        total += arguments[x]
        x++
    }

    return total / quantidade;
}

var media1 = CalcularMedia(2, 3)
var media2 = CalcularMedia(0, 0, 10, 10)

console.log(`A media 1 é ${media1}`)
console.log(`A media 2 é ${media2}`)