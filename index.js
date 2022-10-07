const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const primarySelect = document.getElementById("select-primary-currency")

//cotação real outras moedas

const dolar = 5.2
const euro = 5.30
const bitcoin = 104898.00

//cotação dolar outras moedas
const dolarEuro = 1.02
const dolarBtc = 0.000050

//cotação euro outras moedas
const euroDolar = 0.98
const euroBtc = 0.000049

// cotação bitcoin outras moeda
 const BtcDolar = 19939
 const BtcEuro = 20354

const convertValues = () => {
    
    const inputReais = document.getElementById("input-real").value
    
    const realValuetext = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")
    const primaryCurrency = document.getElementById("select-primary-currency")

    // formatação do real R$
    if (primaryCurrency.value === "R$ Real brasileiro"){
        realValuetext.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format( inputReais)
    }else if (primaryCurrency.value === "US$ Dólar americano"){
        realValuetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format( inputReais)
    }else if (primaryCurrency.value ===  "€ Euro"){
        realValuetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format( inputReais)
    }else if (primaryCurrency.value ===  "₿ Bitcoin"){
        realValuetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format( inputReais)
    }


    //conversão real para outras moedas

    if (primaryCurrency.value === "R$ Real brasileiro" && select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    } else if (primaryCurrency.value === "R$ Real brasileiro" && select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    } else if (primaryCurrency.value === "R$ Real brasileiro" && select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    } else if (primaryCurrency.value === "R$ Real brasileiro" && select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputReais)
    }
    //conversão de Dólar para outras moedas

    if (primaryCurrency.value ===  "US$ Dólar americano" && select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputReais * dolar)
    } else if (primaryCurrency.value ===  "US$ Dólar americano" && select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais * dolarEuro )
    } else if (primaryCurrency.value === "US$ Dólar americano" && select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais * dolarBtc)
    }  else if (primaryCurrency.value === "US$ Dólar americano" && select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais)
    }
    //conversão de Euro para outras moedas

    if (primaryCurrency.value ===  "€ Euro" && select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputReais * euro)
    }  else if (primaryCurrency.value === "€ Euro" && select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais * euroDolar)
    }   else if (primaryCurrency.value === "€ Euro" && select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais * euroBtc)
    } else if (primaryCurrency.value ===  "€ Euro" && select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais)
    }

    //conversão btc para outras moedas
 
    if (primaryCurrency.value === "₿ Bitcoin" && select.value === "R$ Real brasileiro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputReais * bitcoin)
    }else if (primaryCurrency.value === "₿ Bitcoin" && select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais * BtcDolar)
    }else if (primaryCurrency.value === "₿ Bitcoin" && select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais * BtcEuro)
    }   else if (primaryCurrency.value === "₿ Bitcoin" && select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais)
    }
    
    changeCurrency()
}


changePrimaryCurrency = () => {

    const primaryFlag = document.getElementById("primary-flag")
    const primaryName = document.getElementById("primay-name")

    if (primarySelect.value === "€ Euro") {
        primaryFlag.src = "./img/euro.png"
        primaryName.innerHTML = "Euro"
        
    } else if (primarySelect.value === "US$ Dólar americano") {
        primaryFlag.src = "./img/estados-unidos.png"
        primaryName.innerHTML = "Dólar"
    } else if (primarySelect.value === "₿ Bitcoin") {
        primaryFlag.src = "./img/bitcoin.png"
        primaryName.innerHTML = "Bitcoin"
    }  else if (primarySelect.value === "R$ Real brasileiro") {
        primaryFlag.src = "./img/brasil.png" 
        primaryName.innerHTML = "Real brasileiro"
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currncy-img")

    if (select.value === "€ Euro") {

        currencyImg.src = "./img/euro.png"
        currencyName.innerHTML = "Euro"

    } else if (select.value === "US$ Dólar americano") {

        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./img/estados-unidos.png"

    } else if (select.value === "₿ Bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin.png"

    } else if(select.value === "R$ Real brasileiro"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImg.src = "./img/brasil.png" 
    }
    
    
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
primarySelect.addEventListener("change", changePrimaryCurrency)
