function ProyectCard({ proyecto, destacado = false }) {
    const { titulo, contexto, descripcion, rol, tecnologias, demo, codigo, imagen } = proyecto

    return (
        <article
            className={`overflow-hidden rounded-2xl border border-linea bg-white/30 ${
                destacado ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
            }`}
        >
            {imagen ? (
                <img
                    src={imagen}
                    alt={`Captura de ${titulo}`}
                    loading="lazy"
                   
                    className="aspect-video h-full w-full object-cover object-left-top"
                />
            ) : (
                <div className="flex aspect-video h-full items-center justify-center bg-linear-to-br from-malva via-lavanda to-celeste">
                    <span className="font-display text-4xl text-tinta/70">{titulo}</span>
                </div>
            )}

            <div className="flex flex-col p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-gris">{contexto}</p>
                <h3 className="mt-2 font-display text-3xl font-medium text-tinta">{titulo}</h3>
                <p className="mt-3 leading-relaxed text-gris">{descripcion}</p>

                {rol && (
                    <p className="mt-3 leading-relaxed text-gris">
                        <span className="font-medium text-tinta">Mi parte: </span>
                        {rol}
                    </p>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                    {tecnologias.map(t => (
                        <li key={t} className="rounded-full border border-tinta/15 px-3 py-1 text-xs text-tinta">
                            {t}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-6 pt-6">
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex min-h-11 items-center gap-1.5 font-medium text-ciruela"
                        >
                            <span className="border-b border-ciruela/40 transition-colors group-hover:border-ciruela">Ver demo</span>
                            <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                        </a>
                    )}
                    {codigo && (
                        <a
                            href={codigo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex min-h-11 items-center gap-1.5 font-medium text-tinta"
                        >
                            <span className="border-b border-tinta/30 transition-colors group-hover:border-tinta">Código</span>
                            <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProyectCard
