function calcular() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var mesAtual = data.getMonth()
    var diaAtual = data.getDay()

    var dia = document.getElementById("i-dia")
    var mes = document.getElementById("i-mes")
    var ano = document.getElementById("i-ano")

    dia = Number(dia.value)
    mes = Number(mes.value)
    ano = Number(ano.value)
    
    var resAno = document.getElementById("r-ano")
    var resMes = document.getElementById("r-mes")
    var resDia = document.getElementById("r-dia")   
   
    var calculoAno = anoAtual - ano
    resAno.innerText = `${calculoAno}`

    var calculoMes = mesAtual - mes
     resMes.innerHTML = `${calculoMes}`

    var calculoDia = dia - diaAtual
     resDia.innerHTML = `${calculoDia}`


}