const form = document.querySelector(`.form`)
console.log(form)

form.addEventListener(`submit`, onSubmitForm)

function onSubmitForm(event){
  event.preventDefault();

  let delay = Number(form.delay.value)
  console.log(delay)

  for(let i = 1; i <= form.amount.value; i += 1){
  
    createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  delay += Number(form.step.value);

  }


}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const obj = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj); // Fulfill 
      } else {
        reject(obj);   // Reject
      }
    }, delay);
  });
}



  




// const formRef = document.querySelector('.form');

// // Set event listener submit on form
// formRef.addEventListener('submit', onSubmitForm);

// // Submit form
// function onSubmitForm(e) {
//   e.preventDefault();

//   let delay = Number(formRef.delay.value);

//   for (let i = 1; i <= formRef.amount.value; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += Number(formRef.step.value);
//   }
// }

// // Create promise
// function createPromise(position, delay) {
//   const obj = { position, delay };
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         resolve(obj);
//       } else {
//         // Reject
//         reject(obj);
//       }
//     }, delay);
//   });
// }
