import React from 'react';
import Navbar from './navbar';  // Supondo que você tenha o Navbar em um arquivo separado
import Footer from './footer';  // Supondo que você tenha o Footer em um arquivo separado

const Restaurants = () => {
  return (
    <div>
      <Navbar />

      {/* Restaurants Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-center mb-8">Restaurantes Disponíveis</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restaurant 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Restaurante 1" className="w-full h-56 object-cover" />
              <div className="px-6 py-4">
                <h5 className="font-bold text-xl mb-2">Restaurante Sabor & Arte</h5>
                <p className="text-gray-700 text-base">Pratos deliciosos feitos com ingredientes frescos e amor.</p>
              </div>
              <div className="px-6 py-4">
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Restaurant 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Restaurante 2" className="w-full h-56 object-cover" />
              <div className="px-6 py-4">
                <h5 className="font-bold text-xl mb-2">Pizzaria Bella Itália</h5>
                <p className="text-gray-700 text-base">As melhores pizzas artesanais com sabores únicos.</p>
              </div>
              <div className="px-6 py-4">
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Restaurant 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Restaurante 3" className="w-full h-56 object-cover" />
              <div className="px-6 py-4">
                <h5 className="font-bold text-xl mb-2">Churrascaria Fogo Vivo</h5>
                <p className="text-gray-700 text-base">Carnes nobres e atendimento de qualidade.</p>
              </div>
              <div className="px-6 py-4">
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Restaurants;
