import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import PortfoliosSection from './components/PortfoliosSection'
import SkillsSection from './components/SkillsSection'
import WorkExperiencesSection from './components/WorkExperiencesSection'
import './App.css'

const App = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <HeroSection />
    <main className="container mx-auto px-4 py-16">
      <WorkExperiencesSection />
      <SkillsSection />
      <PortfoliosSection />
    </main>
    <Footer />
  </div>
)

export default App
