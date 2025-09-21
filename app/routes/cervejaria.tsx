import type { Route } from "./+types/cervejaria";
import { getBrewery, type Brewery } from "./services/beer";
import Single from "~/features/breweries/single";

export async function loader({ params }: Route.LoaderArgs): Promise<{ brewery: Brewery }> {
    const brewery = await getBrewery(params.id as string);
    return { brewery };
}

export default Single;

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center max-w-md mx-auto">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Ops! Algo deu errado</h2>
                <p className="text-gray-600 mb-6">{(error as Error).message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Tentar Novamente
                </button>
            </div>
        </div>
    );
}
