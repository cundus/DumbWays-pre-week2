function removesArray(){
    let array = new Array();
    let hapus =  document.getElementById("box2").value;
    array = document.getElementById("box").value;

    
    // array = array.delete(hapus);
    console.log(array);
    document.getElementById("output").innerHTML = array;
}