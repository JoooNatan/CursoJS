var res = ''
res = document.querySelector('div#res')

function Converter() {
    var temp = window.prompt('Digite uma temperatura em °C (Celsius)')
    res.innerHTML = (`<h1>A temperatura de ${temp}°C, corresponde a...</h1> <p>${Number(temp) + 273.15}°K (Kelvin)</p><p>${( temp * 9/5) + 32}°F (Fahrenheit)</p>`)
}