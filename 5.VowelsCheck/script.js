function vowelCheck() {
   //ambil data input dari user ke dalam variable
    let input = document.getElementById('box').value;
    let result = '';
    input = input.toLowerCase();

        if(isNaN(input)){
            if (input =='a'|| input == 'i' || input =='u'|| input =='e'|| input =='o')   {
                result = " adalah huruf vokal!";
            } else {
                result = " adalah bukan huruf vokal!";
            }
        } else {
            alert('Hanya Inputkan Huruf!')
            return false;
        }

        

        document.getElementById("output").innerHTML = input + result;
    return result;
}

