let osoba = {
    age: "",
    sex: "",
    height: 0,
    weight: 0,
};

console.log(osoba);

function muz(weight, height, age) {
    return (13.97*weight+4.799*height-5.677*age+88.362); 
};
function zena(weight, height, age){
    return(9.247*weight+3.098*height-4.33*age+447.593)
};
document.getElementById('calc').addEventListener('click', function() {
    osoba.age = document.getElementById('age').value;
    osoba.sex = document.getElementById('woman').checked ? 'Žena' : 'Muž';
    osoba.height = document.getElementById('height').value;
    osoba.weight = document.getElementById('weight').value;
    document.getElementById('result').innerHTML = `kcal = ${muz()}`;        
});

console.log(weight);