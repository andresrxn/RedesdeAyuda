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
const navLinks = document.querySelectorAll(".header-menu .header-menu-content");

function menu() {


    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;

            let nav = document.getElementById('nav');
            nav.classList.add("nav-active");

            //



        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            nav.classList.remove("nav-active");

        }
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `ShowUp2 0.3s ease-out forwards ${index / 13 }s`;
            }
        });

    });


}
menu();








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


        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
        campos[campo] = true;
    } else {


        document.querySelector(`.input-${campo} .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (input.value == "") {

        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
    }
}
const validarText = (expresion, msg, campo) => {
    if (expresion.test(msg.value)) {



        document.querySelector(`.input-msg .input-error`).style.display = "none"
        campos[campo] = true;
    } else {


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