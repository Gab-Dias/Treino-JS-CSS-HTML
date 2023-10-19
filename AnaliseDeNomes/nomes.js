function analisarNome(){

    let nome = document.getElementById('inome')

    nome = nome.value


    // if (nome == 'daniel' || nome == "Daniel") {
    //     alert('Ele é gay')
    // } else {alert('é gente boa')}

    switch (nome) {
        case "daniel":
        case "Daniel":
            alert('Ele é gay')
            break

        case 'gabriel':
        case 'Gabriel':
            alert('legal')
            break

        case 'Yasmin':
        case 'yasmin':
            alert('Palmerense gata')
            break

        case 'Luisa':
        case 'luisa':
            alert('tem pau grande')
            break   
        
        case 'jose':
        case 'Jose':
            alert('Figado de aço')
            break

        case 'Daiane':
        case 'daiane':
            alert('Futura esposa de Gabriel')
            break

        case 'Guilherme':
        case 'guilherme':
            alert('Gosta de segurar um pau')
    }

}
