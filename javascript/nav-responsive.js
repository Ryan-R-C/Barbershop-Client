( () => 
    {const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".responsive-navbar__nav-list")
    const liLinks = document.querySelectorAll("responsive-navbar__nav-list__list-el")
    
        burger.addEventListener('click', () => {
            //Toggle Nav
            nav.classList.toggle('nav-list--active')
            //Animate Links    
            liLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = ``
                }
                else{
                    link.style.animation = `nav-link--fade  0.5s ease fowards ${index/ 7 + 1.5}s`
                }
                })
    })
    }
    navSlide();}) ()