import React from 'react';
import Navbar from './navbar';  // Supondo que você tenha o Navbar em um arquivo separado
import Footer from './footer';  // Supondo que você tenha o Footer em um arquivo separado

const FoodList = () => {
  return (
    <div>
      <Navbar />

      {/* Title Section */}
      <section className="py-12 bg-light text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Comidas Disponíveis</h1>
          <p className="text-lg text-gray-600 mb-8">Explore nossos pratos deliciosos e escolha suas opções favoritas!</p>
        </div>
      </section>

      {/* Food List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Pratos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Food Item 1 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Risoto de Camarão" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Risoto de Camarão</h5>
                <p className="text-gray-700 mb-2">Arroz cremoso com camarões frescos e temperos especiais.</p>
                <p className="font-bold text-red-600">R$ 45,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Food Item 2 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Pizza Margherita" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Pizza Margherita</h5>
                <p className="text-gray-700 mb-2">Clássica pizza com molho de tomate, mussarela e manjericão.</p>
                <p className="font-bold text-red-600">R$ 29,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Food Item 3 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Sushi Combo" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Sushi Combo</h5>
                <p className="text-gray-700 mb-2">Combo com 20 peças de sushi, incluindo sashimi e nigiri.</p>
                <p className="font-bold text-red-600">R$ 69,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Food Item 4 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Hambúrguer Gourmet" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Hambúrguer Gourmet</h5>
                <p className="text-gray-700 mb-2">Pão artesanal, carne angus e molho especial.</p>
                <p className="font-bold text-red-600">R$ 32,90</p>
                <a href="detalhes.html" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Food Item 5 */}
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Salada Caesar" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Salada Caesar</h5>
                <p className="text-gray-700 mb-2">Alface, parmesão, croutons e molho Caesar.</p>
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

export default FoodList;
