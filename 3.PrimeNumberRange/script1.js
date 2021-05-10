function prime(){
    //ambil nilai input dari user, dan ubah input menjadi number dengan function number
    let nilaiAwal = Number(document.getElementById("a").value);
    let nilaiAkhir = Number(document.getElementById("b").value);
    //ketika nilaiAwal kurang sama dengan nilaiAkhir
    while(nilaiAwal<=nilaiAkhir) {
        
        let flag=0;
        let display;
        for (let i = 2; i <= parseInt(nilaiAwal/2) ; i++) {
            if (nilaiAwal%i==0){
                flag=1;
                break;
            }
            
        }
        if (flag==0) 
            
            document.getElementById("output").innerHTML += nilaiAwal+" ";
            nilaiAwal=nilaiAwal+1;
            
    }

  return false;
}