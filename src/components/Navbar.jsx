 

const links = [
    { href: '#sobreMi', label: 'Sobre mí', dot: 'bg-ciruela' },
    { href: '#proyectos', label: 'Proyectos', dot: 'bg-azul' },
    { href: '#contacto', label: 'Contacto', dot: 'bg-tinta' },
]

function Navbar() {
    return (
        <header className="bg-linear-to-r from-malva via-lavanda to-celeste">
            <div className="bg-white/25">
            <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 border-b border-tinta/10 px-10 py-5">
                <a href="#" className="inline-flex min-h-11 items-center">
                    Paula Suárez
                </a>

                <div className="flex flex-wrap items-center gap-x-12">
                    <ul className="flex flex-wrap gap-x-8">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="group inline-flex min-h-11 items-center gap-2 text-[15px] tracking-wide text-gris transition-colors hover:text-tinta"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`-mr-2 h-[5px] w-[5px] scale-50 rounded-full ${link.dot} opacity-0 transition-all group-hover:mr-0 group-hover:scale-100 group-hover:opacity-100`}
                                    />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        
                    </ul>

                    <a
                        href="#contacto"
                        className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-tinta"
                    >
                        <span className="border-b border-tinta pb-0.5">Escríbeme</span>
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </nav>
            </div>
        </header>
    )
}

export default Navbar