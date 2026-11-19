// Cada proyecto es un objeto. Para añadir uno nuevo, copia la plantilla de abajo.
// imagen: importa una captura desde assets (import zentripImg from '../assets/zentrip.webp')
//         y ponla aquí. Si la dejas en null, la tarjeta muestra un fondo de color con el título.
import zentripImg from '../assets/zentrip.png'

const projects = [
    {
        id: 'zentrip',
        titulo: 'ZenTrip',
        contexto: 'Proyecto de fin de grado · Equipo de 3 · 2025–2026',
        descripcion:
            'Aplicación web para planificar viajes en solitario o en grupo: itinerarios, reservas, presupuestos compartidos, votaciones y chat en tiempo real en un único lugar.',
        // Lo que más le importa a quien te contrata en un proyecto de equipo: qué hiciste TÚ
        rol: '[Qué partes desarrollaste tú: por ejemplo, la API en Node/Express, la autenticación, el módulo de presupuestos…]',
        tecnologias: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Firestore', 'Firebase Auth'],
        demo: 'https://zen-trip-phi.vercel.app',
        codigo: 'https://github.com/PaulaSuarez06/ZenTrip',
        imagen: zentripImg,
    },

    // Plantilla para el siguiente proyecto:
    // {
    //     id: 'nombre-unico',
    //     titulo: '',
    //     contexto: 'Proyecto personal · 2026',
    //     descripcion: '',
    //     rol: '',              // en proyectos personales puedes borrar esta línea
    //     tecnologias: ['Java', 'Spring Boot'],
    //     demo: null,           // null si no tiene demo: el enlace no se muestra
    //     codigo: '',
    //     imagen: null,
    // },
]

export default projects
