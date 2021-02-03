let daydt = new Date();

console.log(daydt);

const daydtDiv = document.getElementById("daydt");
daydtDiv.innerHTML =
    `Date  ${daydt.toDateString()} . <br>
 Time  ${daydt.getHours()} : ${daydt.getMinutes()}.`;