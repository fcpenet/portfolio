import styles from './app.module.scss';
import Footer from './components/footer/footer';
import MainRoutes from './components/routes/mainRoutes';
import { Col, Container, Row } from 'react-bootstrap';

export function App() {
  return (
    <div className={styles['window-body']}>
      <Container>
        <Row className={'justify-content-center align-items-center'}>
          <Col className={styles['main-body-row']}>
            <MainRoutes />
          </Col>
        </Row>
      </Container>
      <Footer />

    </div>
  );
}

export default App;
