document.getElementById("calculer").addEventListener("click", function () {

    const distance = parseFloat(document.getElementById("distance").value);
    const vent = parseFloat(document.getElementById("vent").value);
    const elevation = parseFloat(document.getElementById("elevation").value);
    const temperature = parseFloat(document.getElementById("temperature").value);

    let distanceCorrigee = distance;

    distanceCorrigee += vent;
    distanceCorrigee += elevation / 3;
    distanceCorrigee -= (temperature - 20) * 0.5;

    let club = "";
    let puissance = 100;

    if (distanceCorrigee >= 180) club = "Driver";
    else if (distanceCorrigee >= 170) club = "Bois 3";
    else if (distanceCorrigee >= 160) club = "Fer 4";
    else if (distanceCorrigee >= 150) club = "Fer 5";
    else if (distanceCorrigee >= 140) club = "Fer 6";
    else if (distanceCorrigee >= 130) club = "Fer 7";
    else if (distanceCorrigee >= 120) club = "Fer 8";
    else if (distanceCorrigee >= 110) club = "Fer 9";
    else if (distanceCorrigee >= 90) club = "Pitch";
    else club = "Sand Wedge";

    document.getElementById("club").textContent = club;
    document.getElementById("puissance").textContent = puissance + " %";
});
