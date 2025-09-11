const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "Grátis",
      period: "para sempre",
      description: "Para desenvolvedores individuais e projetos pessoais",
      features: [
        "1.000 requisições/mês",
        "Acesso a todas as APIs",
        "Rate limit padrão",
        "Suporte pela comunidade",
        "SSL incluso"
      ],
      buttonText: "Começar Grátis",
      buttonStyle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
      popular: false
    },
    {
      name: "Pro",
      price: "R$ 149",
      period: "por mês",
      description: "Para startups e equipes em crescimento",
      features: [
        "100.000 requisições/mês",
        "Priority queue",
        "Rate limit aumentado",
        "Suporte prioritário",
        "Webhooks e callbacks",
        "Analytics detalhado",
        "99.9% SLA garantido"
      ],
      buttonText: "Começar teste grátis",
      buttonStyle: "bg-neutral-900 text-white hover:bg-neutral-800",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Soluções personalizadas para grandes empresas",
      features: [
        "Requisições ilimitadas",
        "Infraestrutura dedicada",
        "Custom models training",
        "Gerente de conta dedicado",
        "99.99% SLA garantido",
        "Suporte 24/7 dedicado",
        "Compliance e segurança"
      ],
      buttonText: "Falar com vendas",
      buttonStyle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-neutral-900 mb-4">
            Preços transparentes
          </h2>
          <p className="text-xl text-neutral-600">
            Pague apenas pelo que usar. Sem surpresas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl p-8 ${
                plan.popular
                  ? 'border-2 border-neutral-900 shadow-xl'
                  : 'border border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-neutral-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-3xl font-medium text-neutral-900">{plan.price}</span>
                  {plan.period && <span className="text-neutral-600 ml-2">/{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all ${plan.buttonStyle}`}>
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
