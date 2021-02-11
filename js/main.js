// Initial loader


document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;



        if (scrollTop <= 410) {
            let headerDonate = document.getElementById('header-donate');
            headerDonate.classList.remove("header-donate-active");
        } else {
            let headerDonate = document.getElementById('header-donate');
            headerDonate.classList.add("header-donate-active");
        }
    });

});



// const body = document.body;
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= 100) {
//         body.classList.remove(scrollUp);
//         return;
//     }

//     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//         // down
//         body.classList.remove(scrollUp);
//         body.classList.add(scrollDown);
//     } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
//         // up
//         body.classList.remove(scrollDown);
//         body.classList.add(scrollUp);
//     }
//     lastScroll = currentScroll;
// });


// let comment = document.getElementById('comment');
// comment.addEventListener('click', () => {


//     let times = document.getElementById('times');
//     times.style.display = "block";
//     comment.style.display = "none";
//     let bubbles = document.getElementById('float-bubbles');
//     bubbles.classList.add("bubble-active");



// });

// let times = document.getElementById('times');
// times.addEventListener('click', () => {
//     let comment = document.getElementById('comment');
//     comment.style.display = "block";
//     times.style.display = "none";
//     let bubbles = document.getElementById('float-bubbles');
//     bubbles.classList.remove("bubble-active");

// });


// let bubbles = document.getElementById('mail');
// bubbles.addEventListener('click', () => {

//     let bubbles = document.getElementById('float-bubbles');
//     bubbles.classList.remove("bubble-active");
//     let times = document.getElementById('times');
//     times.style.display = "none";
//     let comment = document.getElementById('comment');
//     comment.style.display = "block";
// });

const cBubble = document.getElementById('contact-bubble');

cBubble.addEventListener('click', () => {


    document.getElementById('bubble-social').classList.toggle('bubble-active');
    document.querySelector('#contact-bubble .iconTimes').classList.toggle('times-active');

    let mail = document.getElementById('ml');
    mail.addEventListener('click', () => {
        document.getElementById('bubble-social').classList.toggle('bubble-active');
        document.querySelector('#contact-bubble .iconTimes').classList.toggle('times-active');
    });
});

//burger menu button animation
const menuBtn = document.querySelector('.header-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

        let nav = document.getElementById('nav');
        nav.classList.add("nav-active");

        //
        let comment = document.getElementById('comment');
        comment.style.display = "block";
        let times = document.getElementById('times');
        times.style.display = "none";
        let bubbles = document.getElementById('float-bubbles');
        bubbles.classList.remove("bubble-active");


    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove("nav-active");
        const currentHeaderMenuDown = document.querySelector(".header-menu-icon.icon-down-active")

        currentHeaderMenuDown.classList.toggle("icon-down-active");
        currentHeaderMenuDown.nextElementSibling.style.maxHeight = 0;
    }

});


function menuOptions() {
    const headerMenuIcons = document.querySelectorAll(".header-menu-icon");
    headerMenuIcons.forEach(headerMenuIcon => {
        headerMenuIcon.addEventListener('click', (e) => {
            const currentHeaderMenuDown = document.querySelector(".header-menu-icon.icon-down-active")
            if (currentHeaderMenuDown && currentHeaderMenuDown !== headerMenuIcon) {
                currentHeaderMenuDown.classList.toggle("icon-down-active");
                currentHeaderMenuDown.nextElementSibling.style.maxHeight = 0;
            }

            headerMenuIcon.classList.toggle("icon-down-active");
            const headerMenuDown = headerMenuIcon.nextElementSibling;

            if (headerMenuIcon.classList.contains("icon-down-active")) {
                headerMenuDown.style.maxHeight = headerMenuDown.scrollHeight + "px";
            } else {
                headerMenuDown.style.maxHeight = 0;
            }
        });
    });

    const headerMenuDownLis = document.querySelectorAll(".header-menu-down-li");
    headerMenuDownLis.forEach(headerMenuDownLi => {
        headerMenuDownLi.addEventListener('click', () => {
            const currentHeaderMenuDown = document.querySelector(".header-menu-icon.icon-down-active")

            currentHeaderMenuDown.classList.toggle("icon-down-active");
            currentHeaderMenuDown.nextElementSibling.style.maxHeight = 0;

            menuBtn.classList.remove('open');
            menuOpen = false;
            nav.classList.remove("nav-active");
        });
    });
}
menuOptions();



function accordionOptions() {

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {



            const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle("active");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }

        });
    });
}
accordionOptions();

const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const msg = document.querySelector('#form textarea');

const expresiones = {

    name: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,15}$/,
    msg: /^[\s\S]{10,400}$/,
}

const campos = {
    name: false,
    email: false,
    phone: false,
    msg: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "phone":
            validarCampo(expresiones.phone, e.target, 'phone');
            if (phone.value == "") {

                document.querySelector(`.input-phone .input-error`).style.display = "none"
            }
            break;
        case "msg":
            validarText(expresiones.msg, e.target, 'msg');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {


        // document.querySelector(`#input-${campo} i`).classList.add('fa-check-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
        campos[campo] = true;
    } else {

        // document.querySelector(`#input-${campo} i`).classList.add('fa-times-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`.input-${campo} .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (input.value == "") {

        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
    }
}
const validarText = (expresion, msg, campo) => {
    if (expresion.test(msg.value)) {


        // document.querySelector(`#input-${campo} i`).classList.add('fa-check-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`.input-msg .input-error`).style.display = "none"
        campos[campo] = true;
    } else {

        // document.querySelector(`#input-${campo} i`).classList.add('fa-times-circle');
        // document.querySelector(`#input-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`.input-msg .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (msg.value == "") {

        document.querySelector(`.input-msg .input-error`).style.display = "none"
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
msg.addEventListener('keyup', validarFormulario);
msg.addEventListener('blur', validarFormulario);

form.addEventListener('keyup', () => {
    if (campos.name && campos.email && campos.phone && campos.msg || campos.name && campos.email && campos.phone == "" && campos.msg) {
        document.querySelector(`.input-submit .input-error`).style.display = "none";
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (campos.name && campos.email && campos.phone && campos.msg || campos.name && campos.email && campos.phone == "" && campos.msg) {
        document.querySelector(`.input-submit .input-error`).style.display = "none"

        form.reset();
        form.submit();


        return;
    } else {
        document.querySelector(`.input-submit .input-error`).style.display = "block"
        return;
    }

});