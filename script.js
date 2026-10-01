const haeNappi = document.getElementById("haeNappi");
const tulos = document.getElementById("tulos");
const tulosTeksti = document.getElementById("tulosTeksti");

const nappi = document.getElementById("nappi");
const toinenTulos = document.getElementById("toinenTulos");
const toinenTulosTeksti = document.getElementById("toinenTulosTeksti");

haeNappi.addEventListener("click", () => {
    tulosTeksti.innerText = "Haetaan koirakuvia rajapinnasta...";

    fetch("https://dog.ceo/api/breeds/image/random/5", { cache: "no-cache" })
        .then(response => response.json())
        .then(data => {
            console.log("Rajapinnan vastaus:", data);
            tulosTeksti.innerText = data.message;
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            tulosTeksti.innerText = "Tiedon hakeminen epäonnistui!";
        });
});


nappi.addEventListener("click", () => {
    toinenTulosTeksti.innerText = "Haetaan tekemistä rajapinnasta...";

    fetch("https://api.open-meteo.com/v1/forecast?latitude=60.2055&longitude=24.6559&current=temperature_2m&timezone=auto", { cache: "no-cache" })
        .then(response => response.json())
        .then(data => {
            console.log("Rajapinnan vastaus:", data);
            toinenTulosTeksti.innerText =  
            "Lämpötila: " + data.current.temperature_2m + " °C";
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            toinenTulosTeksti.innerText = "Tiedon hakeminen epäonnistui!";
        });
});