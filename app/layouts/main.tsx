import { NavLink, Outlet } from "react-router";

export default function Main() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header com navegação */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <NavLink 
                                to="/" 
                                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                🍺 BeerApp
                            </NavLink>
                        </div>

                        {/* Navegação principal */}
                        <nav className="hidden md:flex space-x-8">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/cervejarias"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`
                                }
                            >
                                Cervejarias
                            </NavLink>
                        </nav>

                        {/* Botão de login */}
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to="/login"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Login
                            </NavLink>
                        </div>

                        {/* Menu mobile (hamburger) */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                                aria-label="Abrir menu"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile expandido */}
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    isActive
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/cervejarias"
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    isActive
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`
                            }
                        >
                            Cervejarias
                        </NavLink>
                    </div>
                </div>
            </header>

            {/* Conteúdo principal */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-500 text-sm">
                        <p>&copy; 2024 BeerApp. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}