"use client";

import { useState } from "react";

export default function ChatAssistant() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chefbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply = { role: "assistant", content: data.reply };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Sorry, something went wrong!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 rounded-2xl bg-white dark:bg-zinc-900 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        👨‍🍳 ChefBot – Your AI Cooking Assistant
      </h2>

      <div className="h-64 overflow-y-auto bg-gray-50 dark:bg-zinc-800 p-3 rounded-lg mb-3 text-sm space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl ${
              msg.role === "user"
                ? "bg-blue-100 dark:bg-blue-800 text-right"
                : "bg-green-100 dark:bg-green-800 text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <p className="text-gray-500">Typing...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask a recipe question..."
          className="flex-1 px-3 py-2 border rounded-xl dark:bg-zinc-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
