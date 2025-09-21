import { Link, Outlet, useLoaderData, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import type { Brewery } from "~/routes/services/beer";

export default function List() {
    const loaderData = useLoaderData<{ breweries: Brewery[] }>();
    const location = useLocation();
    const navigate = useNavigate();
    
    // Extrai o ID da cervejaria da URL atual
    const currentBreweryId = location.pathname.split('/').pop();
    
    // Se estamos na rota /cervejarias (sem ID) e há cervejarias, redireciona para a primeira
    useEffect(() => {
        if (location.pathname === '/cervejarias' && loaderData.breweries && loaderData.breweries.length > 0) {
            navigate(`/cervejarias/${loaderData.breweries[0].id}`, { replace: true });
        }
    }, [location.pathname, loaderData.breweries, navigate]);

    // Se estamos redirecionando, mostra um loading
    if (location.pathname === '/cervejarias' && loaderData.breweries && loaderData.breweries.length > 0) {
        return (
            <div className="flex h-[calc(100vh-8rem)] border border-gray-200 rounded-lg overflow-hidden shadow-lg mx-4 my-4">
                <div className="flex-1 flex items-center justify-center bg-white">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Carregando cervejarias...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-[calc(100vh-8rem)] border border-gray-200 rounded-lg overflow-hidden shadow-lg mx-4 my-4">
            {/* Seção da lista à esquerda */}
            <aside className="w-80 min-w-[220px] max-w-[400px] bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Cervejarias</h1>
                <nav className="space-y-3">
                    {loaderData.breweries.map((brewery: Brewery) => {
                        const isActive = currentBreweryId === brewery.id;
                        return (
                            <div key={brewery.id}>
                                <Link
                                    prefetch="intent"
                                    to={`/cervejarias/${brewery.id}`}
                                    className={`block p-3 rounded-md transition-colors duration-200 border ${
                                        isActive
                                            ? 'bg-blue-100 text-blue-700 border-blue-200 shadow-sm'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-transparent hover:border-blue-200'
                                    }`}
                                >
                                    <div className="font-medium flex items-center">
                                        {brewery.name}
                                        {isActive && (
                                            <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                        {brewery.city}, {brewery.state}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </nav>
            </aside>

            {/* Seção de detalhes à direita */}
            <main className="flex-1 p-8 overflow-y-auto bg-white">
                <Outlet />
            </main>
        </div>
    );
}