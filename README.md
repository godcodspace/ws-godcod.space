# GodCod Landing Page

🚀 Landing page moderna e minimalista para a GodCod - plataforma de micro serviços e APIs inteligentes.

## 🎯 Tech Stack

- **React 19.1.1** - Biblioteca UI
- **Vite 7.1.2** - Build tool e dev server
- **Tailwind CSS 4.1.13** - Estilização utility-first
- **Vercel** - Deploy e hospedagem

## 🛠️ Recursos

- ✨ Design minimalista off-white (estilo OpenAI)
- 📱 100% responsivo (mobile-first)
- ⚡ Performance otimizada
- 🎨 Sistema de design centralizado
- 🔄 Deploy automático via GitHub Actions
- 🔒 Headers de segurança configurados

## 🚀 Quick Start

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy na Vercel

### Opção 1: Deploy via Vercel CLI (Recomendado)

1. **Instale a Vercel CLI:**
```bash
npm i -g vercel
```

2. **Faça login na Vercel:**
```bash
vercel login
```

3. **Deploy o projeto:**
```bash
vercel
```

4. **Deploy para produção:**
```bash
vercel --prod
```

### Opção 2: Deploy Automático via GitHub

1. **Conecte o repositório no Vercel:**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Importe o repositório do GitHub
   - Configure as variáveis de ambiente (se necessário)

2. **Configure os secrets no GitHub:**
   - Vá em Settings > Secrets and variables > Actions
   - Adicione:
     - `VERCEL_TOKEN`: Token da Vercel (gere em vercel.com/account/tokens)
     - `VERCEL_ORG_ID`: ID da organização (encontre em .vercel/project.json após primeiro deploy)
     - `VERCEL_PROJECT_ID`: ID do projeto (encontre em .vercel/project.json)

3. **Deploy automático:**
   - Push para `main` = Deploy em produção
   - Pull Request = Deploy de preview

## 🌍 Configuração de Domínio

1. **No painel da Vercel:**
   - Vá em Project Settings > Domains
   - Adicione `godcod.space`

2. **Configure o DNS (na Hostinger):**
   ```
   Tipo: CNAME
   Nome: @
   Valor: cname.vercel-dns.com
   ```
   
   Ou para A records:
   ```
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   ```

## 🔧 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```env
# API Configuration
VITE_API_BASE_URL=https://api.godcod.space

# Stripe (futuro)
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Analytics (opcional)
VITE_GA_TRACKING_ID=G-...
```

## 📦 Estrutura do Projeto

```
ws-godcod.space/
├── src/
│   ├── components/       # Componentes React
│   ├── styles/          # Design tokens
│   ├── assets/          # Imagens e SVGs
│   └── App.jsx          # Componente principal
├── .github/workflows/   # GitHub Actions
├── vercel.json         # Configuração Vercel
└── package.json        # Dependências
```

## 📋 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build local
- `npm run lint` - Executar linter

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Proprietário - GodCod © 2024

## 💬 Suporte

Para suporte, envie um email para support@godcod.space

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
