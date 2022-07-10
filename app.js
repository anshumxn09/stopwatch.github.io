const restart = document.getElementById('restart');
const start = document.getElementById('start');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const container = document.getElementById('container');
const hour = document.getElementById('hour');

let watch = false;
var intervalClear;
start.addEventListener('click' , () => {
    if(!watch){
        watch = true;
        start.innerText = "STOP";
        intervalClear = setInterval(() => {
            let add = parseInt(second.innerText);
            let min = parseInt(minute.innerText);
            let hours = parseInt(hour.innerText);
            if(add % 2 == 0){
                container.style.background = "linear-gradient( midnightblue, cornflowerblue)";
            }
            else{
                container.style.background = "linear-gradient( cornflowerblue, midnightblue)";
            }
            if(add < 9){
                second.innerText = `0${add + 1}`;
            }
            else if(add == 59){
                if(min < 9){
                    minute.innerText = `0${min+1}`
                }
                else if(min == 59){
                    minute.innerText = '00';
                    if(hours < 9){
                        hour.innerText = `0${hours+1}`
                    }
                    else if(hours == 23){
                        hour.innerText = "00";
                    }
                    else{
                        hour.innerText = `{hours+1}`
                    }
                }
                else{
                    minute.innerText = `${min + 1}`;
                }
                second.innerText = `00`;
            }
            else{
                console.log('hello');
                second.innerText = `${add + 1}`;
            }
        }, 1000);
    }
    else{
        watch = false;
        start.innerText = "START";
        clearInterval(intervalClear);
    }
})
restart.addEventListener('click', () => {
    location.reload();
})