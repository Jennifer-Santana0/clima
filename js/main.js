const key = '40a456493bf084075887ae0045fb36d9'
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=

const a_1 = `https://api.openweathermap.org/data/2.5/weather?q=SERGIPE,SE,BR&lang=pt_br&appid=${key}`

const f = async() =>{
    try{
        const response = await fetch(a_1)
        const data = await response.json()
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.weather[0].description)
    }catch(err){
        console.log(err)
    }
} 

f()