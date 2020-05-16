const {Weather}=require('./weather')
const {UI}=require('./iu');

const ui=new UI();
const weather= new Weather();

require('./index.css');

document.addEventListener('DOMContentLoaded', init);

async function init(){
    const data=await weather.getWeather();
    ui.render(data);
    
    document.getElementById('w-change-btn').addEventListener('click',async (e)=>{
        const city=document.getElementById('city').value;
        const countryCode=document.getElementById('countryCode').value;
        weather.changeLocation(city,countryCode);
        e.preventDefault();
        const data=await weather.getWeather();
        ui.render(data);
    });
}

