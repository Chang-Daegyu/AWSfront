// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import BookRegister from "./pages/BookRegister";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-register" element={<BookRegister />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/Home";
// import Layout from "./components/Layout";
// import BookRegister from "./pages/BookRegister";
// import LoginPage from './pages/login';
// import SignupPage from './pages/signup';


// function App() {
//     // ✅ 전역 로그인 상태 (관제탑)
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [userName, setUserName] = useState("");

//     return (
//         <BrowserRouter>
//             <Layout>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/book-register" element={<BookRegister />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/signup" element={<SignupPage />} />
//                 </Routes>
//             </Layout>
//         </BrowserRouter>
//     );
// }

// export default App;
