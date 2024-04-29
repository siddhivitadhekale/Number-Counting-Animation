let valueDisplay = document.querySelectorAll(".num");
let Interval = 5000;

valueDisplay.forEach((value)=>{
    let start_value = 0;
    let end_value = parseInt(value.getAttribute("data-val"));
    let duration = Math.floor(Interval/end_value);

    let counter = setInterval(function(){
        start_value+=1;
        value.textContent= start_value;

        if (start_value ===end_value){
            clearInterval(counter);
        }
    },duration);
});