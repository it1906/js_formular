let telo ={
    age: "",
    sex: "",
    height: 0,
    weight: 0,

   kcal : function (w = this.weight, h = this.height, a = this.age){
       if (telo.sex === "muž") {
        return ((13.97 * w) + (4.799 * h) - (5.677 * a) + 88.362).toFixed(0);
       }
       if (telo.sex === "žena") {
        return ((9.247 * w) + (3.098 * h) - (4.33 * a) + 447.593).toFixed(0);
       }
   }
};
document.getElementById('calc').addEventListener('click', function () {
    telo.sex = document.getElementById('woman').checked ? 'žena' : 'muž';
    telo.age = document.getElementById('age').value;
    telo.height = document.getElementById('height').value;
    telo.weight = document.getElementById('weight').value;
    document.getElementById('result').innerHTML = `Váš denní příjem kalorií pro udržení váhy je ${telo.kcal()} kcal.`;
});