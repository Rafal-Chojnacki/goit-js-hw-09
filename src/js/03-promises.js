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
          resolve(result);
        } else {
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

    promise
      .then(result => {
        Notiflix.Notify.success(
          `Fulfilled promise ${result.position} in ${result.delay}ms`
        );
      })
      .catch(error => {
        Notiflix.Notify.failure(
          `Rejected promise ${error.position} in ${error.delay}ms`
        );
      });
  }
});
