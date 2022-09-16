import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Notfound from './Pages/Notfound'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import Alert from './components/layouts/Alert'
import User from './Pages/User'




function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
    <div className="flex flex-col justify-between h-screen">
    <Navbar />
    <main className="container mx-auto px-3 pb-12">
    <Alert />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/user/:login' element={<User />}/>

    <Route path='/Notfound' element={<Notfound />}/>
    <Route path='/*' element={<Notfound />}/>


    </Routes>
      
    </main>

    <Footer />

    </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );

}

export default App;
