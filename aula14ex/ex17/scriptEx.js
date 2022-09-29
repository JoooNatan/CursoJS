function tabuada() {
    var num = document.getElementById('txtn1')
    var tab = document.getElementById('seltabe')
    var result
    if (num.value.length == 0) {
        window.alert('Preencha com um numero')
    } else {
        num = Number(num.value)
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            result = num * i
            item.text = `${num} x ${i} = ${result}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}