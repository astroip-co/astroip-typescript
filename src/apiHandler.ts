import isIP from 'is-ip';
import fetch from 'node-fetch';

export class ApiHandler {

    public readonly baseUrl: string = 'https://api.astroip.co';
    public readonly apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async lookupIP(ipAddress?: string, hostname?: boolean, userAgent?: boolean) {

        if (ipAddress != null && !isIP(ipAddress)) {
            throw new Error(`Invalid IP: ${ipAddress}`);
        }

        let reqUrl = ipAddress ? this.baseUrl + "/" + ipAddress + "/?api_key=" + this.apiKey : this.baseUrl + "/?api_key=" + this.apiKey ;

        if (hostname) {
            reqUrl += "&h=1";
        }

        if (userAgent) {
            reqUrl += "&ua=1";
        }

        const response = await fetch(reqUrl);
       
        return await response.json();
    }

    async lookupASN(asnName?: string) {        

        let reqUrl = this.baseUrl + "/asn/" + asnName + "/?api_key=" + this.apiKey;

        const response = await fetch(reqUrl);
       
        return await response.json();
    }
}

