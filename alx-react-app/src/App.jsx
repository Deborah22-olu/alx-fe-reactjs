import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // ✅ New import

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      {/* ✅ Render the UserProfile component with props */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Footer />
    </div>
  );
}

export default App;
