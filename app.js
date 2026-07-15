alert("APP.JS VERSION NOUVELLE");

document.getElementById("calculer").addEventListener("click", function () {
    alert("Je fonctionne !");
});

    const distance = Number(document.getElementById("distance").value);
    const vent = Number(document.getElementById("vent").value);
    const elevation = Number(document.getElementById("elevation").value);
    const temperature = Number(document.getElementById("temperature").value);

    let distanceCorrigee = distance;
    distanceCorrigee += vent;
    distanceCorrigee += elevation / 3;
    distanceCorrigee -= (temperature - 20) * 0.5;

    console.log("2 - Distance :", distanceCorrigee);
    console.log("3 - Clubs :", clubs);

    const resultat = trouverMeilleursClubs(distanceCorrigee, clubs);
console.log(distanceCorrigee);
console.log(clubs);
console.log(resultat);
    console.log("4 - Résultat :", resultat);

    document.getElementById("club").textContent = resultat.meilleur.nom;
    document.getElementById("puissance").textContent = resultat.meilleur.puissance + "%";

    if (resultat.alternative) {
        document.getElementById("alternative").textContent =
            resultat.alternative.nom + " (" + resultat.alternative.puissance + "%)";
    } else {
        document.getElementById("alternative").textContent = "Aucune";
    }
});