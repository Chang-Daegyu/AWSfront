// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goBookRegister = () => navigate("/book-register");
  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");
  const goProfile = () => navigate("/profile");

  /*
    📌 TODO: 로그인 여부에 따라 버튼을 숨기고/보이게 할 예정

    나중에 백엔드를 연동하면 아래처럼 "로그인 여부"를 알 수 있게 될 거야:

    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    그리고 아래 JSX에서:

    {isLoggedIn && (
        <button onClick={goProfile}>프로필</button>
    )}

    지금은 백엔드가 없어서 로그인 상태를 알 수 없기 때문에
    프로필 버튼을 항상 보여주는 상태로 둔다.
  */

  return (
    <header className="header">
      <div className="header-left" onClick={goHome}>
        <h1 className="logo">걷다가 서재</h1>
      </div>

      <div className="header-right">
        <button className="header-btn" onClick={goBookRegister}>
          도서 등록
        </button>

        {/* 
          ⚠ 현재는 프로필 버튼이 항상 보임
          ⚠ 나중에 백엔드 로그인 연동 후 이 부분을 조건부로 변경할 예정

          TODO:
            로그인 상태일 때만 보이게 변경할 코드 예시:

            {isLoggedIn && (
              <button className="header-btn" onClick={goProfile}>
                프로필
              </button>
            )}
        */}

        <button className="header-btn" onClick={goProfile}>
          프로필
        </button>

        {/* 로그인하지 않은 사용자 전용 버튼 */}
        <button className="header-btn login-btn" onClick={goLogin}>
          로그인
        </button>
        <button className="header-btn signup-btn" onClick={goSignup}>
          회원가입
        </button>

        {/* 
          TODO:
            로그인한 사용자라면 아래처럼 로그아웃 버튼을 보여줄 예정

            {isLoggedIn && (
              <button className="header-btn" onClick={logout}>로그아웃</button>
            )}
        */}
      </div>
    </header>
  );
}

export default Header;
