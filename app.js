document.getElementById("calculer").addEventListener("click", function () {

    const distance = Number(document.getElementById("distance").value);
    const vent = Number(document.getElementById("vent").value);
    const elevation = Number(document.getElementById("elevation").value);
    const temperature = Number(document.getElementById("temperature").value);

    let distanceCorrigee = distance;

    // Corrections
    distanceCorrigee += vent;
    distanceCorrigee += elevation / 3;
    distanceCorrigee -= (temperature - 20) * 0.5;

    const clubs = [
        { nom: "Driver", distance: 240 },
        { nom: "Bois 3", distance: 220 },
        { nom: "Hybride", distance: 200 },
        { nom: "Fer 4", distance: 185 },
        { nom: "Fer 5", distance: 175 },
        { nom: "Fer 6", distance: 165 },
        { nom: "Fer 7", distance: 155 },
        { nom: "Fer 8", distance: 145 },
        { nom: "Fer 9", distance: 135 },
        { nom: "Pitch", distance: 120 },
        { nom: "Gap Wedge", distance: 105 },
        { nom: "Sand Wedge", distance: 90 },
        { nom: "Lob Wedge", distance: 70 }
    ];

    let club = clubs[0];
    let puissance = 100;
    let alternative = "";

    for (let i = 0; i < clubs.length; i++) {

        const c = clubs[i];
        const p = Math.round((distanceCorrigee / c.distance) * 100);

        if (p <= 100) {
            club = c;
            puissance = p;

            if (i > 0) {
                const alt = clubs[i - 1];
                const pAlt = Math.round((distanceCorrigee / alt.distance) * 100);
                alternative = alt.nom + " (" + pAlt + "%)";
            }

            break;
        }
    }

    document.getElementById("club").textContent = club.nom;
    document.getElementById("puissance").textContent = puissance + " %";
    document.getElementById("alternative").textContent = alternative;

});