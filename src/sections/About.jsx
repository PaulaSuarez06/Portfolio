const datos = [
    { label: 'Actualmente', valor: 'Junior Full Stack en Custos' },
    { label: 'Formación', valor: 'CFGS Desarrollo de Aplicaciones Web' },
    { label: 'Idiomas', valor: 'Español nativo · Inglés C1 (Cambridge CAE)' },
    { label: 'Ubicación', valor: 'Alcalá de Henares, Madrid' },
]

function About() {
    return (
        <section id="sobreMi" className="bg-papel px-6 py-24 md:px-10 md:py-32">
  
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">

           
                <div className="md:col-span-5 md:sticky md:top-12 md:self-start">
                 
                    <p className="text-sm font-medium uppercase tracking-widest text-gris">
                        Sobre mí
                    </p>
                    <h2 className="mt-2 font-display text-4xl font-medium leading-tight text-tinta md:text-5xl">
                        Aplicaciones web, <em className="text-ciruela">de principio a fin</em>.
                    </h2>


                </div>

                <div className="md:col-span-7">
                   
                    <div className="max-w-prose space-y-5 text-justify text-lg leading-relaxed text-gris hyphens-auto">
                        <p>
                            Soy desarrolladora full stack. Trabajo con Java y Spring Boot en el backend
                            y con React y Angular en el frontend, lo que me permite seguir una funcionalidad
                            desde la base de datos hasta la pantalla.
                        </p>
                        <p>
                            Actualmente trabajo como programadora junior full stack en Custos, donde despliego
                            aplicaciones en producción, diagnostico y corrijo errores y doy soporte técnico.
                            Me formé en el ciclo superior de Desarrollo de Aplicaciones Web, con especialización
                            en backend.
                        </p>
                        <p>
                            Antes de dedicarme al desarrollo gestioné campañas de marketing internacionales y
                            trabajé como formadora de inglés profesional. De esa etapa conservo la comunicación
                            con clientes y equipos, y un inglés de nivel C1.
                        </p>
                    </div>

                    <dl className="mt-12 grid gap-x-10 border-t border-linea sm:grid-cols-2">
                        {datos.map(d => (
                            <div key={d.label} className="border-b border-linea py-4">
                                <dt className="text-xs font-medium uppercase tracking-widest text-gris">
                                    {d.label}
                                </dt>
                                <dd className="mt-1 text-tinta">{d.valor}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default About
