// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");

  return (
    <header className="header">
      {/* 왼쪽 로고 */}
      <div
        className="logo-area"
        onClick={goHome}
        style={{ cursor: "pointer" }}
      >
        <h1 className="logo-text">걷다가 서재</h1>
      </div>

      {/* 오른쪽 버튼들 */}
      <div className="profile-area">
        <button className="header-btn login-btn" onClick={goLogin}>
          로그인
        </button>
        <button className="header-btn signup-btn" onClick={goSignup}>
          회원가입
        </button>
      </div>
    </header>
  );
}

export default Header;


// // src/components/Header.jsx
// import React from "react";
// import "./Header.css";             // src에서 쓰던 헤더 css 그대로 재사용한다고 가정
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();

//   const goHome = () => {
//     navigate("/");
//   };

//   const goLogin = () => {
//     navigate("/login");
//   };

//   const goSignup = () => {
//     navigate("/signup");
//   };

//   // src에서 도서 등록 버튼이 있었던 경우를 반영
//   const goBookRegister = () => {
//     // src에서 쓰던 도서 등록 라우트에 맞게 수정
//     // 예: navigate("/book-register");
//     navigate("/book-register");
//   };

//   return (
//     <header className="header">
//       {/* 왼쪽 로고/타이틀 영역 */}
//       <div
//         className="logo-area"
//         onClick={goHome}
//         style={{ cursor: "pointer" }}
//       >
//         <h1 className="logo-text">걷다가 서재</h1>
//       </div>

//       {/* 오른쪽 버튼 영역 */}
//       <div className="profile-area">
//         {/* src에서 도서 등록 버튼이 있었다면 살리고, 필요 없으면 이 버튼은 지워도 됨 */}
//         <button className="add-book-btn" onClick={goBookRegister}>
//           도서 등록
//         </button>

//         <button className="header-btn" onClick={goLogin}>
//           로그인
//         </button>
//         <button className="header-btn" onClick={goSignup}>
//           회원가입
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;


// // src/components/Header.jsx
// import "./Header.css";
// import { useNavigate } from "react-router-dom";

// function Header() {
//     const navigate = useNavigate();

//     const goHome = () => {
//         navigate("/");
//     };

//     const goLogin = () => {
//         navigate("/login");
//     };

//     const goSignup = () => {
//         navigate("/signup");
//     };

//     return (
//         <>
//             <header className="header">
//                 {/* 왼쪽 로고/타이틀 영역 */}
//                 <div className="logo-area" onClick={goHome} style={{ cursor: "pointer" }}>
//                     <h1 className="logo-text">걷다가 서재</h1>
//                 </div>

//                 {/* 오른쪽 로그인 / 회원가입 영역 */}
//                 <div className="profile-area">
//                     <button className="header-btn" onClick={goLogin}>
//                         로그인
//                     </button>
//                     <button className="header-btn" onClick={goSignup}>
//                         회원가입
//                     </button>
//                 </div>
//             </header>
//         </>
//     );
// }

// export default Header;
