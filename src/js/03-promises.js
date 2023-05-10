import Notiflix from 'notiflix';
// Pobranie elementów formularza
const form = document.querySelector('form');
const amountInput = document.querySelector('input[name="amount"]');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');

// Obsługa zdarzenia wysłania formularza
form.addEventListener('submit', event => {
  event.preventDefault();

  // Pobranie wartości z pól formularza
  const amount = parseInt(amountInput.value);
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);

  // Funkcja tworząca obietnicę
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = { position, delay };

      if (shouldResolve) {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        resolve(result);
      } else {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        reject(result);
      }
    }, delay);
  });
}

  // Utworzenie i wykonanie obietnic
  for (let i = 1; i <= amount; i++) {
    const position = i;
    const promiseDelay = delay + (i - 1) * step;
    const promise = createPromise(position, promiseDelay);

    promise.then(result => {
      console.log(`Promise ${result.position} fulfilled after ${result.delay}ms`);
    }).catch(error => {
      console.log(`Promise ${error.position} rejected after ${error.delay}ms`);
    });
  }
});

