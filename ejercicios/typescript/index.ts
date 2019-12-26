// boolean
let muted: boolean = true;
muted = false; 

enum color {
    Rojo = 'Rojo',
    Verde = 'Verde'
}

interface Rectangulo {
    ancho:number
    alto:number
    color?:color
}

let rect:Rectangulo={
    ancho:4,
    alto:5,
    color:color.Rojo
}

function area(r:Rectangulo){
    return r.ancho*r.alto;
}
const areaReact = area(rect);


rect.toString = function(){
    return this.color ? `un rectangulo ${this.color}`:`un rectangulo`
}
console.log(rect.toString());