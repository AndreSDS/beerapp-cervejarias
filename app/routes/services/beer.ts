import { cache, timeToLeave } from "./cache";

export type Brewery = {
    id: string;
    name: string;
    brewery_type: string;
    address_1: string;
    address_2: string | null;
    address_3: string | null;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    longitude: number;
    latitude: number;
    phone: string;
    website_url: string;
    state: string;
    street: string;
};

export async function getBreweries(): Promise<Brewery[]> {
    const cachedBreweries = await cache.get("breweries");

    if (cachedBreweries) {
        return JSON.parse(cachedBreweries) as Brewery[];
    }

    const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    
    const breweries = (await response.json()) as Brewery[];

    const breweriesString = JSON.stringify(breweries);
    await cache.set("breweries", breweriesString);
    await cache.expire("breweries", timeToLeave);

    return breweries as Brewery[];
}


export async function getBrewery(id: string): Promise<Brewery> {
    const cachedBrewery = await cache.get(`brewery:${id}`);
    if (cachedBrewery) {
        return JSON.parse(cachedBrewery) as Brewery;
    }

    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    const brewery = await response.json();
    await cache.set(`brewery:${id}`, JSON.stringify(brewery));
    await cache.expire(`brewery:${id}`, timeToLeave);

    return brewery as Brewery;
}