import './App.css'
import { useTranslation } from 'react-i18next';
import TranslationSwitcher from './components/TranslationSwitcher';

function App() {

  const { t, i18n } = useTranslation("home")
  i18n.loadNamespaces("home").then(() => {})

  return (
    <div className='bg-white dark:bg-gray-950 h-screen'>
      <header className='w-full bg-gradient-to-tr from-purple-500 to-pink-500 h-40 sm:h-40 md:h-64 lg:text-h72 xl:text-h80 flex flex-col justify-center items-center'>
        <h1 className='text-white text-4xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl'>Quentin Legot's Curriculum vitæ</h1>
      </header>
      <div id='content' className='flex flex-wrap flex-row break-words min-h-fit w-full'>
        <div id='sidebar' className='bg-gray-100 dark:bg-gray-800 basis-1/5 2xl:basis-1/6 min-h-fit'>
          <h2 className='text-black dark:text-white text-base sm:text-lg md:text-xl xl:text-2xl text-center mt-5'>{t('sidebar.title')}</h2>
          <div className='text-black dark:text-white p-5 text-sm sm:text-base md:text-lg xl:text-xl'>
            <p className='pb-3'>{t('sidebar.p1')}</p>
            <p>{t('sidebar.p2')}</p>
          </div>
        </div>
        <main className='basis-4/5 2xl:basis-5/6 text-black dark:text-white'>
          <TranslationSwitcher i18n={i18n} />
          text
        </main>
        <footer className='bg-gray-250 w-screen dark:bg-gray-900 text-black dark:text-white'>
          text
        </footer>
      </div>
    </div>
    
  )
}

export default App
