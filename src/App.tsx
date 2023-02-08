import './App.css'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function App() {

  const { t, i18n } = useTranslation()

  // detect browser language for first render
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  return (
    <div>
      <div className='switch'>
        <button onClick={() => i18n.changeLanguage('pt')}>{t('language.portuguese')}</button>
        <button onClick={() => i18n.changeLanguage('en')}>{t('language.english')}</button>
      </div>

      <div className='card'>
        <h1>{t('card.title')}</h1>
        <p>{t('card.content')}</p>
        <button>{t('card.button')}</button>
        <small>{t('card.small')}</small>
      </div>
    </div>
  )
}