const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = DARK_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
    let storedMode = sessionStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        btn.textContent = SUN;
        document.body.classList.add(DARK_MODE);

    } else if (mode === LIGHT_MODE) {
        btn.textContent = MOON;
        document.body.classList.remove(DARK_MODE);
    }
}

btn.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if (mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    }
});

//emailjs



window.onload = function () {
    emailjs.init('b8tKZe3g5cq3fAMzH');
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        this.contact_number.value = Math.random() * 100000 | 0;

        emailjs.sendForm('service_wbj0whp', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
                sessionStorage.removeItem("mail", "error")
            }, function (error) {
                sessionStorage.removeItem("mail", "error")
                console.log('FAILED...', error);

                sessionStorage.setItem("mail", "error")
            },
            );

    });
}





//dato valor del prestamo
let PrestamoEnForm = localStorage.getItem("Prestamo");
document.getElementById("myText").defaultValue = `El credito que usted ha pedido tiene un costo final de $ ${PrestamoEnForm}`;


//form aviso error
const enviar = document.getElementById("enviar_boton");
enviar.addEventListener("click", () => setTimeout(avisoError,2000));

function avisoError(){ 
    
    let errorMail = sessionStorage.getItem("mail");
    console.log(errorMail)
     if (errorMail == "error") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    } 
    
};