import PromptBox from "../components/PromptBox";
import WhatsNew from "../components/WhatsNew";
import AppLayout from "../layouts/AppLayout";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

const Chat = () => {
    const { setActiveSection } = useAppContext();

    useEffect(() => {
        setActiveSection("chat");
    }, []);
    return (
        <AppLayout>
            {/* Chat Prompt Header */}
            <div className="mb-2 text-sm font-semibold text-gray-800">Chat Prompt</div>
            <hr className="mb-8" />
            <div className="py-16">
                <PromptBox />
                <WhatsNew />
            </div>
        </AppLayout>
    );
};

export default Chat;
