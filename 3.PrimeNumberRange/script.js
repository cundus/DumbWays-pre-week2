function prime(){
    //ambil nilai input dari user, dan ubah input menjadi number dengan function number
    let nilaiAwal = Number(document.getElementById("a").value);
    let nilaiAkhir = Number(document.getElementById("b").value);
    //ketika nilaiAwal kurang sama dengan nilaiAkhir
    let data = ''
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
            
            data += nilaiAwal+" ";
            nilaiAwal=nilaiAwal+1;
            
    }
    
    document.getElementById("output").innerHTML = `Bilangan prima antara ${nilaiAwal} dan ${nilaiAkhir} adalah ${data}`;

  return false;
}