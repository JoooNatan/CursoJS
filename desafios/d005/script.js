function Converter() {
    var metro = window.prompt('Digite uma distancia em metros (m)')
    window.alert(`${metro / 1000} km\n${metro / 100} hm\n${metro / 10} dam\n${metro * 10} dm\n${metro * 100} cm\n${metro * 1000} mm`)
}