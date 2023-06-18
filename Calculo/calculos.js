function calcular() {
    let date = new Date()
    let y2 = date.getFullYear()
    let m2 = 1 + date.getMonth()
    let d2 = date.getDay()
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    var d1 = document.getElementById("i-dia")
    var m1 = document.getElementById("i-mes")
    var y1 = document.getElementById("i-ano")

    d1 = Number(d1.value)
    m1 = Number(m1.value)
    y1 = Number(y1.value)
    
    var resAno = document.getElementById("r-ano")
    var resMes = document.getElementById("r-mes")
    var resDia = document.getElementById("r-dia")   

    if (d1 > d2) {
        d2 = d2 + month [m2 - 1]
        m2 = m2 - 1
    }
    if (m1 > m2){   
        m2 = m2 + 12
        y2= y2 - 1
       }

    var d = d2 - d1
    var m = m2 - m1
    var y = y2 - y1

    resAno.innerText = `${y}`
    resMes.innerHTML = `${m}`
    resDia.innerHTML = `${d}`



    /* if (dia == 0 || dia > 31 ){
    //     window.alert("Digite um dia entre 1 a 31")
    // } else {
    // var calculoAno = anoAtual - ano 
    // resAno.innerText = `${calculoAno}` }

    // if (mes == 0 || mes > 12) {
    //     window.alert("Digite um mês entre 1 a 12")
    // } else {
    // var calculoMes = mesAtual - mes
    //  resMes.innerHTML = `${calculoMes}` 
    //         }
        
    // if (ano == 0 ){
    //     window.alert("Digite um ano, exemplo (1999)")
    // } else {
    // var calculoDia = diaAtual - dia 
    //  resDia.innerHTML = `${calculoDia}`} */


}