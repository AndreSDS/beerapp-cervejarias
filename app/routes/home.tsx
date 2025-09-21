import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BeerApp - Descubra Cervejarias Incríveis" },
    { name: "description", content: "Explore cervejarias de todo o mundo e descubra seus sabores únicos" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Descubra Cervejarias
            <span className="text-blue-600 block">Incríveis</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore uma coleção única de cervejarias de todo o mundo. 
            Encontre informações detalhadas sobre cada local, seus tipos de cerveja e muito mais.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cervejarias"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Explorar Cervejarias
            </Link>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
            >
              Fazer Login
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🍺</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Variedade</h3>
            <p className="text-gray-600">
              Descubra diferentes tipos de cervejarias, desde microcervejarias até grandes produtores.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global</h3>
            <p className="text-gray-600">
              Explore cervejarias de todo o mundo e descubra sabores únicos de cada região.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Localização</h3>
            <p className="text-gray-600">
              Encontre cervejarias próximas a você com informações detalhadas de endereço e contato.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Números Impressionantes</h2>
            <p className="text-gray-600">Nossa plataforma conecta você a milhares de cervejarias</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Cervejarias Cadastradas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Países Representados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Acesso Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
