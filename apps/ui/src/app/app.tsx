import styles from './app.module.scss';
import Footer from './components/footer/footer';
import MainRoutes from './components/routes/mainRoutes';
import { Col, Container, Row } from 'react-bootstrap';

export function App() {
  return (
    <div className={styles['window-body']}>
      <Container className={styles['main-body-row']}>
        <Row>
            <MainRoutes />
        </Row>
      </Container>
      <Footer />

    </div>
  );
}

export default App;
