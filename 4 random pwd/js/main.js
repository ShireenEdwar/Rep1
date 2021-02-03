document.getElementById("btn").addEventListener("click", createPassword);


function createPassword() {

    let ltrCptl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ltrSml = "abcdefghijklmnopqrstuvwxyz";
    let smbl = "@#$%^&*";
    let pwd = "";
    n = 0;


    //add 3 capital letters 
    do {
        let indx = Math.floor(Math.random() * 25) + 1;

        if (indx < ltrCptl.length) {
            pwd += ltrCptl.charAt(indx);
            n++;
        }
    } while (n < 3)
    n = 0;


    //add 3 small letters 
    do {
        let indx = Math.floor(Math.random() * 25) + 1;

        if (indx < ltrSml.length) {
            pwd += ltrSml.charAt(indx);
            n++;
        }
    } while (n < 3)
    n = 0;



    //add a symbol 
    do {
        let indx = Math.floor(Math.random() * 6) + 1;

        if (indx < smbl.length) {
            pwd += smbl.charAt(indx);
            n++;
        }
    } while (n < 1)


    const daydtDiv = document.getElementById("daydt");
    daydtDiv.innerHTML = `the password ${pwd}`;
}