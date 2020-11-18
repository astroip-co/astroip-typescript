
# AstroIP.co Official Typescript library

This is the official Javascript Library for AstroIP.co, which allows a fast lookup of any IP address or ASN. Our main features are:

- IP Geolocation data (country, city, postal codes, latitude, longitude)

- Timezone data

- Currency data

- Security data (TOR insights, Crawler insights, Proxy insigths)

- ASN data (number of IPs managed by an ASN, the organization name, the list of IP blocks managed by a given ASN, service type like isp, gov, edu, etc..)

- User Agent detection

## Getting started
In order to use AstroIP.co API, you will need to register a free account at https://astroip.co and get an API KEY. All data fields are always enabled regardless of the subscription tier.

The Free tier will allow up to 30,000 requests a month.
The PRO tier will allow for up to 3 Mil requests a month.
More pricing info are available at: https://astroip.co/#pricing-section

## Installation
Npm
   ```
   $ npm i astroip-typescript
   ```
Yarn
   ```
    $ yarn add astroip-typescript
   ```

## Usage example
IP Lookup:
 ```
  const {AstroIP} = require("astroip-typescript")
 
  let testApiKey = '1725E47C-1486-4369-AAFF-463CC9764026';
  const client = new AstroIP(testApiKey);
  let hostname = true;
  let userAgent = true;
  let ipInfo = await client.lookupIP('8.8.8.8', hostname, userAgent);
  console.log(ipInfo);
 ```
ASN Lookup:
 ```
  const {AstroIP} = require("astroip-typescript")
  
  let testApiKey = '1725E47C-1486-4369-AAFF-463CC9764026';
  const client = new AstroIP(testApiKey);
  let asnInfo = await client.requestAsnData("AS15169");
  console.log(asnInfo);
 ```
