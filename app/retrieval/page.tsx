import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      Weitern Sie Ihren Chatbot mit Ihrer eigenen Wissensdatenbank.

      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
          Stellen Sie Dana fragen zu Ihrer eigenen Wissensdatenbank.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Ich habe eine Nase dafür, die richtigen Dokumente zu finden! Fragen Sie: "Was ist ein Dokumentenlader?"'
      }
      emoji="🐶"
      titleText="Dana der Dokumentenabrufhund"
    ></ChatWindow>
  );
}
