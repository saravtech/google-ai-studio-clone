import TopNav from "../components/topnav";

const Home = () => {
  return (
    <div>
      <TopNav />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Welcome to Google AI Studio Clone</h2>
        <p className="mt-2 text-gray-600">This is your homepage UI.</p>
      </main>
    </div>
  );
};

export default Home;