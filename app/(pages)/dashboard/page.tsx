"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mic, SendHorizonal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface MSG {
  role: string;
  content: string;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const Dashboard = () => {
  const [listening, setListening] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<MSG[]>([]);
  const [msg, setMsg] = useState<MSG>({ role: "You", content: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const endMsgRef = useRef<HTMLDivElement>(null);

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  const send = async (inputContent?: string) => {
    const content = inputContent ?? msg.content;
    if (!content.trim()) return;

    const input = { role: "You", content };
    setMessages((prev) => [...prev, input]);
    setMsg({ role: "You", content: "" });
    setLoading(true);

    try {
      const req = await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: input }),
      });

      if (!req.ok) throw new Error("Failed request");

      const data = await req.json();
      const AIinput = { role: "AI", content: data.reply };
      setMessages((prev) => [...prev, AIinput]);
      speak(AIinput.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    const SpeechRec =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRec) {
      alert("Browser does not support Web Speech API!");
      return;
    }

    const recognition = new SpeechRec();
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      send(transcript);
    };

    recognition.start();
  };

  useEffect(() => {
    endMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-lg mx-auto mt-24 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          CareLens AI Assistant
        </h1>

        <div className="h-[350px] overflow-y-auto bg-gray-50 rounded-xl p-4 space-y-3 shadow-inner">
          {messages.length === 0 && (
            <p className="text-sm text-gray-500">
              Describe your symptoms in as much detail as possible...
            </p>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] p-3 rounded-xl shadow text-sm whitespace-pre-wrap ${
                msg.role === "You"
                  ? "ml-auto bg-black text-white"
                  : "bg-white border text-gray-800"
              }`}
            >
              <span className="font-semibold">{msg.role}:</span>{" "}
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Loader2 className="animate-spin w-4 h-4" />
              Generating response...
            </div>
          )}

          <div ref={endMsgRef} />
        </div>

        <div className="space-y-3">
          <Button
            onClick={startListening}
            className={`w-full flex items-center justify-center gap-2 font-medium ${
              listening ? "bg-green-600" : ""
            }`}
          >
            {listening ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Listening...
              </>
            ) : (
              <>
                <Mic className="w-4 h-4" />
                Speak 
              </>
            )}
          </Button>

          <div className="flex items-center gap-2">
            <Input
              className="flex-1"
              placeholder="Type your symptoms..."
              value={msg.content}
              onChange={(e) => setMsg({ ...msg, content: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <Button
              variant="outline"
              onClick={() => send()}
              disabled={loading}
              className="hover:bg-gray-100"
            >
              <SendHorizonal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
