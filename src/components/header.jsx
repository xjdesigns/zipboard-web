/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {
  SlButtonGroup,
  SlButton,
  SlIcon,
  SlDialog,
  SlSwitch,
  SlInput,
  SlSelect,
  SlOption,
  SlAnimation,
  SlCheckbox
} from './shoelace'
import { Validate } from './validate'
import { toggleTheme } from '../util/theme'
import { TYPE_OPTIONS } from '../util/item'
import logo from '../assets/icon.png'

const Header = ({ data, handleSaveUI, clearHistory, clearHistoryType }) => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [showClear, setShowClear] = useState(false)
  const [showData, setShowData] = useState(false)
  const [allowFavDelete, setAllowFavDelete] = useState(false)
  const [historyLength, setHistoryLength] = useState(data.ui.historyLength)
  const [isLineClamped, setLineClamped] = useState(data.ui.lineClamp)
  const [showDates, setShowDates] = useState(data.ui.showDates)
  const [showTypes, setShowTypes] = useState(data.ui.showTypes)
  const [stackActions, setStackActions] = useState(data.ui.stackActions)
  const [smallView, setSmallView] = useState(data.ui.smallView ?? false)
  const [viewAlign, setViewAlign] = useState(data.ui.viewAlign ?? 'left')
  const [hasColumns, setHasColumns] = useState(data.ui.hasColumns ?? false)
  const searchRule = data.ui.searchRule

  useEffect(() => {
    const body = document.querySelector('body')
    const fn = (ev) => {
      // TODO: bug on mobile where shift is automatic for caps
      if (ev.key === 'E') {
        setSettingsOpen(true)
      }
    }

    body.addEventListener('keypress', fn)

    return () => body.removeEventListener('keypress', fn)
  }, [])

  const handleClearHistory = () => {
    clearHistory(allowFavDelete)
  }

  const handleClearHistoryType = (type) => {
    clearHistoryType(type, allowFavDelete)
  }

  // There is a bug with the value not being proper here from value
  // On add value check and set to be safe
  const handleHistoryLength = (ev) => {
    const val = ev.target.value
    const intVal = parseInt(val, 10)
    if (!intVal) {
      setHistoryLength(10)
      return
    }
    if (intVal > 300) {
      setHistoryLength(300)
      return
    }

    setHistoryLength(intVal)
  }

  const handleAddValues = () => {
    let valueToSave = historyLength
    if (!historyLength) {
      valueToSave = 10
      setHistoryLength(10)
      return
    }
    if (valueToSave > 300) {
      valueToSave = 300
      setHistoryLength(300)
      return
    }
    handleSaveUI(valueToSave, 'historyLength')
  }

  const handleLineClamp = (ev) => {
    const checked = ev.target.checked
    setLineClamped(checked)
    handleSaveUI(checked, 'lineClamp')
  }

  const handleShowDates = (ev) => {
    const checked = ev.target.checked
    setShowDates(checked)
    handleSaveUI(checked, 'showDates')
  }

  const handleShowTypes = (ev) => {
    const checked = ev.target.checked
    setShowTypes(checked)
    handleSaveUI(checked, 'showTypes')
  }

  const handleStackActions = (ev) => {
    const checked = ev.target.checked
    setStackActions(checked)
    handleSaveUI(checked, 'stackActions')
  }

  const handleSearchRule = (ev) => {
    const rule = ev.target.value
    handleSaveUI(rule, 'searchRule')
  }

  const handleTheme = (ev) => {
    const theme = ev.target.value
    toggleTheme(theme)
    handleSaveUI(theme, 'theme')
  }

  const handleModalClose = (ev) => {
    if (ev.target.localName === 'sl-select' || ev.target.localName === 'sl-copy-button') {
      return
    }
    setShowData(false)
    setShowClear(false)
    setSettingsOpen(false)
  }

  const scrollToTop = () => {
    const el = document.querySelector('#zpCore')
    el.scrollTop = 0
  }

  const handleToggleRemoveFavorites = (ev) => {
    const checked = ev.target.checked
    setAllowFavDelete(checked)
  }

  const handleSmallView = (ev) => {
    const isSmall = ev.target.checked
    setSmallView(isSmall)
    handleSaveUI(isSmall, 'smallView')
  }

  const handleViewAlign = (ev) => {
    const align = ev.target.value
    setViewAlign(align)
    handleSaveUI(align, 'viewAlign')
  }

  const handleColumns = (ev) => {
    const columns = ev.target.checked
    setHasColumns(columns)
    handleSaveUI(columns, 'hasColumns')
  }

  return (
    <>
      <header className="zp-header">
        <img src={logo} alt="Zipboard Logo" className="zp-header-logo" />
        <div className="zp-h-title">Zipboard</div>

        <div className="zp-h-actions">
          <SlButton onClick={scrollToTop} size="small" circle>
            <SlIcon name="arrow-bar-up" />
          </SlButton>
          <SlButton onClick={() => setSettingsOpen(true)} size="small" circle>
            <SlIcon name="gear-wide-connected" />
          </SlButton>
        </div>
      </header>

      <SlDialog label="App Settings" open={settingsOpen} onSlAfterHide={handleModalClose}>
        {!showClear && !showData && (
          <div>
            <div>
              <div className="zp-theme-select">
                <SlSelect label="Theme" size="small" value={data.ui.theme} onSlChange={handleTheme}>
                  <SlOption value="dark">
                    <SlIcon name="moon" slot="suffix" />
                    Dark
                  </SlOption>
                  <SlOption value="light">
                    <SlIcon name="brightness-high" slot="suffix" />
                    Light
                  </SlOption>
                </SlSelect>
              </div>
              <div className="zp-divider" />
              <div className="zp-mg-bt">
                <SlSelect
                  label="Search Rule"
                  size="small"
                  value={searchRule}
                  onSlChange={handleSearchRule}
                >
                  <SlOption value="strict">Strict</SlOption>
                  <SlOption value="loose">Loose</SlOption>
                </SlSelect>
              </div>
              <div className="zp-flex zp-flex--end">
                <div className="zp-flex-fill">
                  <SlInput
                    label="History"
                    type="number"
                    size="small"
                    min="10"
                    max="300"
                    value={historyLength}
                    onSlInput={handleHistoryLength}
                  />
                </div>
                <SlButton size="small" onClick={handleAddValues}>
                  Update
                </SlButton>
              </div>
              <div className="zp-text-small zp-text-small--dim">
                If your history exceeds the length it will be trimmed and saved
              </div>
            </div>
            <div className="zp-divider" />
            <div className="zp-mg-bt">
              <SlSwitch checked={isLineClamped} onSlChange={handleLineClamp} size="small">
                Line Clamp
              </SlSwitch>
            </div>
            <div className="zp-mg-bt">
              <SlSwitch checked={showDates} onSlChange={handleShowDates} size="small">
                Show Dates
              </SlSwitch>
            </div>
            <div className="zp-mg-bt">
              <SlSwitch checked={showTypes} onSlChange={handleShowTypes} size="small">
                Show Types
              </SlSwitch>
            </div>
            <div>
              <SlSwitch checked={stackActions} onSlChange={handleStackActions} size="small">
                Stack Actions
              </SlSwitch>
            </div>
            <div className="zp-divider" />
            {/* NOTE: Small view simulates the window size as if Electon app starting size */}
            <div>
              (Web Only)
            </div>
            <div className="zp-input-flex">
              <div>
                <SlSwitch checked={smallView} onSlChange={handleSmallView} size="small">
                  Small View
                </SlSwitch>
              </div>
              <div>
                <SlSelect size="small" value={viewAlign} onSlChange={handleViewAlign}>
                  <SlOption value="left">
                    <SlIcon name="justify-left" slot="suffix" />
                    left
                  </SlOption>
                  <SlOption value="center">
                    <SlIcon name="justify" slot="suffix" />
                    middle
                  </SlOption>
                  <SlOption value="right">
                    <SlIcon name="justify-right" slot="suffix" />
                    right
                  </SlOption>
                </SlSelect>
              </div>
            </div>
            <div>
              <div>
                <SlSwitch
                  label="Columns"
                  checked={hasColumns}
                  onSlChange={handleColumns}
                  size="small"
                >
                  Columns (experimental)
                </SlSwitch>
                <div className="zp-text-small zp-text-small--dim">
                  Works above 760px width, item might wrap weird, horizontal overflow scroll. It might also has strange behavior with other UI options.
                </div>
              </div>
            </div>
            <div className="zp-divider" />
            <div className="zp-mg-bt">
              <SlButton
                size="small"
                variant="warning"
                outline
                onClick={() => setShowClear(true)}
                disabled={data.history.length === 0}
              >
                Manage History
              </SlButton>
            </div>
            <div>
              <SlButton size="small" variant="danger" outline onClick={() => setShowData(true)}>
                View Data
              </SlButton>
            </div>
          </div>
        )}

        {showClear && (
          <div>
            <div className="zp-logo-history">
              <SlAnimation name="bounce" duration={2000} play>
                <img src={logo} alt="Zipboard Logo" />
              </SlAnimation>
            </div>
            <div className="zp-mg-bt">
              This will remove all or some of your history, are you sure?
            </div>
            <div className="zp-mg-bt">
              <SlCheckbox checked={allowFavDelete} onSlChange={handleToggleRemoveFavorites}>
                Remove Favorites on Clear
              </SlCheckbox>
            </div>
            <div className="zp-btn-full zp-mg-bt">
              <SlButton
                size="small"
                variant="warning"
                outline
                onClick={handleClearHistory}
                disabled={data.history.length === 0}
              >
                Clear ALL History
              </SlButton>
            </div>
            {TYPE_OPTIONS.map((type) => {
              return (
                <div className="zp-btn-full zp-mg-bt" key={type}>
                  <SlButton
                    size="small"
                    variant="neutral"
                    outline
                    onClick={() => handleClearHistoryType(type)}
                    disabled={data.history.length === 0}
                  >
                    Clear {type}
                  </SlButton>
                </div>
              )
            })}
          </div>
        )}

        {showData && <Validate data={data} />}

        <SlButtonGroup slot="footer">
          {(showClear || showData) && (
            <SlButton
              size="small"
              variant="default"
              onClick={() => {
                setShowClear(false)
                setShowData(false)
              }}
            >
              Back
            </SlButton>
          )}
          <SlButton size="small" variant="primary" onClick={() => setSettingsOpen(false)}>
            Close
          </SlButton>
        </SlButtonGroup>
      </SlDialog>
    </>
  )
}

export default Header
