function Creative() {
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu')
    let menuLinks = document.querySelectorAll('.menu-link')
    let burgerFlag = false;
    let timePers = document.querySelectorAll('.bill-p>span')
    let prices = document.querySelectorAll('.price')

    burger.addEventListener('click', ()=>{
        menu.classList.toggle('menu-active')
        burgerFlag = true
    })
    menu.addEventListener('transitionend', ()=>{
        if (burgerFlag) {
            menuLinks.forEach(link => {
                link.classList.toggle('link-active')
            });
        }
    })

    timePers.forEach((elem, i) => {
        timePers[i].addEventListener('click', ()=>{
            timePers[i].classList.add('chosen-period')
            timePers[1-i].classList.remove('chosen-period')
            if (i===1) {
                prices[1].innerHTML = '$240 <span>/ YEAR</span>'
            }
            else {
                prices[1].innerHTML = '$24 <span>/ MONTH</span>'
            }
        })
    });


}

Creative()