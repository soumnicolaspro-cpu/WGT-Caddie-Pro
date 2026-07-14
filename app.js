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
    let club = "";
    let puissance = 100;

    if (distanceCorrigee >= 180) {
        club = "Driver";
        puissance = Math.round((distanceCorrigee / 180) * 100);
    } else if (distanceCorrigee >= 170) {
        club = "Bois 3";
        puissance = Math.round((distanceCorrigee / 170) * 100);
    } else if (distanceCorrigee >= 160) {
        club = "Fer 4";
        puissance = Math.round((distanceCorrigee / 160) * 100);
    } else if (distanceCorrigee >= 150) {
        club = "Fer 5";
        puissance = Math.round((distanceCorrigee / 150) * 100);
    } else if (distanceCorrigee >= 140) {
        club = "Fer 6";
        puissance = Math.round((distanceCorrigee / 140) * 100);
    } else if (distanceCorrigee >= 130) {
        club = "Fer 7";
        puissance = Math.round((distanceCorrigee / 130) * 100);
    } else if (distanceCorrigee >= 120) {
        club = "Fer 8";
        puissance = Math.round((distanceCorrigee / 120) * 100);
    } else if (distanceCorrigee >= 110) {
        club = "Fer 9";
        puissance = Math.round((distanceCorrigee / 110) * 100);
    } else if (distanceCorrigee >= 90) {
        club = "Pitch";
        puissance = Math.round((distanceCorrigee / 90) * 100);
    } else {
        club = "Sand Wedge";
        puissance = Math.round((distanceCorrigee / 70) * 100);
    }

    document.getElementById("club").textContent = club;
    document.getElementById("puissance").textContent = puissance + " %";
});
