import fondo from '../assets/bg-hero-3.webp'

const colores = ['text-crema', 'text-white', 'text-pistacho', 'text-celeste', 'text-malva']

const destellos = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,                
    left: Math.random() * 100,               
    size: 8 + Math.random() * 16,             
    color: colores[i % colores.length],       
    duracion: 2.5 + Math.random() * 3,        
    retraso: Math.random() * 6,               
    viaje: 10 + Math.random() * 10,           
    desfase: -Math.random() * 20,             
    dx: (Math.random() - 0.5) * 160,          
    dy: (Math.random() - 0.5) * 160,          
}))

function Hero() {
    return (
        <section
            id="inicio"
            
            className="relative flex min-h-[calc(100svh-5.5rem)] items-center justify-center overflow-hidden bg-cover bg-center px-6 pt-16 pb-28"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                {destellos.map(d => (
                 
                    <span
                        key={d.id}
                        className="absolute motion-safe:animate-flotar"
                        style={{
                            top: `${d.top}%`,
                            left: `${d.left}%`,
                            animationDuration: `${d.viaje}s`,
                            animationDelay: `${d.desfase}s`,
                            '--dx': `${d.dx}px`,
                            '--dy': `${d.dy}px`,
                        }}
                    >
                        <span
                            className={`block leading-none opacity-0 motion-safe:animate-destello motion-reduce:opacity-60 ${d.color}`}
                            style={{
                                fontSize: d.size,
                                textShadow: '0 0 8px currentColor', 
                                animationDuration: `${d.duracion}s`,
                                animationDelay: `${d.retraso}s`,
                            }}
                        >
                            ✦
                        </span>
                    </span>
                ))}
            </div>

            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent via-papel/60 to-papel"
                aria-hidden="true"
            />

            <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
                <p className="text-sm font-medium uppercase tracking-widest text-gris">
                    Hola
                </p>
                <h1 className="mt-2 font-display text-5xl font-medium text-tinta md:text-6xl">
                    Soy <em className="text-ciruela">Paula</em>
                </h1>
                <p className="mt-4 max-w-xl text-lg text-gris">
                    Desarrolladora full stack · Java, Spring Boot, React y Angular.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="#proyectos"
                        className="inline-flex min-h-11 items-center rounded-full bg-ciruela px-6 font-medium text-white transition-colors hover:bg-tinta"
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#sobreMi"
                        className="inline-flex min-h-11 items-center rounded-full border border-tinta/30 px-6 font-medium text-tinta transition-colors hover:border-tinta hover:bg-white/30"
                    >
                        Sobre mí
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
