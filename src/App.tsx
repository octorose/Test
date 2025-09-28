import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "@/components";
import ModificationRequestsPage from "@/pages/ModificationRequestsPage";

export default function App(){
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Routes>
          <Route path="/" element={
            <main className="min-h-screen bg-slate-50 p-4 md:p-8">
              <div className="mx-auto max-w-6xl">
                <Card type="info" />
              </div>
            </main>
          } />
          <Route path="/modification-requests" element={<ModificationRequestsPage />} />
        </Routes>
      </div>
    </Router>
  );
}