function trouverMeilleursClubs(distanceCorrigee, clubs) {

    let resultats = [];

for (const club of clubs) {

    const puissance = Math.round((distanceCorrigee / club.distance) * 100);

    if (puissance >= 80 && puissance <= 105) {
let confiance = "";

if (puissance >= 95 && puissance <= 105) {
    confiance = "⭐⭐⭐⭐⭐ Excellent";
} else if (puissance >= 90 && puissance < 95) {
    confiance = "⭐⭐⭐⭐ Très bon";
} else {
    confiance = "⭐⭐⭐ Correct";
}

    resultats.push({
        nom: club.nom,
        puissance: puissance,
        ecart: Math.abs(100 - puissance),
        confiance: confiance
    });
}

}   

resultats.sort((a, b) => a.ecart - b.ecart);

return {
    meilleur: resultats[0],
    alternative: resultats[1],
    troisieme: resultats[2]
};
}
window.trouverMeilleursClubs = trouverMeilleursClubs;