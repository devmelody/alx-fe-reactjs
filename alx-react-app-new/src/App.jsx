import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Counter from './components/Counter.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'
function App() {

  return (
    <>
    <WelcomeMessage />
    <Header />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <MainContent />
    <Counter />
    <Footer />  
    </>
  )
}

export default App
