import { ShipWheelIcon as Wheelchair, Ear, Globe } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Acerca de Empowered Tour</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              En Empowered Tour ofrecemos experiencias turísticas accesibles por los principales puntos de interés de la quinta región, con un enfoque inclusivo, especialmente dirigido a personas con discapacidades, como movilidad reducida y problemas de audición.
            </p>
            <p className="text-lg leading-relaxed">
              Nuestros recorridos están diseñados para garantizar el máximo acceso y comodidad, con rutas y lugares que priorizan la inclusión. Contamos con transporte adaptado para usuarios de sillas de ruedas, intérprete de lengua de señas para personas no oyentes, así como material de apoyo y acomodaciones adicionales si se requieren.
            </p>
            <p className="text-lg leading-relaxed">
              Nuestra visión es ampliar nuestro alcance a través de las experiencias de nuestros clientes, para inspirar a más personas a empoderarse y disfrutar de nuevas aventuras turísticas, demostrando que la discapacidad no es un obstáculo para vivir experiencias enriquecedoras.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <FeatureCard
              icon={<Wheelchair className="h-10 w-10 text-primary" />}
              title="Accesibilidad"
              description="Transporte y rutas adaptadas para usuarios de sillas de ruedas"
            />
            <FeatureCard
              icon={<Ear className="h-10 w-10 text-primary" />}
              title="Inclusión Auditiva"
              description="Intérprete de lengua de señas para personas no oyentes"
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Experiencias Enriquecedoras"
              description="Descubre que la discapacidad no es un obstáculo para vivir nuevas aventuras"
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>}
              title="Enfoque Inclusivo"
              description="Experiencias diseñadas para todos, priorizando la comodidad y el acceso"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}