import React, { useRef } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';
import CoOperate from './pages/coOperate';
import CourseDetail from './pages/courseDetail';
import PaymentMethod from './pages/paymentMethod';
import FAQ from './pages/faq';
import Profile from './pages/profile';
import MyCourseList from './pages/profile/components/MyCourseList';
import ProjectDone from './pages/profile/components/ProjectDone';
import HistoryPayment from './pages/profile/components/HistoryPayment';
import CoinManagement from './pages/profile/components/CoinManagement';
import InforAccount from './pages/profile/components/InforAccount';
import Register from './pages/register';
import Team from './pages/team';
import Project from './pages/project';
import CoursePage from './pages/coursesPage';
import Email from './pages/email';
import ErrorPage from './pages/errorPage';
import IntroduceCoin from './pages/introduceCoin';
import ModalLogin from './components/ModalLogin';
import AuthProvider from './core/customHook/useAuth';
import PrivateRoute from './core/PrivateRoute';
import ModalRegister from './components/ModalRegister';

export const ContextModal = React.createContext({})

function App() {
  let refLogin = useRef()
  let refRegister = useRef()
  function openModalLogin() {
    refLogin.current.style.display = 'flex'
  }
  function closeModalLogin() {
    refLogin.current.style.display = 'none'
  }
  function openModalRegister() {
    refRegister.current.style.display = 'flex'
  }
  function closeModalRegister() {
    refRegister.current.style.display = 'none'
  }
  return (
    <AuthProvider>
      <ContextModal.Provider value={{ openModalLogin, closeModalLogin, openModalRegister, closeModalRegister  }}>
        <BrowserRouter>
          <Header />
          <Routes >
            <Route index element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path='/thong-tin-ca-nhan' element={<Profile />}>
                <Route path='/thong-tin-ca-nhan' element={<InforAccount />} />
                <Route path='khoa-hoc-cua-toi' element={<MyCourseList />} />
                <Route path='du-an-da-lam' element={<ProjectDone />} />
                <Route path='lich-su-thanh-toan' element={<HistoryPayment />} />
                <Route path='quan-li-coin' element={<CoinManagement />} />
              </Route>
            </Route>
            <Route path='/chi-tiet-khoa-hoc/:slug' element={<CourseDetail />} />
            <Route path='/dang-ky-khoa-hoc/:slug' element={<Register />} />
            <Route path='/team' element={<Team />} />
            <Route path='/du-an' element={<Project />} />
            <Route path='/danh-sach-khoa-hoc' element={<CoursePage />} />
            <Route path='/phuong-thuc-thanh-toan' element={<PaymentMethod />} />
            <Route path='/hop-tac' element={<CoOperate />} />
            <Route path='/email' element={<Email />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/gioi-thieu-coin' element={<IntroduceCoin />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
          <ModalLogin ref={refLogin} />
          <ModalRegister ref={refRegister} />
        </BrowserRouter>
      </ContextModal.Provider>
    </AuthProvider>
  );
}

export default App;
