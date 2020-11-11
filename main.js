let osoba = {
    age: "",
    sex: "",
    height: 0,
    weight: 0,

muz: function(w = this.weight, h = this.height, a = this.age) {
    newFunction();
    return ((13.97*weight)+(4.799*height)-(5.677*age)+88.362); 
},
zena: function(w = this.weight, h = this.height, a = this.age){
    return(9.247*weight+3.098*height-4.33*age+447.593)
},
};
document.getElementById('calc').addEventListener('click', function() {
    osoba.sex = document.getElementById('woman').checked ? 'Žena' : 'Muž';
    osoba.age = document.getElementById('age').value;
    osoba.height = document.getElementById('height').value;
    osoba.weight = document.getElementById('weight').value;
    document.getElementById('result').innerHTML = `kcal = ${osoba.muz()}`;        
});

console.log(weight);

function newFunction() {
    console.log((13.97 * 87) + (4.799 * 190) - (5.677 * 16) + 88.362);
}
