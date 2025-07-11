import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin"

function AppRoutes() {
  
    return (
      <>
        <Nav />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Specials />
                <Footer />
              </>
              } />
              <Route path="/login" element={<AdminLogin />} />
          </Routes>
        </main>
      </>
  )
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}