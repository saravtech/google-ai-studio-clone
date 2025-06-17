import Sidebar from "../components/sidebar";
import TopNav from "../components/topnav";

const Dashboard = () => {
    const dummyProjects = [
        { name: "Chatbot Generator", desc: "An AI-powered tool to create chatbots." },
        { name: "Image Classifier", desc: "Trained to detect objects in images." },
        { name: "Text Summarizer", desc: "Summarizes large documents instantly." },
        { name: "Voice Assistant", desc: "Create voice-controlled tools." },
        { name: "Document QA", desc: "Ask questions from uploaded documents." },
        { name: "AI Form Builder", desc: "Drag and drop AI fields into forms." },
      ];
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyProjects.map((project, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600">
                  {project.desc}
                </p>
              </div>
            ))}
          </main>
        </div>
      </div>
    );
  };
  

export default Dashboard;