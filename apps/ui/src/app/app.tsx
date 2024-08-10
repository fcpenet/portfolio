import {Link, Route, Routes} from 'react-router-dom';

export function App() {
  return (
    <div>
      <div>
        <br/>
        <hr/>
        <br/>
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
        </Routes>
        {/* END: routes */}
      </div>
      <div>Kiko Penetrante</div>
    </div>
  );
}

export default App;
