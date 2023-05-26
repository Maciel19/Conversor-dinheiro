const convertVButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputValues = document.querySelector(".input-currency").value

    console.log()

    const currencyValuesToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyConverted = document.querySelector(".currency-value")


    const dolarToday = 4.96
    const euroToday = 5.33



    if (currencySelect.value == "dolar") {
        // VALOR DO SELECT DOLAR ENTRE AQUI
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValues / dolarToday)
    }
    if (currencySelect.value == "euro") {
        // VALOR DO  SELECT EURO ENTRE AQUI


        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValues / euroToday)

    }


    currencyValuesToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

}

function changeCurrency(){
   const currencyName = document.getElementById ('currency-name')
    const currencyImage = document.querySelector(".currency-img")

if(currencySelect.value == "dolar"){
    currencyName.innerHTML ="Dólar Americano"
    currencyImage.src = './aseets/EUA.png'
}

if(currencySelect.value == "euro"){
    currencyName.innerHTML ="Euro"
    currencyImage.src = './aseets/Euro.png'
}


}
currencySelect.addEventListener("change",changeCurrency )
convertVButton.addEventListener("click", convertValues)