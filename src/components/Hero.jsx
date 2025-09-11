import { useState } from 'react'

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-primary-50 to-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-xl font-bold text-gray-900">GodCod</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Recursos
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Preços
          </a>
          <a href="#security" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Segurança
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Benefícios
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors">
            Começar Agora
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-primary-600 font-medium">
              Recursos
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary-600 font-medium">
              Preços
            </a>
            <a href="#security" className="block text-gray-700 hover:text-primary-600 font-medium">
              Segurança
            </a>
            <a href="#benefits" className="block text-gray-700 hover:text-primary-600 font-medium">
              Benefícios
            </a>
            <button className="w-full bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors mt-4">
              Começar Agora
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              MICRO SAAS INOVADOR
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme suas ideias em
                <span className="text-primary-600"> produtos digitais</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Construa, gerencie e escale seus micro SaaS com nossa plataforma completa. 
                Ferramentas poderosas para empreendedores digitais que querem crescer rápido.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg">
                Comece Gratuitamente
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200">
                Ver Demonstração
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Setup em 2 minutos</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Placeholder for illustration/graphic */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Dashboard Preview */}
                <div className="space-y-4">
                  <div className="bg-gray-100 h-8 rounded animate-pulse"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">R$ 35.890</div>
                      <div className="text-sm text-gray-600">Receita Mensal</div>
                    </div>
                    <div className="bg-secondary-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary-600">+24%</div>
                      <div className="text-sm text-gray-600">Crescimento</div>
                    </div>
                    <div className="bg-accent-100 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent-600">1.2k</div>
                      <div className="text-sm text-gray-600">Usuários</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 h-32 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-primary-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-secondary-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-accent-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="font-bold text-gray-900">+500</div>
                <div className="text-xs text-gray-600">Empreendedores ativos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
