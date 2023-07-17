function analisar(){

    let nome = document.getElementById('inome')

    nome = nome.value


    // if (nome == 'daniel' || nome == "Daniel") {
    //     alert('Ele é gay')
    // } else {alert('é gente boa')}

    switch (nome) {
        case "daniel":
            alert('Ele é gay')
            break

        case 'gabriel':
            alert('tem pau grande')
            break

        case 'Yasmin':
            alert('Palmerense gata')
    }

}