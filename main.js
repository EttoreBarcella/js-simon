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
const numbers = simonNumbers;
alert(`I numeri che devi ripetere sono ${numbers}`)

