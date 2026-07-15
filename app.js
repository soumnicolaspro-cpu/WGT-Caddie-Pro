document.getElementById("calculer").addEventListener("click", function () {

    const distance = Number(document.getElementById("distance").value);
    const vent = Number(document.getElementById("vent").value);
    const elevation = Number(document.getElementById("elevation").value);
    const temperature = Number(document.getElementById("temperature").value);

    let distanceCorrigee = distance;
    distanceCorrigee += vent;
    distanceCorrigee += elevation / 3;
    distanceCorrigee -= (temperature - 20) * 0.5;

    const resultat = trouverMeilleursClubs(distanceCorrigee, clubs);

console.log(resultat);
alert(resultat.meilleur.confiance);


    document.getElementById("club").textContent = resultat.meilleur.nom;
    document.getElementById("puissance").textContent = resultat.meilleur.puissance + "%";
document.getElementById("confiance").textContent =
    resultat.meilleur.confiance;

    if (resultat.alternative) {
        document.getElementById("alternative").textContent =
            resultat.alternative.nom + " (" + resultat.alternative.puissance + "%)";
    } else {
        document.getElementById("alternative").textContent = "Aucune";
    }

});