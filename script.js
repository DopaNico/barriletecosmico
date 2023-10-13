let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

// const botonLeerMas = document.getElementById('boton-leer-mas');
// const leerMasDiv = document.querySelector('.leer-mas');

// botonLeerMas.addEventListener('click', () => {
//     if (leerMasDiv.style.display === 'none' || leerMasDiv.style.display === '') {
//         leerMasDiv.style.display = 'block';
//         botonLeerMas.textContent = 'Leer menos';
//     } else {
//         leerMasDiv.style.display = 'none';
//         botonLeerMas.textContent = 'Leer más';
//     }
// });

const botonesLeerMas = document.querySelectorAll('.boton-leer-mas');
const leerMasDivs = document.querySelectorAll('.leer-mas');

botonesLeerMas.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        if (leerMasDivs[index].style.display === 'none' || leerMasDivs[index].style.display === '') {
            leerMasDivs[index].style.display = 'block';
            boton.textContent = 'Leer menos';
        } else {
            leerMasDivs[index].style.display = 'none';
            boton.textContent = 'Leer más';
        }
    });
});
