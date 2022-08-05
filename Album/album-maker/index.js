let form=document.querySelector("form");
form.addEventListener("submit", submitfunc);


function submitfunc(){
    let image=form.image.value;
    let imgarr= JSON.parse(localStorage.getItem("imagelinks")) || [];
    imgarr.push(image);
    localStorage.setItem("imagelinks", JSON.stringify(imgarr));
}