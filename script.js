const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const inputs = document.querySelector('.content')

const descriptionContainer = document.querySelector('.description')
const descriptionText = document.querySelector('.description p')

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;


function render(){
    const weightValue = weight.value
    const heightValue = height.value 
    

    if(weightValue == '' || heightValue == ''){
        alert('Valor Inválido!')
    }else{ 
        fixes()

        const imc = (weightValue / (Math.pow(heightValue,2))*10000).toFixed(2)
    
        if(imc <= 18.5){
            const imcClass = 'Você está abaixo do peso'
            imcElements(imc, imcClass)
        }else if(imc > 18.5 && imc <= 24.9){
            const imcClass = `Você está com peso normal`  
            imcElements(imc, imcClass)       
        }else if(imc > 24.9 && imc <= 29.9){     
            const imcClass = `Você está acima do peso`  
            imcElements(imc, imcClass)       
        }else if(imc > 29.9 && imc <= 39.9){    
            const imcClass = `Você está com obesidade grau I`  
            imcElements(imc, imcClass)     
        }else if(imc > 39.9){              
            const imcClass = `Você está com obesidade grau II (grave)`
            imcElements(imc, imcClass)       
        }

        if(descriptionContainer.childNodes[5]){
            descriptionContainer.childNodes[3].remove(descriptionContainer.childNodes[3])
            descriptionContainer.childNodes[3].remove(descriptionContainer.childNodes[3])
        }
    }  
}

function imcElements(imc, text){
    
    descriptionText.style.display = 'none'

    const imcValue = document.createElement('div')
    const imcText = document.createTextNode(`Seu IMC é ${imc}`)
    imcValue.setAttribute('class', 'displayImc')
    imcValue.appendChild(imcText)
    descriptionContainer.appendChild(imcValue)

    const imcClass = document.createElement('div')
    const imcClassText = document.createTextNode(text)
    imcClass.setAttribute('class', 'displayImcClass')
    imcClass.appendChild(imcClassText)
    descriptionContainer.appendChild(imcClass)



}

function fixes(){
    // const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    weight.value = ''
    height.value = ''

    // inputs.style.display = 'none'
    // descriptionContainer.style.display = 'block'

}