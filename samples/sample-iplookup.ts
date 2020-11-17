import { AstroIP } from '../src';


async function main() {
    let testApiKey = '249C35CF-81E7-4B49-8F9F-ACA72C9F5CD7';
    const client = new AstroIP(testApiKey);
    let hostname = true;
    let userAgent = true;
    let ipInfo = await client.lookupIP('8.8.8.8', hostname, userAgent);
    console.log(ipInfo);
}

main().then(() => 0).catch(() => 1);