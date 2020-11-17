import { AstroIP } from '../src';


async function main() {
    let testApiKey = '1725E47C-1486-4369-AAFF-463CC9764026';
    const client = new AstroIP(testApiKey);
    let hostname = true;
    let userAgent = true;

    let ipInfo = await client.lookupIP('8.8.8.8', hostname, userAgent);

    if (ipInfo.error == null) {
        console.log(ipInfo.geo["country-name"]);
    } else {
        console.log(ipInfo.error);
    }
}

main().then(() => 0).catch(() => 1);