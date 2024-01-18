import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './pages/Home';

function App() {

  return (
    <div className='bg-white dark:bg-gray-950 min-h-screen'>
      <Header />
      <div id='content' className='flex flex-wrap flex-row break-words min-h-fit w-full'>
        <Sidebar />
        <MainContent content={<Home />}/>
        <Footer />
      </div>
    </div>
    
  )
}

export default App
