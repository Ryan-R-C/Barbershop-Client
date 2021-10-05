( () =>
    {const introContent = document.querySelectorAll(".intro-disabled")
    console.log(introContent)
    window.addEventListener('scroll', ()=>{
        
        introContent.forEach(introContent => {
                let introPositon = introContent.getBoundingClientRect().top
                let screenPosition = window.innerHeight/1.2

                if(introPositon < screenPosition){
                    introContent.classList.add('intro-active')
                }
            });
        })
}) ()