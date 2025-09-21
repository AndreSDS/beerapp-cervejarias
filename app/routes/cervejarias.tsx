import { getBreweries, type Brewery } from "./services/beer";
import BrewriesList from "../features/breweries/list";

export async function loader(): Promise<{ breweries: Brewery[] }> {
    const breweries = await getBreweries();
    return { breweries };
}

export default BrewriesList;