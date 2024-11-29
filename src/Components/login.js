import React from 'react';
import Navbar from './navbar';  // Componente Navbar separado
import Footer from './footer';  // Componente Footer separado


const Login = () => {
  return (
    <div>
      <Navbar />

      {/* Login Section */}
      <section className="py-12 mt-4 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="card border rounded-xl shadow-sm">
                <div className="card-body  p-6">
                  <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                  <form action="#" method="post">
                    {/* Email */}
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-lg font-semibold">E-mail</label>
                      <input
                        type="email"
                        className="form-input w-full mt-2 p-2 border border-gray-300 rounded-lg"
                        id="email"
                        name="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-lg font-semibold">Senha</label>
                      <input
                        type="password"
                        className="form-input w-full mt-2 p-2 border border-gray-300 rounded-lg"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid mb-4">
                      <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300">
                        Entrar
                      </button>
                    </div>
                  </form>

                  <p className="mt-3 text-center">
                    Não tem uma conta?{' '}
                    <a href="cadastro.html" className="text-red-600 hover:text-red-700">Cadastre-se aqui</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
