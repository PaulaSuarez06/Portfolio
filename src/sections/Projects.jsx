import projects from '../data/projects.js'
import ProyectCard from '../components/ProyectCard.jsx'

function Projects() {
    return (
        <section id="proyectos" className="bg-papel px-6 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto max-w-6xl border-t border-linea pt-24 md:pt-32">

                <p className="text-sm font-medium uppercase tracking-widest text-gris">Proyectos</p>
                <h2 className="mt-2 font-display text-4xl font-medium leading-tight text-tinta md:text-5xl">
                    Trabajo <em className="text-ciruela">reciente</em>.
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <ProyectCard key={p.id} proyecto={p} destacado={i === 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
