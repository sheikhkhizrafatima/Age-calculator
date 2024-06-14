let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click" ,() => {
    let birth = new Date (document.getElementById("birth").value)
    let datenow = new Date();

    if (birth.getTime()) {

        let difference = datenow.getTime() - birth.getTime();
        let newAge = new Date(difference);
        let x = Math.abs(newAge.getFullYear()-1970)

        let inDays = (Math.floor(difference/(1000 * 3600 *24)));
        result.style.display = "block"
        result.innerHTML = `You are <span> ${x} </span> Years and <span> ${inDays} </span> Days old`
    }

})
