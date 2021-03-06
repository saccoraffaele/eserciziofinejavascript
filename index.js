// Crea uno script che recuperi i dati dalla seguente API: https://api.covid19api.com/summary. 

// Da questa:
// 1. Ritorna i Total Confirmed
//2.Ritorna la lista di tutte le country con il nome del Country, il country code e i total confirmed di quel country 
// 3. Ritrona solo il piÃ¹ alto per i Total Confirmed e il più basso dei Total Confirmed 

async function covid19(){
   
    const response = await fetch('https://api.covid19api.com/summary')
    const responsejson = await response.json();
    console.log(responsejson);
    const totalConfirmed = responsejson.Global.TotalConfirmed;
    // console.log(totalConfirmed);
    const country = responsejson.Countries.forEach(element => {
        const nazione = responsejson.Countries[0].Country
        
        let selezionaCountry = document.createElement('li')
        const lista = document.querySelector('.lista')
        selezionaCountry.innerHTML = `
            ${element.Country} ${element.CountryCode} ${element.TotalConfirmed}
        `
        lista.appendChild(selezionaCountry);
    });
    // console.log(country);
}

covid19()

