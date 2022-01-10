import SideBar from './SideBar.jsx'

const index = ({ children }) => {
  return (
    <div className="flex bg-primary-Lightest">
      <SideBar />
      {children}
    </div>
  )
}

export default index
