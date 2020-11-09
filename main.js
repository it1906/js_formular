let osoba = {
    sex: "",
    age: "",
    weight: 0,
    height: 0,
};

console.log(osoba);

function muz(w = this.weight, h = this.height, a = this.age) {
    return (13.97*w+4.799*h-5.677*a+88.362); 
}
function zena(w = this.weight, h = this.height, a = this.age){
    return(9.247*w+3.098*h-4.33*a+447.593)
}
console.log();