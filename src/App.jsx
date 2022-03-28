//#region Import external modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
//#endregion
//#region Import components
import { Navbar } from './components/molecules';
import { Dashboard, Auth, Show, Coureur, Parametres, Home } from './pages';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//#endregion
toast.configure();

const App = () => {
  const user = useSelector((state) => state.user);
  console.log(toast);
  return (
    <div className='bg-component-one-500 text-low-contrast-500 overflow-hidden w-full pt-navbar min-h-screen'>
      {user.isLogged ? (
        // Place tes pages pour quand tu es connecté ici
        <>
          <Navbar />
          <Routes>
            <Route path='/show' element={<Show />}></Route>
            <Route
              path='/dashboard'
              element={<Dashboard toast={toast} />}
            ></Route>
            <Route path='/coureur' element={<Coureur toast={toast} />}></Route>

            <Route path='/parametres' element={<Parametres />}></Route>
            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<Dashboard toast={toast} />}></Route>
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth toast={toast} />}></Route>
          <Route path='/show' element={<Show />}></Route>
          <Route path='/*' element={<Auth toast={toast} />}></Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
