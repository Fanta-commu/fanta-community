 const navigation = document.querySelector('nav');

 window.addEventListener('scroll', () => {

     if(window.scrollY > 30){
        navigation.classList.add('anim-nav');
     } else {
        navigation.classList.remove('anim-nav');
    }
})



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})