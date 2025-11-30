'use client'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvgepwrj");

    if (state.succeeded) {
        return (
            <div className="text-center py-12">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-5xl mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground">Gracias por contactarme. Te responderé lo antes posible.</p>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">Nombre</label>
                <div className="mt-2">
                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-3 text-foreground shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900" placeholder="Tu nombre" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">Correo electrónico</label>
                <div className="mt-2">
                    <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-3 text-foreground shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900" placeholder="tucorreo@ejemplo.com" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">Mensaje</label>
                <div className="mt-2">
                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 py-3 text-foreground shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900" placeholder="¿En qué puedo ayudarte?" required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
            </div>
            <button type="submit" disabled={state.submitting} className="flex w-full justify-center rounded-md bg-accent px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {state.submitting ? 'Enviando...' : 'Enviar Mensaje'} <FontAwesomeIcon icon={faEnvelope} className="ml-2 h-4 w-4" />
            </button>
        </form>
    );
}
