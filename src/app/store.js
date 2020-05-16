export class Storage{
    constructor(){
        this.city='London';
        this.countryCode='uk';
    }

    getElements(){
        if(localStorage.getItem('city')!==null){
            this.city=localStorage.getItem('city');
        }
        if(localStorage.getItem('countryCode')!==null){
            this.countryCode=localStorage.getItem('countryCode');
        }
        return {
            city:this.city,
            countryCode:this.countryCode
        }
    }

    setElements(city,countryCode){
        localStorage.setItem('city',city);
        localStorage.setItem('countryCode',countryCode);
    }
}