'use client'
import { useForm, ValidationError } from '@formspree/react';

const inputClasses =
    "block w-full border border-[#1E293B] bg-[#000000] px-4 py-3 text-sm text-white placeholder:text-[#475569] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-colors";

const labelClasses =
    "block text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-2";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvgepwrj");

    if (state.succeeded) {
        return (
            <div className="text-center py-12">
                <div className="w-12 h-12 mx-auto mb-6 border border-[#2563EB] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Mensaje enviado</h3>
                <p className="text-sm text-[#64748B]">Gracias por contactarme. Te responderé lo antes posible.</p>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className={labelClasses}>Nombre</label>
                <input type="text" name="name" id="name" className={inputClasses} placeholder="Tu nombre" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="email" className={labelClasses}>Correo electrónico</label>
                <input type="email" name="email" id="email" className={inputClasses} placeholder="tucorreo@ejemplo.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="message" className={labelClasses}>Mensaje</label>
                <textarea name="message" id="message" rows={5} className={inputClasses} placeholder="¿En qué puedo ayudarte?" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#2563EB] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {state.submitting ? 'Enviando…' : 'Enviar mensaje'}
            </button>
        </form>
    );
}
