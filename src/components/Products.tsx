type ProductStatus = 'Disponível' | 'Beta' | 'Em breve'

type Product = {
  name: string
  description: string
  features: string[]
  icon: string
  status: ProductStatus
  apiEndpoint: string
}

const Products = (): JSX.Element => {
  const products: Product[] = [
    {
      name: "GodCod AI Assistant",
      description: "Assistente de IA para desenvolvimento, geração de código e documentação técnica.",
      features: [
        "Geração de código em 50+ linguagens",
        "Análise e otimização de código",
        "Documentação automática",
        "Suporte a frameworks modernos"
      ],
      icon: "🤖",
      status: "Disponível",
      apiEndpoint: "/api/v1/assistant"
    },
    {
      name: "GodCod Vision",
      description: "API de processamento e geração de imagens com IA generativa de última geração.",
      features: [
        "Geração de imagens HD/4K",
        "Edição inteligente de fotos",
        "Remoção de fundo automática",
        "Upscaling com IA"
      ],
      icon: "🎨",
      status: "Disponível",
      apiEndpoint: "/api/v1/vision"
    },
    {
      name: "GodCod Analytics",
      description: "Processamento e análise de dados em tempo real com machine learning.",
      features: [
        "Análise preditiva",
        "Detecção de anomalias",
        "Visualização de dados",
        "Relatórios automatizados"
      ],
      icon: "📊",
      status: "Disponível",
      apiEndpoint: "/api/v1/analytics"
    },
    {
      name: "GodCod Voice",
      description: "Síntese e reconhecimento de voz com suporte multilíngue avançado.",
      features: [
        "Text-to-Speech natural",
        "Speech-to-Text preciso",
        "Clonagem de voz",
        "Tradução em tempo real"
      ],
      icon: "🎙️",
      status: "Em breve",
      apiEndpoint: "/api/v1/voice"
    },
    {
      name: "GodCod Storage",
      description: "Armazenamento em nuvem otimizado para desenvolvedores e aplicações.",
      features: [
        "CDN global integrado",
        "Backup automático",
        "Criptografia end-to-end",
        "API RESTful simples"
      ],
      icon: "☁️",
      status: "Disponível",
      apiEndpoint: "/api/v1/storage"
    },
    {
      name: "GodCod Database",
      description: "Banco de dados serverless escalável com sincronização em tempo real.",
      features: [
        "NoSQL e SQL suportados",
        "Sincronização real-time",
        "Backup contínuo",
        "Edge computing"
      ],
      icon: "🗄️",
      status: "Beta",
      apiEndpoint: "/api/v1/database"
    }
  ]

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-neutral-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            APIs e serviços poderosos para acelerar seu desenvolvimento e escalar suas aplicações
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-neutral-300"
            >
              {/* Product Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{product.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  product.status === 'Disponível' 
                    ? 'bg-green-100 text-green-700'
                    : product.status === 'Beta'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {product.status}
                </span>
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-medium text-neutral-900 mb-3">
                {product.name}
              </h3>
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* API Endpoint */}
              <div className="pt-6 border-t border-neutral-100">
                <code className="text-xs text-neutral-500 font-mono bg-neutral-50 px-2 py-1 rounded">
                  {product.apiEndpoint}
                </code>
              </div>

              {/* Hover Action */}
              <button className="mt-6 w-full opacity-0 group-hover:opacity-100 bg-neutral-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all">
                Ver Documentação →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-neutral-600 mb-6">
            Precisa de algo específico? Desenvolvemos soluções customizadas.
          </p>
          <button className="bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
            Fale com nossa equipe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
