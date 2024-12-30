import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 w-72 bg-gradient-to-b from-cyan-600  to-teal-600 text-white transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg`}
    >
      {/* Sidebar Header */}
      <div className="p-6 bg-teal-900">
        <h1 className="text-2xl font-bold tracking-wide">BrandLogo</h1>
        <p className="text-sm mt-1 text-gray-300">Your tagline goes here</p>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-6">
        <ul className="space-y-4">
          <SidebarItem label="Dashboard" icon="grid" link="#" />
          <SidebarItem label="Projects" icon="briefcase" link="#" />
          <SidebarItem label="Tasks" icon="check-circle" link="#" />
          <SidebarItem label="Messages" icon="message-circle" link="#" />
          <SidebarItem label="Settings" icon="settings" link="#" />
        </ul>
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-6 left-0 w-full px-6">
        <div className="flex items-center bg-cyan-700 rounded-lg p-4 hover:bg-blue-800 transition">
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
            src="https://via.placeholder.com/48"
            alt="User"
          />
          <div className="ml-4">
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-300">View Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ label, icon, link }) => (
  <li>
    <a
      href={link}
      className="flex items-center px-6 py-3 text-gray-200 hover:bg-blue-700 rounded-lg transition"
    >
      <i className={`feather feather-${icon} w-6 h-6 mr-4`}></i>
      <span className="text-lg">{label}</span>
    </a>
  </li>
);

export default Sidebar;
