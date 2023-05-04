import { Routes, Route } from 'react-router-dom';
import { Context } from './Context';
import { Modal } from './Modal/Modal';
import { Home } from './Page/Home';
import NotFound from './Page/NotFound';

export const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Context>
  );
};
