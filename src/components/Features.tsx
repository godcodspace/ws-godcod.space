type Feature = {
  title: string
  description: string
  icon: string
  color: string
}

const Features = (): JSX.Element => {
  const features: Feature[] = [
    {
      title: "Desenvolvimento Rápido",
      description: "Crie e lance seus produtos SaaS em tempo recorde com nossas ferramentas automatizadas.",
      icon: "🚀",
      color: "bg-primary-100 text-primary-600"
    },
    {
      title: "Sem Taxas Ocultas",
      description: "Preços transparentes e justos. Você sempre sabe exatamente quanto está pagando.",
      icon: "💎",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Gestão Simplificada",
      description: "Dashboard intuitivo para gerenciar todos os seus produtos em um só lugar.",
      icon: "📊",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Pagamentos Seguros",
      description: "Integração com Stripe para processar pagamentos com segurança e confiabilidade.",
      icon: "🔒",
      color: "bg-secondary-100 text-secondary-600"
    }
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            RECURSOS
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-gray-900">
            Por que escolher a GodCod para
            <br />
            seus produtos digitais?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-4 text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">
            Empresas que confiam em nossa plataforma
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 w-24 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
