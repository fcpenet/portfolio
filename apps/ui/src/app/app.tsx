import FloatingNavigation from './components/floating-navigation/floating-navigation';
import Footer from './components/footer/footer';
import MainRoutes from './components/routes/mainRoutes';
import MainPage from './components/main-page/main-page';

export function App() {
  return (
    <div>
      <div>
        <br />
        <hr />
        <br />
        <FloatingNavigation />
        <MainRoutes/>
        <Footer />
      </div>

    </div>
  );
}

export default App;
