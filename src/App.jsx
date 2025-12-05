import "./App.css";
import CategoryList from "./components/CategoryList";
import BookGrid from "./components/BookGrid";

function App() {
  return (
    <div className="app">
      <header className="header">
  <h1 className="logo">걷다가 서재</h1>

  <div className="profile-area">
    <div className="profile-icon"></div>
    <span className="profile-name">에이블러 님</span>
  </div>
</header>


      <div className="layout">
        <aside className="sidebar">
          <h2 className="sidebar-title">카테고리</h2>
          <CategoryList />
        </aside>

        <main className="content">
          <BookGrid />
        </main>
      </div>
    </div>
  );
}

export default App;

