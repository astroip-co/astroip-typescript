export interface IpResponse {
 
    status_code: number,
    geo: {
        is_metric: boolean,
        is_eu: boolean,
        longitude: number,
        latitude: number,
        country_geo_id: number,
        zip_code: string,
        city: string,
        region_code: string,
        region_name:string,
        continent_code: string,
        continent_name: string,
        capital: string,
        country_name: string,
        country_code: string
    },
    asn: {
        route: string,
        name: string,
        type: string,
        domain: string,
        organization: string,
        asn: string
    },
    currency: {
        native_name: string,
        code: string,
        name: string,
        symbol: string
    },
    timezone: {
        is_dst: boolean,
        gmt_offset: number,
        date_time: string,
        microsoft_name: string,
        iana_name: string
    },
    security: {
        is_crawler: boolean,
        is_proxy: boolean,
        is_tor: boolean,
        tor_insights:  {
            exit_node: string,
            published_on: string,
            last_status_on: string
        },
        proxy_insights: {
            type: string
        },
        crawler_insights: {
            type: string,
            name: string,
            domain: string
        }
    },
    crypto: {
        is_crypto: boolean,
        crypto_insights: {
            port: number,
            coin: string
        }
    },
    error: string,
    hostname: string,
    ip_type: string,
    requester_ip: string,
    ip: string
}