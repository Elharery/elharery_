let drop = document.querySelector('nav .links .toggle');
let ul = document.querySelector('nav .links ul.drop');
drop.addEventListener('click', ()=>{
    if(ul.style.display != 'block'){
        ul.style.display ='block';
    }
    else{
        ul.style.display ='none';
    }
});
let click = document.querySelector('nav .links .drop li');
let list = document.querySelector('nav .links .drop .list');
click.addEventListener('click', ()=>{
    if(list.style.display != 'block'){
        list.style.display ='block';
    }
    else{
        list.style.display ='none';
    }
});