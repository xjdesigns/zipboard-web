/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  SlButton,
  SlButtonGroup,
  SlSelect,
  SlOption,
  SlCheckbox,
  SlInput,
  SlDialog
} from './shoelace'
import { getItemType } from '../util/item'

export const EditDialog = ({
  isOpen,
  list,
  editData,
  currentIndex,
  positionMove,
  closeEdit,
  handleSave
}) => {
  const [editedData, setEditedData] = useState(editData ?? {})
  const [allowMove, setAllowMove] = useState(false)
  const [newPosition, setNewPosition] = useState(currentIndex ?? 0)
  const positionList = Array.from({ length: positionMove ?? 0 })

  const handleAllowMove = (ev) => {
    setAllowMove(ev.target.checked)
  }

  const handleNewPosition = (ev) => {
    const val = ev.target.value
    setNewPosition(parseInt(val, 10))
  }

  const handleFieldEdit = (value, field) => {
    setEditedData((prevState) => {
      return {
        ...prevState,
        [field]: value
      }
    })
  }

  const handleUpdate = (ev) => {
    if (ev.target.localName === 'sl-select' || ev.target.localName === 'sl-copy-button') {
      return
    }

    if (allowMove && currentIndex !== newPosition) {
      list.splice(currentIndex, 1)
      list.splice(newPosition, 0, editedData)
      handleSave(list)
    } else {
      const newList = list.map((l, idx) => {
        if (idx === currentIndex) {
          const type = getItemType(editedData.text)
          return {
            ...editedData,
            type,
          }
        }
        return l
      })
      handleSave(newList)
    }

    closeEdit?.()
  }

  const handleMoveToTop = () => {
    const item = list.splice(currentIndex, 1)[0]
    list.splice(0, 0, item)
    handleSave(list)
    closeEdit?.()
  }

  const handleClose = (ev) => {
    if (ev.target.localName === 'sl-select' || ev.target.localName === 'sl-copy-button') {
      return
    }
    setEditedData({})
    setAllowMove(false)
    closeEdit?.()
  }

  return (
    <SlDialog label="Edit" open={isOpen} onSlAfterHide={handleClose}>
      <div className="zp-mg-bt">
        <SlInput
          label="Saved Data"
          value={editedData?.text ?? ''}
          onSlInput={(ev) => handleFieldEdit(ev.target.value, 'text')}
          size="small"
        />
      </div>
      <div className="zp-mg-bt">
        <SlInput
          label="Add tooltip"
          value={editedData?.tooltip ?? ''}
          onSlInput={(ev) => handleFieldEdit(ev.target.value, 'tooltip')}
          size="small"
        />
      </div>
      <div className="zp-mg-bt">
        <SlCheckbox checked={allowMove} onSlChange={handleAllowMove}>
          Move to
        </SlCheckbox>
      </div>
      <div className="zp-mg-bt">
        <div className="zp-flex">
          <div className="zp-flex-fill">
            <SlSelect
              size="small"
              help-text={`Current position is ${currentIndex + 1}`}
              onSlChange={handleNewPosition}
              disabled={!allowMove}
            >
              {positionMove !== null &&
                positionList.map((_, idx) => {
                  return (
                    <SlOption key={idx} value={idx} disabled={idx === currentIndex}>
                      Position - {idx}
                    </SlOption>
                  )
                })}
            </SlSelect>
          </div>
          <SlButton size="small" onClick={handleMoveToTop}>
            Move to top
          </SlButton>
        </div>
      </div>

      <SlButtonGroup slot="footer">
        <SlButton variant="default" size="small" onClick={handleClose}>
          Close
        </SlButton>
        <SlButton variant="primary" size="small" onClick={handleUpdate}>
          Update
        </SlButton>
      </SlButtonGroup>
    </SlDialog>
  )
}
