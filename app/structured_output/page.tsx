import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
       Strukturiere deine Ausgabe in eine beliebige Form 
      </h1>
      <ul>
        <li className="text-l">
          <span className="ml-2">
            Alle Formate sind möglich wir unterstützen JSON, XML, HTML, Text und mehr.
          </span>
        </li>

        <li className="text-l">
          
          <span className="ml-2">
          Sprich uns an, wir passen dein gewünschtes Format an.
          </span>
        </li>
        <li className="text-l">
          
          <span className="ml-2">
        Bald: eigene Datenformate definieren.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/structured_output"
      emptyStateComponent={InfoCard}
      placeholder={`Es spielt keine Rolle, was Sie hier eingeben, ich werde immer dieselbe Struktur zurückgeben!`}
      emoji="🧱"
      titleText="Strukturierte Ausgabe"
    ></ChatWindow>
  );
}
