function asteriskPattern() {
    //ambil input dari user
   let number = document.getElementById("input").value;
    //buat loopingnya sesuai input
        for (i = 1; i <= number; i++) {
            for (j = 0 ; j < i; j++) {
                document.write('*')
            }
            document.write('<br>')
        }
      
    
} 
