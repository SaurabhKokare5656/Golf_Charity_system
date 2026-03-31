import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔥 Auth Context
import { AuthProvider } from "./context/AuthContext";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Subscription from "./pages/Subscription";
import Winner_Verification from "./pages/Winner_Verification";
import Draw_System from "./pages/Draw_System";
import Prize_Pool from "./pages/Prize_Pool";
import Charity from "./pages/Charity";
import Signup from "./pages/Signup";

// Admin Pages
import HomeAdmin from "./pagesAdmin/HomeAdmin";

import Draw from "./pagesAdmin/Draw";
import Users from "./pagesAdmin/Users";
import Reports from "./pagesAdmin/Reports";



// Layouts
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import CharityAdmin from "./pagesAdmin/CharityAdmin";
import WinnersAdmin from "./pagesAdmin/WinnersAdmin";


function App() {
  return (
    <AuthProvider> {/* 🔥 IMPORTANT WRAP */}
      <Router>

        <Routes>

          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* USER ROUTES */}
          <Route element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/prize_pool" element={<Prize_Pool />} />
            <Route path="/score" element={<Score />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/Draw_System" element={<Draw_System />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Winner_Verification" element={<Winner_Verification />} />
          </Route>

          {/* ADMIN ROUTES */}
          <Route element={<AdminLayout />}>
           <Route path="/HomeAdmin" element={<HomeAdmin />} />
           <Route path="/Users" element={<Users />} />
           <Route path="/Draw" element={<Draw />} />
           <Route path="/CharityAdmin" element={<CharityAdmin />} />
           <Route path="/WinnersAdmin" element={<WinnersAdmin />} />
           <Route path="/Reports" element={<Reports />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<h2 className="text-center mt-5">Page Not Found ❌</h2>} />

        </Routes>

      </Router>
    </AuthProvider>
  );
}

export default App;