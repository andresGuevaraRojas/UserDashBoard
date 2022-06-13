class WheatherService{
    static BasePath = 'http://api.weatherapi.com/v1';
    static ApiKey = process.env.REACT_APP_APIKEY_WEATHERAPI;

    static async getCurrentWheatherByCountryName(name){
        const request = await fetch(
            `${this.BasePath}/current.json?key=${this.ApiKey}&format=json&q${name}`,
            {method:'GET'}
        )

        const weatherResponse = await request.json()
        
        return weatherResponse;
    }
}