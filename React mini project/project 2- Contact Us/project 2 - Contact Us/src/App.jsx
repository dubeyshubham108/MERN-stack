

import './App.css'
import Navigation from './component/Navigation/Navigation.jsx'
import ContactHeader from './component/ContactHeader/ContactHeader.jsx'
import ContactForm from './component/ContactForm/ContactForm'

function App() {

  return (
    <>
    <Navigation/>
    <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
    </main>
    </>
  )
}

export default App
