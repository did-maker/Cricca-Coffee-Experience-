import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">Cricca Coffee</h1>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => setActiveTab("home")}
              className="hover:text-green-700"
            >
              Inicio
            </button>
            <button
              onClick={() => setActiveTab("coffees")}
              className="hover:text-green-700"
            >
              Cafés
            </button>
            <button
              onClick={() => setActiveTab("packs")}
              className="hover:text-green-700"
            >
              Packs
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className="hover:text-green-700"
            >
              Equipo
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      {activeTab === "home" && (
        <div className="relative h-96 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Cricca Coffee</h2>
            <p className="text-xl">
              Un espacio para vivir el café, no solo para tomarlo.
            </p>
          </div>
        </div>
      )}

      {/* Contenido básico */}
      <main className="container mx-auto p-6">
        {activeTab === "home" && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Filosofía</h3>
            <p>Texto de ejemplo: pasión por el café auténtico.</p>
          </div>
        )}
        {activeTab === "coffees" && (
          <h3 className="text-2xl">Cafés de Origen</h3>
        )}
        {activeTab === "packs" && (
          <h3 className="text-2xl">Pack de los 4 Continentes</h3>
        )}
        {activeTab === "team" && <h3 className="text-2xl">Manu y Trotski</h3>}
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white p-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Cricca Coffee. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
