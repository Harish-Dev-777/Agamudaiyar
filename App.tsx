import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Mappillai from "./pages/Mappillai";
import Penn from "./pages/Penn";
import ProfileDetail from "./pages/ProfileDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thodarbukku from "./pages/Thodarbukku";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import Members from "./pages/Members";
import EngalSevai from "./pages/EngalSevai";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddMember from "./pages/AdminAddMember";
import { initialMembers, Member } from "./data/members";

const App: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(() => {
    const saved = localStorage.getItem("members");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Force refresh if old sample data (Arun Kumar) is detected
      if (parsed.some((m: any) => m.name === "Arun Kumar")) {
        return initialMembers;
      }
      return parsed;
    }
    return initialMembers;
  });

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const addMember = (newMember: Member) => {
    setMembers((prev) => [newMember, ...prev]);
  };

  const handleContactRequest = (id: number) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              contactRequested: true,
              requestedAt: new Date().toLocaleString(),
            }
          : m,
      ),
    );
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-[#800000] selection:text-white bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/mappillai"
              element={<Mappillai members={members} />}
            />
            <Route path="/penn" element={<Penn members={members} />} />
            <Route
              path="/profile/:id"
              element={
                <ProfileDetail
                  members={members}
                  onContactRequest={handleContactRequest}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thodarbukku" element={<Thodarbukku />} />
            <Route path="/signup" element={<Signup onSignup={addMember} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/members" element={<Members members={members} />} />
            <Route path="/engal-sevai" element={<EngalSevai />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminDashboard members={members} setMembers={setMembers} />
              }
            />
            <Route
              path="/admin/add-member"
              element={<AdminAddMember onAdd={addMember} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
