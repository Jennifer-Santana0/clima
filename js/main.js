const key = '40a456493bf084075887ae0045fb36d9'
const input = document.getElementsByTagName('input')[0]
const btn = document.getElementsByTagName('button')[0]

function kelvinParaCelsius(kelvin) {
    // Aplicando a fórmula de conversão
    let celsius = kelvin - 273.15
    let c = String(celsius).slice(0, 2)
    return c
}


const get_weather = async(cidade) =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},SE,BR&lang=pt_br&appid=${key}`)

        const container = document.querySelector('.container')
        container.style.display = 'flex'
        container.classList.add('border')

        if (response.ok){
            const data = await response.json()

             // Congigurando a data
            const tempo = new Date()
            
            let dia = tempo.getDate()
            dia = dia < 10? '0'+ dia : dia

            let mes = tempo.getMonth()
            mes = mes < 10? '0'+ mes : mes

            let ano = tempo.getFullYear()

            container.innerHTML = ''

            const p_data = document.createElement('p')
            p_data.innerHTML = `${dia}/${mes}/${ano}`

            const p_cidade = document.createElement('p')
            p_cidade.innerHTML = data.name

            const grau = document.createElement('h1')
            let kelvin = data.main.temp
            grau.innerHTML = kelvinParaCelsius(kelvin) + 'º'

            const p_ceu = document.createElement('p')
            p_ceu.innerHTML = data.weather[0].description

            container.appendChild(p_data)
            container.appendChild(p_cidade)
            container.appendChild(grau)
            container.appendChild(p_ceu)

        } else {
            container.innerHTML = 'Não encontrada'
        }

    }catch(err){
        console.log('ff')
    }
} 

btn.addEventListener('click',()=>{
    const nome = input.value
    if(nome===''){
        alert('Por favor dogite um nome de uma cidade')
    } else {
        get_weather(nome)
    }
})
document.addEventListener('keyup',(event)=>{
    if (event.keyCode===13){
        const nome = input.value
        if(nome===''){
            alert('Por favor dogite um nome de uma cidade')
        } else {
            get_weather(nome)
        }
    }
})