import AppBarContainer from '../../containers/AppBarContainer';
import Snackbar from '../../Utils/Snackbar';

const Layout = ({children, }) => {
  return (
    <>
      <AppBarContainer />
      {children}
      <Snackbar />
    </>
  )
}

export default Layout;
