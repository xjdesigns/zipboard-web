/* eslint-disable react/prop-types */
import { SlButton, SlButtonGroup, SlDialog } from './shoelace'
import logo from '../assets/icon.png'

export const DeleteDialog = ({ isOpen, itemToDelete, deleteItem, closeDelete }) => {
  const handleDelete = () => {
    deleteItem?.(itemToDelete)
    closeDelete?.()
  }

  const handleClose = () => {
    closeDelete?.()
  }

  return (
    <SlDialog label="Delete" open={isOpen} onSlAfterHide={handleClose}>
      <div className="zp-mg-bt">
        <div className="zp-delete-header-animated">
          <div className="zp-dtrash">
            <div className="zp-dtrash-lid" />
            <div className="zp-dtrash-img">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="zp-mg-bt">
        Are you sure you want to delete this item?
      </div>
      <SlButtonGroup slot="footer">
        <SlButton variant="default" size="small" onClick={handleClose}>
          Close
        </SlButton>
        <SlButton variant="primary" size="small" onClick={handleDelete}>
          Update
        </SlButton>
      </SlButtonGroup>
    </SlDialog>
  )
}
