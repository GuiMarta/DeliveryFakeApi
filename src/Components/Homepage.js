import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

const DeliveryPage = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      {/* Hero Section */}
      <section className=" text-center py-12">
        <div className="container mx-auto">
          <h1 className="text-black text-4xl font-extrabold">Os melhores pratos na sua porta</h1>
          <p className="text-black text-lg my-4">Peça agora e receba em minutos. Delivery rápido e confiável.</p>
          <a href="#" className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-500">Ver lugares</a>
        </div>
      </section>

      {/* Recommended Foods Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold mb-8">Comidas recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Categoria 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Pizzas</h5>
                <p className="text-gray-600">As melhores pizzas da cidade.</p>
                <a href="#" className="text-red-600 font-semibold mt-2 block">Ver Opções</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Categoria 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Bebidas</h5>
                <p className="text-gray-600">Refrigerantes, sucos e mais.</p>
                <a href="#" className="text-red-600 font-semibold mt-2 block">Ver Opções</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Categoria 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Sobremesas</h5>
                <p className="text-gray-600">Doces irresistíveis para finalizar.</p>
                <a href="#" className="text-red-600 font-semibold mt-2 block">Ver Opções</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Restaurants Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold mb-8">Restaurantes recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Categoria 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Restaurante A</h5>
                <p className="text-gray-600">O melhor restaurante de pizzas.</p>
                <a href="#" className="text-red-600 font-semibold mt-2 block">Ver Opções</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Categoria 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Restaurante B</h5>
                <p className="text-gray-600">Deliciosos pratos e sobremesas.</p>
                <a href="#" className="text-red-600 font-semibold mt-2 block">Ver Opções</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Categoria 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Restaurante C</h5>
                <p className="text-gray-600">Saboroso e rápido.</p>
                <a href="#" className="text-red-600 font-semibold mt-2 block">Ver Opções</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DeliveryPage;
