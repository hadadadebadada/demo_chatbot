"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4" style={{zIndex:99999}}>
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/retrieval_agents">🏴‍☠️ Chat</a>
      {/* <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/structured_output">🧱 Strukturierte Ausgabe</a>
      <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/agents">🦜 Google-Agent</a>
      <a className={`mr-4 ${pathname === "/retrieval" ? "text-white border-b" : ""}`} href="/retrieval">🐶 Wissensdatenbank</a>
      <a className={`mr-4 ${pathname === "/retrieval_agents" ? "text-white border-b" : ""}`} href="/retrieval_agents">🤖 Wissensdatenbank Google-Agent</a> */}
    </nav>
  );
}