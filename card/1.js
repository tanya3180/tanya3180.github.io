let elems=document.getElementsByClassName('a');
console.log(elems)
for(let i=0; i<elems.length; i++){

elems[i].addEventListener('click', func);
console.log(elems[i])


function func(){
    for(let i=0; i<elems.length; i++){
        elems[i].removeAttribute('style');
    
    }
    this.style.color = 'rgb(0, 195, 255)';
    this.style.borderColor= 'rgb(0, 195, 255)';
    
}
}

