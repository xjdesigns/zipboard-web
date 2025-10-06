import { useState, useEffect } from 'react'
import { SlAnimation } from './components/shoelace'
import Header from './components/header'
import Core from './components/core'
import { Footer } from './components/footer'
import { toggleTheme } from './util/theme'
import { filterHistoryByType } from './util/item'
import logo from './assets/icon.png'
import { getData, saveData } from './util/storage'

function App() {
  const [data, setData] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [appHasLoaded, setAppHasLoaded] = useState(false)

  useEffect(() => {
    if (!appHasLoaded) {
      setAppHasLoaded(true)
      const data = getData()

      // Fake a loading time to show loader
      setTimeout(() => {
        setData(data)

        if (!mounted) {
          setMounted(true)
        }
      }, 1500)
    }
  }, [appHasLoaded, mounted])

  useEffect(() => {
    if (mounted) {
      const theme = data.ui.theme
      toggleTheme(theme)
    }
  }, [mounted])

  const handleSaveUI = (val, key) => {
    console.log("saving UI")
    if (key === 'historyLength') {
      if (data.history.length > val) {
        const updatedHistory = data.history.filter((_, idx) => {
          return idx < val
        })

        setData((prev) => {
          const updated = {
            ...prev,
            ui: {
              ...prev.ui,
              [key]: val
            },
            history: updatedHistory
          }
          saveData(newData)
          return updated
        })
        return
      }
    }

    const newData = { ...data }
    newData.ui[key] = val
    saveData(newData)
    setData(newData)
  }

  const handleSaveList = (updatedList) => {
    const newData = { ...data, history: updatedList }
    saveData(newData)
    setData(newData)
  }

  const handleClearHistory = (canDeleteFavorite = false) => {
    let history = []
    if (!canDeleteFavorite) {
      history = data.history.filter((d) => d.isFavorite)
    }
    const newData = { ...data, history }
    saveData(newData)
    setData(newData)
  }

  const handleClearHistoryType = (type, canDeleteFavorite = false) => {
    const history = filterHistoryByType(data.history, type, canDeleteFavorite)
    const newData = { ...data, history }
    saveData(newData)
    setData(newData)
  }

  return (
    <div className={`zp-app ${!data ? 'is-loading' : ''}`}>
      {!data && (
        <div className="zp-app-loader">
          <SlAnimation name="bounce" duration={2000} play>
            <img src={logo} alt="Zipboard Logo" className="zp-header-logo" />
          </SlAnimation>
        </div>
      )}

      {data && (
        <>
          <Header
            data={data}
            handleSaveUI={handleSaveUI}
            clearHistory={handleClearHistory}
            clearHistoryType={handleClearHistoryType}
          />
          <Core data={data} saveData={handleSaveList} />
          <Footer data={data} />
        </>
      )}
    </div>
  )
}

export default App
