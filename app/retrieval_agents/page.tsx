import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      Weitern Sie Ihren Chatbot mit Ihrer eigenen Wissensdatenbank und Google.
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🤝
          <span className="ml-2">
            Stellen Sie Robie fragen zu Ihrer eigenen Wissensdatenbank.

          </span>
        </li>
        <li className="hidden text-l md:block">
        💻
          <span className="ml-2">
            Robie durchsucht neben Ihrer Wissensdatenbank ebenfalls Google
          </span>
        </li>

      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Beep boop! Stellen Sie mir eine Frage und ich werde versuchen, Ihnen zu helfen! 🤖🔍📚'
      }
      emoji="🤖"
      titleText="Robbie the Retrieval Robot"
    ></ChatWindow>
  );
}
