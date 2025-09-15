type SecurityFeature = {
  title: string
  description: string
  bulletColor: string
  dotColor: string
}

const Security = (): JSX.Element => {
  const securityFeatures: SecurityFeature[] = [
    {
      title: "Autenticação de dois fatores",
      description: "Proteção adicional para sua conta com verificação em duas etapas.",
      bulletColor: "bg-primary-200",
      dotColor: "bg-primary-600"
    },
    {
      title: "Detecção de fraudes",
      description: "Sistema inteligente que monitora e previne atividades suspeitas.",
      bulletColor: "bg-red-100",
      dotColor: "bg-red-500"
    },
    {
      title: "Notificações em tempo real",
      description: "Receba alertas instantâneos sobre todas as transações importantes.",
      bulletColor: "bg-green-100",
      dotColor: "bg-green-500"
    },
    {
      title: "Backup automático",
      description: "Seus dados sempre seguros com backups automáticos diários.",
      bulletColor: "bg-purple-100",
      dotColor: "bg-purple-500"
    },
    {
      title: "Criptografia end-to-end",
      description: "Todos os dados são criptografados durante a transmissão e armazenamento.",
      bulletColor: "bg-yellow-100",
      dotColor: "bg-yellow-500"
    },
    {
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para ajudar com qualquer questão.",
      bulletColor: "bg-secondary-100",
      dotColor: "bg-secondary-600"
    }
  ]

  return (
    <section id="security" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            SEGURANÇA
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Protegemos seus dados em cada etapa do processo
          </h2>
          <p className="text-lg text-gray-600">
            A GodCod garante que seus dados e de seus clientes estejam sempre protegidos com 
            criptografia avançada, monitoramento em tempo real e autenticação multifator.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {/* Bullet */}
                <div className={`w-10 h-10 rounded-lg ${feature.bulletColor} flex items-center justify-center flex-shrink-0`}>
                  <div className={`w-3 h-3 rounded-full ${feature.dotColor}`}></div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">99.9%</div>
            <div className="mt-2 text-gray-600">Uptime garantido</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">256-bit</div>
            <div className="mt-2 text-gray-600">Criptografia SSL</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">ISO 27001</div>
            <div className="mt-2 text-gray-600">Certificado</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">24/7</div>
            <div className="mt-2 text-gray-600">Monitoramento</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security
