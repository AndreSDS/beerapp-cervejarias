import { useLoaderData } from "react-router";
import type { Brewery } from "~/routes/services/beer";

export default function Single() {
    const loaderData = useLoaderData<{ brewery: Brewery }>();

    const { brewery } = loaderData;
    const { brewery_type, country, city, state, address_1, address_2, address_3, postal_code, phone, website_url, latitude, longitude, name, id } = brewery;

    if (!brewery) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                    <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
                        <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Cervejaria não encontrada</h2>
                    <p className="text-gray-600 mb-6">A cervejaria com ID {id} não foi encontrada em nossa base de dados.</p>
                    <a
                        href="/cervejarias"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para Cervejarias
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header da cervejaria */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8 shadow-xl">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4">{name}</h1>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                {brewery_type}
                            </span>
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {country}
                            </span>
                        </div>
                        <p className="text-blue-100 text-lg">
                            {city}, {state}
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-4xl">🍺</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid de informações */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Informações de Contato */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contato
                        </h2>
                        <div className="space-y-4">
                            {phone && (
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Telefone</p>
                                        <p className="font-medium text-gray-900">{phone}</p>
                                    </div>
                                </div>
                            )}
                            {website_url && (
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Website</p>
                                        <a
                                            href={website_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            Visitar Site
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Endereço e Localização */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Endereço */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Endereço
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="space-y-2 text-gray-700">
                                <div className="font-medium">{address_1}</div>
                                {address_2 && <div>{address_2}</div>}
                                {address_3 && <div>{address_3}</div>}
                                <div className="text-blue-600 font-medium">
                                    {city}, {state} {postal_code}
                                </div>
                                <div className="text-gray-500">{country}</div>
                            </div>
                        </div>
                    </div>

                    {/* Localização */}
                    {(latitude && longitude) && (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Coordenadas GPS
                            </h2>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">Latitude</div>
                                        <div className="font-mono text-gray-800 text-lg">{latitude}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">Longitude</div>
                                        <div className="font-mono text-gray-800 text-lg">{longitude}</div>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <a
                                        href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Ver no Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}