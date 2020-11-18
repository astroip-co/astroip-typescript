import { AstroIPCache, DummyCache } from './cache';
import { ApiHandler } from './apiHandler';
import { IpResponse } from './models/ipResponse';
import { AsnResponse } from './models/asnResponse';

export class AstroIP {

    public readonly apiKey: string;
    public readonly apiHandler: ApiHandler;
    private readonly DEF_IP: string = "DEF_IP";
    private cache: AstroIPCache;

    constructor(apiKey: string, cache?: AstroIPCache) {

        this.apiKey = apiKey;

        this.cache = cache ? cache : new DummyCache();

        this.apiHandler = new ApiHandler(apiKey);
    }


    public async lookupIP(ipAddress?: string, hostname?: boolean, userAgent?: boolean): Promise<IpResponse> {
        const cacheKey = this.buildCacheKey(ipAddress, hostname, userAgent);
        const cacheValue = this.cache.get(cacheKey) as IpResponse;

        let response: IpResponse;

        if (!cacheValue) {
            response = await this.apiHandler.lookupIP(ipAddress, hostname, userAgent);
            this.cache.put(cacheKey, response);
        } else {
            response = this.cache.get(cacheKey);
        }

        return response;
    }

    public async lookupASN(asnName?: string): Promise<AsnResponse> {
        const cacheKey = this.buildCacheKey(asnName);
        const cacheValue = this.cache.get(cacheKey) as AsnResponse;

        let response: AsnResponse;

        if (!cacheValue) {
            response = await this.apiHandler.lookupASN(asnName);
            this.cache.put(cacheKey, response);
        } else {
            response = this.cache.get(cacheKey);
        }

        return response;
    }

    private buildCacheKey(ipAddress?: string, hostname?: boolean, userAgent?: boolean): string {

        let key = ipAddress ? ipAddress : this.DEF_IP;

        if (hostname) {
            key += "_hostname";
        }

        if (userAgent) {
            key += "_useragent";
        }

        return key;
    }

}