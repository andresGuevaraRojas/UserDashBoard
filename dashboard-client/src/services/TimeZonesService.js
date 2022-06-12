class TimeZonesService{
    static BasePath = 'http://api.timezonedb.com/v2.1';
    static ApiKey = process.env.REACT_APP_APIKEY_TIMEZONEDB;

    static async getTimeZonesByCountryCode(code){
        const request = await fetch(
            `${this.BasePath}/list-time-zone?key=${this.ApiKey}&format=json&country=${code}`,
            {method:'GET'}
        )

        const timeZonesResponse = await request.json()
        
        return timeZonesResponse.zones;
    }
}

export default TimeZonesService;