

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("form-submission").addEventListener("submit", function (e) {
        e.preventDefault();
        let from_value = document.getElementById("currency_from").value;
        let to_value = document.getElementById("currency_to").value;
        let amount = Number(document.getElementById("amount").value);

        if (from_value != "Choose Currency" && to_value != "Choose Currency" && amount != 0) {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "5Q74HsAUYL5cKNFPHefXa6hSGHHr3WiH");

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            }

            fetch(`https://api.apilayer.com/currency_data/convert?to=${to_value}&from=${from_value}&amount=${amount}`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))


        } else if (amount === 0) {
            window.alert("Enter Amount");
        } else {
            window.alert("Please choose a currency");
        }
    })
})