    
    //Função para mostrar a sidebar ao clicar no botão "menuSettings"//
    function menuClick(){
        document.querySelector('.navMenu').style.display = "flex"
    }
    //////********************************************************//////

    //Função para ocultar o navbar ao clicar no botão e função para trocar os botões//
    let menuHidden = document.querySelector('.menuSettings')


        menuHidden.addEventListener("click", hiddenMenuButton)

        function hiddenMenuButton(){
            menuHidden.style.display = "none"

            let menuExit = document.querySelector('.menuExit').style.display = "flex"
            
            if(menuHidden.style.display = "none"){
                menuExit
            }
        }

        function menuExit(){
            
            navMenu.style.display = "none"   
                if (navMenu.style.display = "none"){
                    menuHidden.style.display = "flex";

                if (menuHidden.style.display = "flex"){
                    document.querySelector('.menuExit').style.display = "none";
                }
            }

        }

        function buttonView(){
            document.querySelector('.menuExit').style.display = "flex"
        }

    //Função para manter a sidebar visível quando estiver com o mouse em cima//
    
    let navMenu = document.querySelector('.navMenu')

    navMenu.addEventListener("mouseover", overNavMenu)

    function overNavMenu(){
        navMenu.style.display = "flex"
    }
        //////********************************************************//////
        

    //Função para ocultar a sidebar quando estiver com o mouse fora//
    navMenu.addEventListener("mouseout", hiddenNavMenu)

    function hiddenNavMenu(){

        navMenu.style.display = "none"
            if(navMenu.style.display = "none"){
                document.querySelector('.menuSettings').style.display = "flex"

            if(document.querySelector('.menuSettings').style.display = "flex"){
                document.querySelector('.menuExit').style.display = "none"
                }
            }
    }
        //////********************************************************//////
    

//*ScrollRevealSectionAbout*//
ScrollReveal().reveal('.sectionAboutMe', {delay: 550});
ScrollReveal().reveal('.myFace', {delay: 650});
ScrollReveal().reveal('.textInfo', {delay: 750});


//*ScrollRevealPortifólio*//
ScrollReveal().reveal('.sectionH1', {delay: 600});
ScrollReveal().reveal('.workIcons', {delay: 700});
ScrollReveal().reveal('.acaiDoRaul', {delay: 1000});
ScrollReveal().reveal('.p1', {delay: 1100});
ScrollReveal().reveal('.goldenDuelist', {delay: 1200});
ScrollReveal().reveal('.p2', {delay: 1300});
ScrollReveal().reveal('.parallaxSite', {delay: 1400});
ScrollReveal().reveal('.p3', {delay: 1500});
ScrollReveal().reveal('.richardBarberShop', {delay: 1500});
ScrollReveal().reveal('.p4', {delay: 1600});
ScrollReveal().reveal('#webLink', {delay: 1700});
ScrollReveal().reveal('#codLink', {delay: 1800});

//*Animate Scroll Library*//
AOS.init();

// Sistema de Scroll na page usando Jquery//
$('.navMenu a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({ 
        scrollTop: targetOffset - 15
    }, 500);
});








