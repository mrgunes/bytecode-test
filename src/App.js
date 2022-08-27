import { Spin } from 'antd';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import routes from './routes';
import './App.css';

const App = () => {
  return (
    <Suspense fallback={<Spin size='large' />}>
      <Routes>
        {
          routes.map(({ element: Component, ...route}, idx) => 
            <Route
                key={idx}
                path={route.path}
                exact={true}
                name={route.name}
                element={<DefaultLayout>
                  <Component />
                </DefaultLayout>}
              />
          )
        }
      </Routes>
  </Suspense>
  );
}

export default App;
