let start=document.getElementById("start");
start.addEventListener("click", startclickfunc);
let count=0;
let id;
let btnstart=false;

let timer=3000;

function startclickfunc(){
    if(btnstart===false){
        btnstart=true;
        start.innerText="STOP";
        startfunc();
    }else if(btnstart===true){
        btnstart= false;
        start.innerText="Start";
        document.getElementById("parent").innerHTML="";
        pausefunc();
    }
}

function startfunc(){

    let imgarr= JSON.parse(localStorage.getItem("imagelinks")) || [];
    let parent=document.getElementById("parent");

    parent.innerHTML="";

    if(count===imgarr.length){
        count=0;
    }

    if(timer===0){
        timer=3000;
    }

    let image=document.createElement("img");
    image.src=imgarr[count];
    parent.append(image);
    count++;
    clearInterval(id);
    
    id= setInterval(function(){
        if(count===imgarr.length){
            count=0;
        }
        if(timer==0){
            timer=3000;
        }

        image.src=imgarr[count];
        parent.innerHTML="";
        parent.append(image);
        count++;
    }, timer);
}

let pause=document.getElementById("pause");
pause.addEventListener("click", pauseclickfunc);
let btnpause= false;

function pauseclickfunc(){
    if(btnpause===false){
        btnpause=true;
        pause.innerText="RESUME";
        pausefunc();
    }else if(btnpause===true){
        btnpause= false;
        pause.innerText="Pause";
        startfunc();
    }
}

function pausefunc(){
    clearInterval(id);
}

let form= document.querySelector("form");
form.addEventListener("submit", addtimer);

function addtimer(event){
    event.preventDefault();
    let delay= form.delay.value;
    if(delay===""){
        alert("please enter the delay time you want to add");
        pauseclickfunc();
    }else{
        timer=delay*1000;
        btnstart=false;
        startclickfunc();
    }
}

let game= document.getElementById("game");
game.addEventListener("click", gamefunc);

function gamefunc(){
    timer=4;
    btnstart=false;
    startclickfunc();
}