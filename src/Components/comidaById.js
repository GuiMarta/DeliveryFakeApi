import React from 'react';
import Navbar from './navbar';  // Componente Navbar separado
import Footer from './footer';  // Componente Footer separado

const FoodDetails = () => {
  return (
    <div>
      <Navbar />

      {/* Food Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/500x400" alt="Comida" className="w-full rounded-lg shadow-lg" />
            </div>

            {/* Details */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h1 className="text-4xl font-extrabold mb-4">Pizza de Calabresa</h1>
              <p className="text-lg text-gray-700 mb-4">Uma deliciosa pizza de calabresa com queijo derretido, cebola e orégano.</p>
              <p className="text-3xl font-bold text-red-600 mb-6">R$ 39,90</p>

              <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="mr-3 font-semibold">Quantidade:</label>
                <input
                  type="number"
                  id="quantity"
                  className="form-input w-24 py-2 px-4 border border-gray-300 rounded-lg"
                  value="1"
                  min="1"
                />
              </div>

              <button className="btn btn-lg bg-danger text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Foods Section */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Outros Pratos Sugeridos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Related Food 1 */}
            <div className="max-w-xs rounded-lg shadow-lg bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Prato 1" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">Hambúrguer Clássico</h5>
                <p className="text-gray-700 mb-4">Sabor inigualável!</p>
                <a href="#" className="btn btn-danger text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Related Food 2 */}
            <div className="max-w-xs rounded-lg shadow-lg bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Prato 2" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">Macarrão à Bolonhesa</h5>
                <p className="text-gray-700 mb-4">Perfeito para os amantes de massa.</p>
                <a href="#" className="btn btn-danger text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>

            {/* Related Food 3 */}
            <div className="max-w-xs rounded-lg shadow-lg bg-white">
              <img src="https://via.placeholder.com/300x200" alt="Prato 3" className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">Salada Tropical</h5>
                <p className="text-gray-700 mb-4">Leve e saudável.</p>
                <a href="#" className="btn btn-danger text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Ver Detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodDetails;
