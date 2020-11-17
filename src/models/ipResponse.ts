export interface IpResponse {
 
    "status-code": number,
    "geo": {
        "is-metric": boolean,
        "is-in-europe": boolean,
        "longitude": number,
        "latitude": number,
        "country-geo-id": number,
        "zip-code": string,
        "city": string,
        "region-code": string,
        "region-name":string,
        "continent-code": string,
        "continent-name": string,
        "capital": string,
        "country-name": string,
        "country-iso-code": string
    },
    "asn": {
        "route": string,
        "name": string,
        "type": string,
        "domain": string,
        "organization": string,
        "asn": string
    },
    "currency": {
        "native-name": string,
        "code": string,
        "name": string,
        "symbol": string
    },
    "timezone": {
        "is-daylight-saving": boolean,
        "gmt-offset": number,
        "date-time": string,
        "microsoft-name": string,
        "iana-name": string
    },
    "security": {
        "is-crawler": boolean,
        "is-proxy": boolean,
        "is-tor": boolean,
        "tor-insights":  {
            "exit-node": string,
            "published-on": string,
            "last-status-on": string
        },
        "proxy-insights": {
            "type": string
        },
        "crawler-insights": {
            "type": string,
            "name": string,
            "domain": string
        }
    },
    "crypto": {
        "is-crypto-node": boolean,
        "crypto-insights": {
            "port": number,
            "coin": string
        }
    },
    "error": string,
    "hostname": string,
    "ip-type": string,
    "requester-ip": string,
    "ip": string
}