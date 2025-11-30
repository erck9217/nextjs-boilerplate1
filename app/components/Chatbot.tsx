'use client'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function Chatbot() {
  const [mensaje, setMensaje] = useState('')
  const [historial, setHistorial] = useState<{ role: 'user' | 'bot', content: string }[]>([])
  const [cargando, setCargando] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [historial])

  const enviar = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!mensaje.trim()) return

    const userMessage = mensaje
    setHistorial(prev => [...prev, { role: 'user', content: userMessage }])
    setMensaje('')
    setCargando(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: userMessage })
      })

      const data = await res.json()

      if (data.error) {
        setHistorial(prev => [...prev, { role: 'bot', content: `Error: ${data.error}` }])
      } else {
        setHistorial(prev => [...prev, { role: 'bot', content: data.respuesta }])
      }
    } catch {
      setHistorial(prev => [...prev, { role: 'bot', content: "Error de conexión. Intenta más tarde." }])
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col h-[500px]">
      <div className="bg-accent p-4 text-white font-bold flex items-center gap-2">
        <FontAwesomeIcon icon={faRobot} />
        <span>Asistente Virtual</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
        {historial.length === 0 && (
          <div className="text-center text-muted-foreground mt-10">
            <p>¡Hola! Soy el asistente virtual de Erick.</p>
            <p className="text-sm">Pregúntame sobre su experiencia o servicios.</p>
          </div>
        )}
        {historial.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user'
              ? 'bg-accent text-white rounded-br-none'
              : 'bg-white dark:bg-slate-700 text-foreground rounded-bl-none shadow-sm'
              }`}>
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {cargando && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={enviar} className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex gap-2">
        <input
          className="flex-1 border border-slate-300 dark:border-slate-600 rounded-full px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent text-sm"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={cargando}
        />
        <button
          type="submit"
          disabled={cargando || !mensaje.trim()}
          className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}