import { Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from "react";
import { lazy } from "react";
import Layout from "./components/Layout";
import Profile from "./pages/profile/Profile";
const Email = lazy(() => import('./pages/auth/components/EmailVerification'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/auth/profile" element={<Profile />} />
        <Route path="/" element={<Layout />} >
          <Route path="/auth/email" element={<Suspense fallback={<div>Loading...</div>}><Email /></Suspense>} />
        </Route>
        {/* <Route path="/auth" element={<Auth />} /> */}
        {/* </Route> */}
        {/* <Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
