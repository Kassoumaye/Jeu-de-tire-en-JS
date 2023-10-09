// Sélectionner les éléments HTML

let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

btn.onclick = function() {
    let score = 0;
    let time = 0;
    container.innerHTML = "";
    let interval = setInterval(function showTarget() {
        // Création de la cible
        let target = document.createElement("img");
        target.id="target";
        target.src="imgbin-american-bullfrog-toad-true-frog-tree-frog-frog-Z9AuqT2ci1vW6RSGmrAkNaW98_t.jpg";
        container.appendChild(target);
        target.style.top = Math.random() * (500- target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600- target.offsetWidth) + 'px';

        // Faire disparaitre la cible
        setTimeout(function() {
            target.remove();
        },2000)

        // Quand on click sur le target
        target.onclick = function() {
            score += 1;
            target.style.display = "none";
        }
        time -= 1;

        // Afficher les infos
        scoreContainer.innerHTML = `Score: ${score}`;
        timeContainer.innerHTML = `Temps: ${time}`;

        // Fin de jeu quand le temps est écoulé
        if(time == 0) {
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé";
        }

    }, 1000);
}