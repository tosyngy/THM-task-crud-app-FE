import React, { Suspense, useState } from 'react'
import Tasks from './components/Tasks'
import { MyContext } from "./MyContext";
import { CookiesProvider, useCookies } from 'react-cookie';
import Login from './components/auth/login';
import Register from './components/auth/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [cookies, setCookie] = useCookies(['token']);
  const [token, setToken] = useState<string>(cookies.token);

  const updateContexts = (newTasks: ITask[]) => {
    setTasks(newTasks);
  };

  const updateTokenContexts = (newToken: string) => {
    setCookie('token', newToken);
    setToken(newToken)
  };



  return (
    <main className='App'>
      <h1><img src="/banner.png" alt="TryHackMe Test" className='banner' /></h1>
      <MyContext.Provider value={{ tasks, updateContexts, token,  updateTokenContexts}}>
        <CookiesProvider>
          <Suspense fallback={"Loading ..."}>
            {token ?
              <Tasks />
              : <Router>
                <Routes>
                <Route path='/' element={
                    <Login setToken={updateTokenContexts} />}></Route>
                  <Route path='/auth/login' element={
                    <Login setToken={updateTokenContexts} />}></Route>
                  <Route path='/auth/register' element={<Register />}></Route>
                </Routes>
              </Router>
            }
          </Suspense>
        </CookiesProvider>

      </MyContext.Provider>
    </main>
  )
}

export default App