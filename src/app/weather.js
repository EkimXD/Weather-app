const {Storage}=require('./store');

const storage=new Storage();

export class Weather{
    constructor(){
        const data=storage.getElements();
        this.apikey='282d9888f549709a19a9db882e663483';
        this.city=data.city;
        this.citycode=data.countryCode;
    }

    async getWeather() {
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.citycode}&appid=${this.apikey}&units=metric`);
        const URI=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.citycode}&appid=${this.apikey}&units=metric`;
        const data= await fetch(URI);
        const response=await data.json();
        return response;
    }

    changeLocation(city, citycode){
        this.city=city;
        this.citycode=citycode;
        storage.setElements(city,citycode);
    }
}