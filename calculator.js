function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}

module.exports={
    addition : add,
    substraction : sub,            //key : valur pairs of mudule
    multiplication : mul,
    division : div
}