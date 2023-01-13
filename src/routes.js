
import {
  Routes,
  Route,

}
  from 'react-router-dom';
import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import { Maintenance } from './scenes/maintenence';
import { Company } from './scenes/company';

import { AuthProvider } from './context/auth';

export const AppRouter = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team title="Time" subtitle="Manutenção em nosso time" />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </AuthProvider>
      </main>
    </div>


  )
}