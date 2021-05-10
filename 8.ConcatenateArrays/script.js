 //buat variabel
 let x = 0;
 let array1 = Array();
 let array2 = Array();
 let array3 = array1.concat(array2);

function concatenateArray(){
    array1 = document.getElementById("input").value;
    array2 = document.getElementById("input2").value;
    array3 = [...new Set([...array1,...array2])];

    document = document.getElementById("output").innerHTML = array3.sort();
}
