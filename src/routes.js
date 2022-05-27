import { Routes, Route, } from 'react-router-dom';

import { Provider, } from 'react-redux';

import store from './store';

import App from './App';
import Layout from './components/Layout';
import Home from './components/Home';

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Layout>
    </Provider>
  )
}

export default AppRoutes;
