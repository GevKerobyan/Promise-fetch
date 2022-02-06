const

// CONTAINER //
   container = document.querySelector(`.container`),

// OUTPUT BOX //
   output = document.querySelector(`.container__output-box`),

// INPUTS SECTION //
   button = document.querySelector('.input-box__button'),

// LEFT SIDE DATA //
   leftSide = document.querySelector('.output-box__left'),

   name = document.querySelector('.output-box__name'),
   capital = document.querySelector('.output-box__capital'),
   population = document.querySelector('.output-box__population'),
   size = document.querySelector('.output-box__size'),

// RIGHT SIDE DATA //
   coat = document.querySelector('.output-box__coat'),
   flag = document.querySelector('.output-box__flag');


input.addEventListener(`keyup`, (event) => { if (event.keyCode === 13) search() });
button.addEventListener('click', search);

function search() {
   
   output.style.opacity = `1`;
   container.style.height = `600px`;
   const input = document.querySelector('#input').value;
   coat.style.opacity = `1`;
   flag.style.opacity = `1`;
   leftSide.style.opacity = `1`;

   fetch(`https://restcountries.com/v3.1/name/${input}`)
      .then((answer) => answer.json())
      .then((data) => {

         name.innerHTML = `${data[0].name.official}`
         capital.innerHTML = `${data[0].capital}`
         population.innerHTML = `${data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`
         size.innerHTML = `${data[0].area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ㎢`

         coat.innerHTML = `<img src="${data[0].coatOfArms.svg}"></img>`
         flag.innerHTML = `<img src="${data[0].flags.svg}"></img>`
         
      })
      .catch((error) => {
         alert(`Server error or wrong country name`);
      })
}