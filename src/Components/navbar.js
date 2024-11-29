


const NavBar = () => {
    return (
        <nav class="bg-red-600">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" class="text-white text-lg font-semibold">Delivery</a>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <a href="/" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500 hover:text-white">Home</a>
                            <a href="/restaurantes" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500 hover:text-white">Restaurantes</a>
                            <a href="/comidas" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500 hover:text-white">Comidas</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};
export default NavBar;