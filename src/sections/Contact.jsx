import { useState } from 'react'

const email = 'paulaelqh@gmail.com'

const perfiles = [
    { label: 'LinkedIn', valor: 'in/paulasuarezcavallo', href: 'https://www.linkedin.com/in/paulasuarezcavallo/' },
    { label: 'GitHub', valor: 'PaulaSuarez06', href: 'https://github.com/PaulaSuarez06' },
]

function Contact() {
    const [copiado, setCopiado] = useState(false)

    const copiarEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopiado(true)
            setTimeout(() => setCopiado(false), 2000)
        } catch {
        }
    }

    return (
        <section id="contacto" className="bg-linear-to-r from-malva via-lavanda to-celeste">
            <div className="bg-white/25 px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">

                <div className="md:col-span-5">
                    <p className="text-sm font-medium uppercase tracking-widest text-gris">
                        Contacto
                    </p>
                    <h2 className="mt-2 font-display text-4xl font-medium leading-tight text-tinta md:text-5xl">
                        Hablemos<span className="text-ciruela">.</span>
                    </h2>
                    <p className="mt-4 max-w-sm text-lg leading-relaxed text-gris">
                        Para oportunidades laborales o colaboraciones, la forma más directa es el email.
                    </p>
                </div>

                <div className="md:col-span-7">
                    <p className="text-xs font-medium uppercase tracking-widest text-gris">Email</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <a
                            href={`mailto:${email}`}
                            className="font-display text-2xl text-tinta underline decoration-linea decoration-1 underline-offset-8 transition-colors hover:decoration-ciruela sm:text-3xl md:text-4xl"
                        >
                            {email}
                        </a>
                        <button
                            type="button"
                            onClick={copiarEmail}
                            className="inline-flex min-h-11 items-center rounded-full border border-tinta/30 px-5 text-sm font-medium text-tinta transition-colors hover:border-tinta hover:bg-white/30"
                        >
                            {copiado ? 'Copiado ✓' : 'Copiar'}
                        </button>
                    </div>

                    <ul className="mt-12 border-t border-linea">
                        {perfiles.map(p => (
                            <li key={p.label}>
                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex min-h-11 items-center justify-between gap-4 border-b border-linea py-4"
                                >
                                    <span>
                                        <span className="block text-xs font-medium uppercase tracking-widest text-gris">
                                            {p.label}
                                        </span>
                                        <span className="mt-1 block text-tinta">{p.valor}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="text-xl text-gris transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ciruela"
                                    >
                                        ↗
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact
