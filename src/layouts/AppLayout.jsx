import TopNav from "../components/topnav";
import Sidebar from "../components/sidebar";
import RightPanel from "../components/RightPanel";

const AppLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 px-2 py-4 md:px-6 md:py-6 md:pr-10">{children}</main>
        <RightPanel />
      </div>
    </>
  );
};

export default AppLayout;
