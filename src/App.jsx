import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './pages/Home.jsx'
import {NotFound} from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
