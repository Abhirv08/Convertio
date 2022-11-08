var myHeaders = new Headers();
myHeaders.append("apikey", "6Hv8YF2p10IKrYMB87WmJMaZdJoNlUf2");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
}

fetch(`https://api.apilayer.com/currency_data/list`, requestOptions)
.then(Response => Response.json())
.then(result => console.log(result));