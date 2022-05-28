import { Routes, Route, } from 'react-router-dom';

import { Provider, } from 'react-redux';

import store from './store';

import Layout from './components/Layout';

import Home from './components/Home';
import CheckoutContainer from './containers/CheckoutContainer';
import ShowItem from './components/ShowItem';

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/checkout" element={<CheckoutContainer />}/>
          <Route path="/card" element={<ShowItem />}/>
        </Routes>
      </Layout>
    </Provider>
  )
}

export default AppRoutes;
