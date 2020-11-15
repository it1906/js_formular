let osoba = {
    age: "",
    sex: "",
    height: 0,
    weight: 0,

muz: function(w = this.weight, h = this.height, a = this.age) {
    newFunction();
    return ((13.97*w)+(4.799*h)-(5.677*a)+88.362).toFixed(0); 
},
zena: function(w = this.weight, h = this.height, a = this.age){
    return(9.247*w+3.098*h-4.33*a+447.593).toFixed(0);
},
};
document.getElementById('calc').addEventListener('click', function() {
    osoba.sex = document.getElementById('woman').checked ? 'Žena' : 'Muž';
    osoba.age = document.getElementById('age').value;
    osoba.height = document.getElementById('height').value;
    osoba.weight = document.getElementById('weight').value;
    document.getElementById('result').innerHTML = `Váš denní příjem kalorií pro udržení váhy je ${osoba.muz()} kcal`;        
});

console.log(weight);

function newFunction() {
    console.log((13.97 * 87) + (4.799 * 190) - (5.677 * 16) + 88.362);
}