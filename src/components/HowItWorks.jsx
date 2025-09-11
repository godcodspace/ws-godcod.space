const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Crie sua conta",
      description: "Cadastre-se gratuitamente em nossa plataforma e acesse todas as ferramentas essenciais para começar."
    },
    {
      number: "02",
      title: "Configure seu produto",
      description: "Use nossos templates e ferramentas para configurar seu micro SaaS rapidamente, sem precisar de código."
    },
    {
      number: "03",
      title: "Comece a vender",
      description: "Lance seu produto, aceite pagamentos via Stripe e acompanhe suas métricas em tempo real."
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              COMO FUNCIONA
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-gray-900">
              Lance seu micro SaaS em
              <br />
              apenas 3 passos simples
            </h2>
          </div>
          <button className="mt-8 lg:mt-0 bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            Começar Agora
          </button>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Steps Cards */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-gray-200">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-full ${index === 0 ? 'bg-primary-600' : index === 1 ? 'bg-secondary-600' : 'bg-accent-600'} flex items-center justify-center`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {index === 0 ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          ) : index === 1 ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-6 ml-20">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Video/Image Placeholder */}
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
            <div className="bg-white rounded-xl p-12 shadow-xl">
              <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-center mt-4 text-gray-600">Vídeo demonstrativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
