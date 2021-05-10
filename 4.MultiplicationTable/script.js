function perkalian() {

// ambil input dari user
let number = document.getElementById("input").value;
let data= '';
//create multiplication table dengan for-loop
for(let i = 1; i <= 10; i++) {
    let result = i * number;
     data += `${i} * ${number} = ${result} <br>`;
    }
    document.getElementById("output").innerHTML = data;
    return false;
}