function convertCurrency(){

    var destination = document.getElementById("destination").value;


    var xmlreq = new XMLHttpRequest();

    
  
    var url = "https://v6.exchangerate-api.com/v6/d1ea38899ef1ba638e240595/latest/USD";
    
    xmlreq.open("GET",url,true);
    xmlreq.send();

    xmlreq.onreadystatechange = function () {

        if (xmlreq.readyState == 4    &&    xmlreq.status == 200) {

            var result = xmlreq.responseText;  
            var jsResult = JSON.parse(result); 
            var oneUnit = jsResult.conversion_rates[destination];

            var amt = document.getElementById("source-text").value;
            document.getElementById("destination-text").value = (oneUnit * amt).toFixed(2)+" "+destination;
        }
    } 
}