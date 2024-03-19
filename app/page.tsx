"use client";
import { ChatWindow } from "@/components/ChatWindow";
import React from "react";

import dynamic from "next/dynamic";


const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {





  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">

<h1 className="text-3xl md:text-4xl mb-4">

               🏴‍☠️Patchy der Pirat</h1>
      <p>Erstellen Sie einfache Chatbots.</p>
      <p>Fügen Sie verschiedene Persönlichkeiten hinzu</p>
    </div>
  );
  return (
    <div>




<ChatWindow
  endpoint="api/chat"
  emoji="🏴‍☠️"
  titleText="Patchy der Chatty Pirat"
  placeholder="Ich bin ein LLM, der vorgibt, ein Pirat zu sein! Frag mich nach dem Piratenleben!"
  emptyStateComponent={InfoCard}
></ChatWindow>


    </div>

  );
}
