const btn1 = document.getElementById('btn_1');
    btn2 = document.getElementById('btn_2');
    ebalo = document.getElementById('img_container')
    povtorim = document.getElementById('pop');
    reload = document.getElementById('btn_3');

    function popUp() {
        povtorim.classList.remove('pop_up_disabled')
    }

    btn1.addEventListener('click', () => {
        ebalo.classList.toggle('img_container')
        setTimeout(popUp, 1000)
    })

    btn2.addEventListener('click', ()=> {
        alert("нит");
        ebalo.classList.toggle('img_container');
        setTimeout(popUp, 1000);
    })

    reload.addEventListener('click', ()=>{
        location.reload()
    })