const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const description = document.querySelector('.description p')

function render(){
    const weightValue = weight.value
    const heightValue = height.value

    const classification = [
        `<p>Você está <strong>abaixo do peso</strong></p>`,
        `<p>Você está com <strong>peso normal</strong></p>`,
        `<p>Você está <strong>acima do peso	</strong></p>`,
        `<p>Você está com <strong>obesidade grau I</strong></p>`,
        `<p>Você está com <strong>obesidade grau II (grave)</strong></p>`,
    ]  

    if(weightValue == '' || heightValue == ''){
        alert('Valor Inválido!')
    }else{  
        const imc = (weightValue / (Math.pow(heightValue,2))*10000).toFixed(2)
    
        if(imc <= 18.5){
            description.innerHTML = `<h2><strong>SEU IMC: ${imc}</strong></h2>${classification[0]}`
        }else if(imc > 18.5 && imc <= 24.9){        
            description.innerHTML = `<h2><strong>SEU IMC: ${imc}</strong></h2>${classification[1]}` 
        }else if(imc > 24.9 && imc <= 29.9){         
            description.innerHTML = `<h2><strong>SEU IMC: ${imc}</strong></h2>${classification[2]}`
        }else if(imc > 29.9 && imc <= 39.9){        
            description.innerHTML = `<h2><strong>SEU IMC: ${imc}</strong></h2>${classification[3]}`
        }else if(imc > 39.9){         
            description.innerHTML = `<h2><strong>SEU IMC: ${imc}</strong></h2>${classification[4]}`
        }
    }

    
}