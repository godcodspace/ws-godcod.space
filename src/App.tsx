import Hero from './components/Hero'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = (): JSX.Element => (
  <div className="min-h-screen bg-neutral-50">
    <Hero />
    <Products />
    <Pricing />
    <Footer />
  </div>
)

export default App
