export interface AsnResponse {
    total_blocks_v4: number,
    status_code: number,
    ip_blocks_v4: string[],
    abuse: {
        address: string,
        email: string
    },
    registry: string,
    country_code: string,
    name: string,
    type: string,
    domain: string,
    error: string,
    organization: string,
    asn: string
}