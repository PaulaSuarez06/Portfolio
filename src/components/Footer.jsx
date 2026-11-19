const secciones = [
    { href: '#sobreMi', label: 'Sobre mí' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
]

const redes = [
    { href: 'https://github.com/PaulaSuarez06', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/paulasuarezcavallo/', label: 'LinkedIn' },
]

function Footer() {
    const anio = new Date().getFullYear() 

    return (
      
        <footer className="bg-tinta text-papel">
         
            <div className="h-1 bg-linear-to-r from-malva via-lavanda to-celeste" aria-hidden="true" />

            <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                    <div>
                        <p className="font-display text-2xl text-white">Paula Suárez</p>
                        <p className="mt-1 text-sm text-linea">Desarrolladora full stack</p>
                    </div>

                    <div className="flex gap-16">
                        <nav aria-label="Secciones">
                            <p className="text-xs font-medium uppercase tracking-widest text-linea">Secciones</p>
                            <ul className="mt-3 space-y-1">
                                {secciones.map(s => (
                                    <li key={s.href}>
                                        <a href={s.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-linea">Perfiles</p>
                            <ul className="mt-3 space-y-1">
                                {redes.map(r => (
                                    <li key={r.label}>
                                        <a
                                            href={r.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-white"
                                        >
                                            {r.label}
                                            <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-linea sm:flex-row sm:items-center sm:justify-between">
                    <p>© {anio} Paula Suárez</p>
                    <a href="#" className="group inline-flex min-h-11 items-center gap-2 transition-colors hover:text-white">
                        Volver arriba
                        <span aria-hidden="true" className="transition-transform group-hover:-translate-y-1">↑</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
