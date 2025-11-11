// src/components/chat/ChatWidget.tsx
import { useState, useEffect, useRef } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { BsChatDots, BsX, BsSend } from "react-icons/bs";
import { geminiChatService } from "@/services/geminiService";
import "./ChatWidget.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Ciao! Sono l'assistente di Salvatore. Come posso aiutarti con le lezioni private?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inizializza la chat quando il widget viene aperto
    if (isOpen) {
      geminiChatService.initializeChat();
    }
  }, [isOpen]);

  useEffect(() => {
    // Auto-scroll ai nuovi messaggi
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    // Aggiungi messaggio utente
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      // Invia il messaggio all'AI e ottieni la risposta
      const aiResponse = await geminiChatService.sendMessage(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
        },
      ]);
    } catch (error) {
      console.error("Errore nella comunicazione con l'AI:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Mi dispiace, si è verificato un errore. Per favore riprova o contatta direttamente Salvatore via email (sd.io@hotmail.com) o telefono (+39 3384591601).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          variant="primary"
          className="position-fixed rounded-circle shadow-lg d-flex align-items-center justify-content-center"
          style={{
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            zIndex: 1,
          }}
          onClick={() => setIsOpen(true)}
        >
          <BsChatDots size={24} />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card
          className="position-fixed shadow-lg"
          style={{
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "500px",
            zIndex: 1,
          }}
        >
          <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
            <span className="fw-bold">Assistente personale</span>
            <Button
              variant="link"
              className="text-white p-0"
              onClick={() => setIsOpen(false)}
            >
              <BsX size={32} />
            </Button>
          </Card.Header>

          <Card.Body
            style={{
              overflowY: "auto",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`d-flex ${
                  msg.role === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-light text-dark"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="d-flex justify-content-start">
                <div className="p-2 rounded bg-light text-dark">
                  <Spinner animation="border" size="sm" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                  </Spinner>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </Card.Body>

          <Card.Footer className="p-2">
            <Form onSubmit={handleSubmit} className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Scrivi un messaggio..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" variant="primary" disabled={isLoading}>
                <BsSend />
              </Button>
            </Form>
          </Card.Footer>
        </Card>
      )}
    </>
  );
};
