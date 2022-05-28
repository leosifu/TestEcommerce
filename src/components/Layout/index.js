import AppBarContainer from '../../containers/AppBarContainer';

const Layout = ({children, }) => {
  return (
    <>
      <AppBarContainer />
      {children}
    </>
  )
}

export default Layout;
