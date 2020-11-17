import { IpResponse } from "./models/ipResponse";

export interface ICache {

    get(key: string): any;
    put(key: string, data: any): void;
    invalidate(key: string): void;
    invalidateAll(): void;
}

export class AstroIPCache implements ICache {
    get(key: string): any {
        throw new Error("Method not implemented.");
    }
    put(key: string, data: any): void {
        throw new Error("Method not implemented.");
    }
    invalidate(key: string): void {
        throw new Error("Method not implemented.");
    }
    invalidateAll(): void {
        throw new Error("Method not implemented.");
    }
}

export class DummyCache implements ICache {

    get(key: string): undefined {
        return undefined;
    }

    invalidate(key: string): void {
    }

    invalidateAll(): void {
    }

    put(key: string, data: IpResponse): void {
    }
}