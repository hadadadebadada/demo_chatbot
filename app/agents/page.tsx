import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Chatbot trifft Google 🦜
      </h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            Stellen Sie Polly, unserem Chatbot, Fragen zu aktuellen Themen.
          </span>
        </li>
       
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="Stellen Sie Polly, unserem Chatbot, Fragen zu aktuellen Themen."
      titleText="Polly der Google Papaagei"
      emoji="🦜"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
