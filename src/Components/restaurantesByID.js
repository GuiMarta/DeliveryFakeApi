import React from 'react';
import Navbar from './navbar';  // Supondo que você tenha o Navbar em um arquivo separado
import Footer from './footer';  // Supondo que você tenha o Footer em um arquivo separado

const MenuRestaurante = () => {
  return (
    <div>
      <Navbar />

      {/* Restaurant Details Section */}
      <section className="py-12 bg-light">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold mb-4">Restaurante Sabor & Arte</h1>
          <p className="text-lg text-gray-600 mb-8">Pratos deliciosos feitos com ingredientes frescos e amor. Experimente o sabor autêntico!</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Cardápio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dish 1 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/150" alt="Prato 1" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Risoto de Camarão</h5>
                <p className="text-gray-700 mb-2">Arroz cremoso com camarões frescos e temperos especiais.</p>
                <p className="font-bold text-red-600">R$ 45,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/150" alt="Prato 2" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Filé à Parmegiana</h5>
                <p className="text-gray-700 mb-2">Filé empanado com molho de tomate, queijo e acompanhamento de arroz.</p>
                <p className="font-bold text-red-600">R$ 39,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/150" alt="Prato 3" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Pizza Margherita</h5>
                <p className="text-gray-700 mb-2">Clássica pizza com molho de tomate, mussarela, manjericão e azeite.</p>
                <p className="font-bold text-red-600">R$ 29,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Dish 4 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/150" alt="Prato 4" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Salada Caesar</h5>
                <p className="text-gray-700 mb-2">Salada leve com alface, croutons, parmesão e molho Caesar.</p>
                <p className="font-bold text-red-600">R$ 24,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuRestaurante;
