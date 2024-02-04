const key = '40a456493bf084075887ae0045fb36d9'
const p_data = document.querySelector('#p_data')
const input = document.getElementsByTagName('input')[0]


const f = async() =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=SERGIPE,SE,BR&lang=pt_br&appid=${key}`)
        const data = await response.json()


        // Configurando a data
        const tempo = new Date()
        let dia = tempo.getDate()
        dia = dia<10?'0'+dia:dia
       
        let mes = tempo.getMonth()
        mes = mes<10?'0'+mes:mes

        let ano = tempo.getFullYear()

        
        p_data.innerHTML = `${dia}/${mes}/${ano}`



        // console.log(data)
        // console.log(data.name)
        // console.log(data.main.temp)
        // console.log(data.weather[0].description)
    }catch(err){
        console.log(err)
    }
} 

f()