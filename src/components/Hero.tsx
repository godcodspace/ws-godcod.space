import { useState } from 'react'
import Logo from './Logo'

const Hero = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo size="default" />
          <span className="text-xl font-medium text-neutral-900">GodCod</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors">
            Produtos
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors">
            Preços
          </a>
          <a href="#docs" className="text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors">
            Documentação
          </a>
          <a href="#company" className="text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors">
            Empresa
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-neutral-700 px-5 py-2 text-sm font-medium hover:text-neutral-900 transition-colors">
            Entrar
          </button>
          <button className="bg-neutral-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
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
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium">
              Novo
            </span>
            <span className="text-sm text-neutral-600">
              Lançamos o GodCod AI Assistant v2.0
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-medium text-neutral-900 leading-tight mb-6">
            Micro serviços inteligentes
            <br />
            para <span className="text-neutral-600">desenvolvedores modernos</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            APIs poderosas e ferramentas de IA para acelerar seu desenvolvimento.
            Processe dados, gere conteúdo e automatize tarefas complexas em segundos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
              Começar Gratuitamente
            </button>
            <button className="bg-neutral-100 text-neutral-900 px-8 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
              Ver Documentação
            </button>
          </div>

          {/* Product Cards Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* AI Assistant Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">AI Assistant</h3>
              <p className="text-sm text-neutral-600">Assistente inteligente para geração de código e documentação</p>
            </div>
            
            {/* Data Processing Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">Data Processing</h3>
              <p className="text-sm text-neutral-600">APIs para processamento e análise de dados em tempo real</p>
            </div>
            
            {/* Image Generation Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-neutral-900 mb-2">Image Generation</h3>
              <p className="text-sm text-neutral-600">Crie imagens e gráficos com IA generativa avançada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
