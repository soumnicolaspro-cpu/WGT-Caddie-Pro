function trouverMeilleursClubs(distanceCorrigee, clubs) {

    let resultats = [];

    for (const club of clubs) {

        const puissance = Math.round((distanceCorrigee / club.distance) * 100);

        resultats.push({
            nom: club.nom,
            puissance: puissance,
            ecart: Math.abs(100 - puissance)
        });
    }

    resultats.sort((a, b) => a.ecart - b.ecart);

    return {
        meilleur: resultats[0],
        alternative: resultats[1],
        troisieme: resultats[2]
    };
}
window.trouverMeilleursClubs = trouverMeilleursClubs;