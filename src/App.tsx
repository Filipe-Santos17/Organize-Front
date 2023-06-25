import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRouter from "./auth/protectedRouter"
import LoginUser from "./pages/LoginUser"
import CreateUser from "./pages/CreateUser"
import ForgetUser from "./pages/ForgetUser"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRouter/>} />
        <Route path="/login/*">
          <Route index element={<LoginUser />} />
          <Route path="create/" element={<CreateUser />} />
          <Route path="forget/" element={<ForgetUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
