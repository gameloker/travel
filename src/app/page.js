'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, Clock, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-8 text-center">{children}</h2>
)

const NavLink = ({ href, children, onClick }) => (
  <Link href={href} className="text-gray-600 hover:text-blue-600" onClick={onClick}>
    {children}
  </Link>
)

const IconText = ({ Icon, children }) => (
  <div className="flex items-center text-gray-600 mb-2">
    <Icon className="mr-2" size={20} />
    <span>{children}</span>
  </div>
)

export default function TourismLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = ['Rutas', 'Mapas', 'Galería', 'Tours']
  const routes = [
    { title: 'Ruta de Montaña', description: 'Explora hermosos senderos y disfruta de vistas panorámicas impresionantes.', difficulty: 'Moderada' },
    { title: 'Ruta Costera', description: 'Recorre hermosas playas y descubre encantadores pueblos costeros.', difficulty: 'Fácil' }
  ]
  const galleryImages = [
    { src: '/img/hero.avif', alt: 'Playa paradisíaca' },
    { src: '/img/hero.avif', alt: 'Montañas nevadas' },
    { src: '/img/hero.avif', alt: 'Bosque tropical' },
    { src: '/img/hero.avif', alt: 'Ciudad histórica' },
    { src: '/img/hero.avif', alt: 'Cascada espectacular' },
    { src: '/img/hero.avif', alt: 'Desierto al atardecer' }
  ]
  const tours = [
    { title: 'Tour de Montaña', description: 'Disfruta de un emocionante recorrido por las montañas más hermosas de la región.', duration: '3 días', departure: '8:00 AM' },
    { title: 'Tour Costero', description: 'Explora las playas más hermosas y los pueblos costeros más pintorescos.', duration: '5 días', departure: '7:00 AM' }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">TravelExplorer</Link>
          <div className="hidden md:flex space-x-4">
            {navLinks.map(link => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>{link}</NavLink>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
            <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <NavLink key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                    {link}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/img/hero.avif"
          alt="Paisaje turístico"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Descubre Nuevas Aventuras</h1>
          <p className="text-xl mb-8">Explora rutas increíbles y vive experiencias únicas</p>
          <Link href="#tours" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Tours
          </Link>
        </div>
      </section>

      <section id="rutas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>Nuestras Rutas</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{route.title}</h3>
                <p className="mb-4">{route.description}</p>
                <IconText Icon={MapPin}>Dificultad: {route.difficulty}</IconText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mapas" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle>Mapas de Rutas</SectionTitle>
          <div>
            <div key="montana" className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/img/hero3.avif"
                alt="Mapa de Ruta de Montaña"
                width={500}
                height={300}
                className="w-full h-auto rounded"
              />
              <p className="mt-4 text-center">Mapa de Ruta de Montaña</p>
            </div>
            <div key="costera" className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/img/hero2.avif"
                alt="Mapa de Ruta Costera"
                width={500}
                height={300}
                className="w-full h-auto rounded"
              />
              <p className="mt-4 text-center">Mapa de Ruta Costera</p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>Galería de Imágenes</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle>Nuestros Tours</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <Image
                  src="/img/hero3.avif"
                  alt={tour.title}
                  width={400}
                  height={200}
                  className="w-full h-auto rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="mb-4">{tour.description}</p>
                <IconText Icon={Calendar}>Duración: {tour.duration}</IconText>
                <IconText Icon={Clock}>Salida: {tour.departure}</IconText>
                <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                  Reservar Ahora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">TravelExplorer</h3>
              <p className="text-sm text-gray-400">Descubre el mundo con nosotros. Aventuras inolvidables te esperan.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                {['Inicio', 'Rutas', 'Tours', 'Galería'].map((item) => (
                  <li key={item}><Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-sm text-gray-400 mb-2">Email: info@travelexplorer.com</p>
              <p className="text-sm text-gray-400 mb-2">Teléfono: +34 123 456 789</p>
              <p className="text-sm text-gray-400">Dirección: Calle Aventura, 123, Madrid</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <Link key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <i className={`fab fa-${social.toLowerCase()}`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TravelExplorer. Todos los derechos reservados.</p>
            <div className="mt-4 space-x-4">
              {['Términos y Condiciones', 'Política de Privacidad', 'Cookies'].map((text) => (
                <Link key={text} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{text}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}