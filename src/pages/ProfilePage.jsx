// src/pages/ProfilePage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <div className="profile-page">
          {/* 상단 헤더 */}
          <header className="profile-header">
            <h1 className="profile-title">내 프로필</h1>
            <p className="profile-subtitle">
              나의 독서 정보와 계정 상태를 확인하세요.
            </p>
          </header>

          {/* 한 줄 세로 레이아웃 */}
          <section className="profile-column">
            {/* 1. 프로필 카드 */}
            <div className="profile-card">
              <div className="profile-avatar">
                <span>Y</span>
              </div>

              <div className="profile-info">
                <h2 className="profile-name">임주혁</h2>
                <p className="profile-email">example@email.com</p>
                <p className="profile-date">가입일: 2025-01-01</p>
              </div>
            </div>

            {/* 2. 독서 요약 카드 */}
            <div className="profile-detail-box">
              <h3 className="detail-title">독서 요약</h3>

              <div className="summary-grid">
                <div className="summary-item">
                  <span className="summary-value">12</span>
                  <span className="summary-label">읽은 책</span>
                </div>
                <div className="summary-item">
                  <span className="summary-value">5</span>
                  <span className="summary-label">찜한 책</span>
                </div>
                <div className="summary-item">
                  <span className="summary-value">3</span>
                  <span className="summary-label">리뷰</span>
                </div>
              </div>
            </div>

            {/* 3. 계정 관련 카드 (비밀번호 변경 + 계정 삭제) */}
            <div className="account-card">
              <button className="setting-btn">이메일 변경</button>
              <button className="setting-btn">닉네임 변경</button>
              <button className="setting-btn">비밀번호 변경</button>
              <button className="danger-btn">계정 삭제</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
