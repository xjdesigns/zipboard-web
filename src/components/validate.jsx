/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  SlButtonGroup,
  SlButton,
  SlCopyButton,
  SlTextarea
} from './shoelace'
import { validate } from '../util/data'

export const Validate = ({ data }) => {
  const [dataToValidate, setDataToValidate] = useState('')
  const handleValidation = () => {
    const data = validate(dataToValidate)
    console.log('data', data)
  }

  const handleSetCurrentData = () => {
    const stringified = JSON.stringify(data, null, '  ')
    setDataToValidate(stringified)
  }

  return (
    <div>
      <div className="zp-mg-bt">
        You are entering the <strong className="zp-text-danger">DANGER ZONE.</strong>
      </div>
      <div className="zp-data-display">
        <SlCopyButton value={dataToValidate} copy-label="Copy saved data" />
        <div className="zp-data-text-area">
          <SlTextarea
            size="small"
            placeholder="Paste your saved history data to use..."
            onSlInput={(ev) => setDataToValidate(ev.target.value)}
            rows={12}
            resize="none"
            value={dataToValidate}
          />
        </div>
        <SlButtonGroup>
          <SlButton
            onClick={handleSetCurrentData}
            size="small"
          >
            Use current data
          </SlButton>
          <SlButton
            onClick={handleValidation}
            disabled={dataToValidate.length === 0}
            size="small"
          >
            Validate and Save (BETA)
          </SlButton>
        </SlButtonGroup>
      </div>
    </div>
  )
}