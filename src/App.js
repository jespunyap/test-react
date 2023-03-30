import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './pages/Layout';


/*
si volem tenir 2 layouts seria:
<React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2/:id/invoices/:invoiceid" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Route>
        // tot el que tingui /user tindrà un layout diferent
        <Route path="/user" element={<Layout2 />}>
          <Route path="user/page1" element={<Page1 />} />
          <Route path="user/page2/:id/invoices/:invoiceid" element={<Page2 />} />
          <Route path="user/page3" element={<Page3 />} />
        </Route>
      </Routes>
      </React.Suspense>


*/
function App() {
  const Page1=React.lazy(()=> import('./pages/Page1')) // Fent així en comptes d'import és més eficient
  const Page2=React.lazy(()=> import('./pages/Page2'))
  const Page3=React.lazy(()=> import('./pages/Page3'))
  const PageOther=React.lazy(()=> import('./pages/PageOther'))
  const PageWebComponent=React.lazy(()=> import('./pages/PageWebComponent'))
  return(
    <>
    <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2/:id/invoices/:invoiceid" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="other" element={<PageOther />} />
          <Route path="webcomponent" element={<PageWebComponent />} />
        </Route>
      </Routes>
      </React.Suspense>
    
      </>
  )
}

export default App;
