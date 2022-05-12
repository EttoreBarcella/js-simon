// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo array per contenere i numeri generati random
const simonNumbers = [];
// Ripeto ciclo di numeri random 5 volte
while (simonNumbers.length < 5) {
  const randomGen = Math.floor(Math.random() * 100) + 1;
  if (!simonNumbers.includes(randomGen)) {
    simonNumbers.push(randomGen);
  }
}
// A schermo do all'utente i numeri che deve ricordarsi
const numbers = simonNumbers
alert(`I numeri che devi ripetere sono ${numbers}`)
// creo funzione timer di 30 sec (30000ms)
const timer = setTimeout(function()  {
    // creo un contenitore di numeri dell'utente
  const userGuess = []
    // creo un contenitore con i numeri esatti
  const rightNumbers = []
    // chiedo all'utente di inserire un numero 5 volte
  while (userGuess.length < 5) {
    const num = Number(prompt("Simon says inserisci i numeri che ho scritto"));
    if (!userGuess.includes(num)) {
      userGuess.push(num)

      if (simonNumbers.includes(num)) {
        rightNumbers.push(num)
      }
    }
  }
// Do all'utente l'esito del gioco
  const numbers = rightNumbers
  alert(`Complimenti hai indovinato : ${rightNumbers.length} su: ${numbers}`)
}, 3000);