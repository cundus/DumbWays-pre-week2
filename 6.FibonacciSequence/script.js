function fibonacci(){
   // buat array dan variable!
   
    let numMax= document.getElementById("box").value;
    let fib = []; 
    fib[0] = 0;
    fib[1] = 1;
    let result = '';
        for (i = 2; i <= numMax; i++) {
            // angka Fib yang selanjutnya = sebelumnya + 1 lagi sebelumnya
            
            fib[i] = fib[i - 2] + fib[i - 1];    
            result += fib[i] +" ";
        }
        document.getElementById("output").innerHTML = fib;

    return true;
}   


