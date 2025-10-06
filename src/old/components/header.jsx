import { SlAvatar } from './shoelace'

export const Header = () => {
  return (
    <header className="fn-header">
      <div className="fn-header-title">
        ADMIN
      </div>
      <div className="fn-header-actions">
        <div className="fn-header-user">
          <SlAvatar initials="JJ" />
        </div>
      </div>
    </header>
  )
}