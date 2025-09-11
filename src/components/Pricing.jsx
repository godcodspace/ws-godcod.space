const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      period: "para sempre",
      description: "Perfeito para começar seu primeiro micro SaaS",
      features: [
        "Até 100 transações/mês",
        "1 produto SaaS",
        "Dashboard básico",
        "Suporte por email",
        "SSL grátis"
      ],
      buttonText: "Começar Grátis",
      buttonStyle: "bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50",
      popular: false
    },
    {
      name: "Pro",
      price: "R$ 97",
      period: "por mês",
      description: "Ideal para empreendedores em crescimento",
      features: [
        "Transações ilimitadas",
        "Até 5 produtos SaaS",
        "Dashboard avançado",
        "Suporte prioritário 24/7",
        "Integrações premium",
        "API completa",
        "Relatórios personalizados"
      ],
      buttonText: "Começar teste grátis",
      buttonStyle: "bg-primary-600 text-white hover:bg-primary-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 497",
      period: "por mês",
      description: "Para empresas que precisam escalar",
      features: [
        "Tudo do plano Pro",
        "Produtos SaaS ilimitados",
        "White-label completo",
        "Gerente de conta dedicado",
        "SLA garantido 99.9%",
        "Treinamento personalizado",
        "Desenvolvimento customizado"
      ],
      buttonText: "Falar com vendas",
      buttonStyle: "bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            PREÇOS
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-gray-900">
            Preços simples e transparentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sem taxas ocultas. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 shadow-xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Perguntas Frequentes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Posso cancelar a qualquer momento?
              </h4>
              <p className="text-gray-600">
                Sim! Você pode cancelar ou alterar seu plano a qualquer momento sem taxas adicionais.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Existe período de teste?
              </h4>
              <p className="text-gray-600">
                O plano Pro oferece 14 dias de teste grátis, sem necessidade de cartão de crédito.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Como funciona a integração com Stripe?
              </h4>
              <p className="text-gray-600">
                Nossa integração com Stripe é automática. Você conecta sua conta e já pode começar a receber pagamentos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Vocês cobram taxa sobre transações?
              </h4>
              <p className="text-gray-600">
                Não! Você paga apenas as taxas do Stripe. Não cobramos nada adicional sobre suas vendas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
