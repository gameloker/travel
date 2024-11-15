'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, Clock, Menu } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import AboutUsSection from "@/components/sections/About"
import { ScrollProgressBar } from '@/components/sections/ScrollProgress'

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold mb-8 text-center"
  >
    {children}
  </motion.h2>
)

const NavLink = ({ href, children, onClick }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) onClick();
      }}
    >
      {children}
    </Link>
  </motion.div>
)

const IconText = ({ Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center text-gray-600 mb-2"
  >
    <Icon className="mr-2" size={20} />
    <span>{children}</span>
  </motion.div>
)

export default function TourismLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = ['Rutas', 'Mapas', 'Galeria', 'Tours']
  const routes = [
    { title: 'Ruta A', description: 'Explora hermosos senderos y disfruta de vistas panorámicas impresionantes.', difficulty: 'Moderada' },
    { title: 'Ruta B', description: 'Recorre hermosas playas y descubre encantadores pueblos costeros.', difficulty: 'Fácil' }
  ]
  const galleryImages = [
    { src: '/img/Cementerio.png', alt: 'Cementerio' },
    { src: '/img/hotel-ibis.png', alt: 'Hotel Ibis' },
    { src: '/img/Muelle-Prat.png', alt: 'Muelle Prat' },
    { src: '/img/Muelle-vergara.png', alt: 'Muelle Vergara' },
    { src: '/img/Palacio-Rioja.png', alt: 'Palacio Rioja' },
    { src: '/img/Quinta-vergara.png', alt: 'Quinta Vergara' },
    { src: '/img/reloj-de-flores.png', alt: 'Reloj de Flores' },
    { src: '/img/Viñedo-kingston.png', alt: 'Viñedo Kingston' }
  ]
  const tours = [
    { title: 'Tour Ruta A',
      description: 'Disfruta de un emocionante recorrido por las montañas más hermosas de la región.',
      duration: '3 días',
      departure: '8:00 AM',
      url: "https://wa.me/56979923272/?text=Hola%2C+estoy+interesado+en+agendar+el+Tour+A.+¿Podrías+darme+más+información%3F"
    },
    { title: 'Tour Ruta B',
      description: 'Explora las playas más hermosas y los pueblos costeros más pintorescos.',
      duration: '5 días',
      departure: '7:00 AM',
      url: "https://wa.me/56979923272/?text=Hola%2C+estoy+interesado+en+agendar+el+Tour+B.+¿Podrías+darme+más+información%3F"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 shadow ${
          isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <ScrollProgressBar />
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold text-blue-600`}>
            <Image src="/img/logo.png" alt="Empowered" width={60} height={40}  />
          </Link>
          <div className="hidden md:flex space-x-4">
            {navLinks.map(link => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>
                <span className={isScrolled ? 'text-gray-600' : 'text-white'}>{link}</span>
              </NavLink>
            ))}
          </div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden text-gray-600`}>
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
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center"
      >
        <Image
          src="/img/hero.avif"
          alt="Paisaje turístico"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Descubre Nuevas Aventuras</h1>
          <p className="text-xl mb-8">Explora rutas increíbles y vive experiencias únicas</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#tours" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ¡Ir a ver Tours!
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="rutas"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <SectionTitle>Nuestras Rutas</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{route.title}</h3>
                <p className="mb-4">{route.description}</p>
                <IconText Icon={MapPin}>Dificultad: {route.difficulty}</IconText>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="mapas"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <SectionTitle>Mapas de Rutas</SectionTitle>
          <div>
            <p className="mt-4 text-center">Mapa de Ruta de A</p>
            <div key="montana" className="p-4 rounded-lg flex flex-wrap gap-8 justify-center">
              {['/img/mapa-01.png', '/img/mapa-02.png'].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={src}
                    alt="Mapa de Ruta de A"
                    width={450}
                    height={300}
                    objectFit="contain"
                    className="rounded shadow h-72"
                  />
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-center">Mapa de Ruta B</p>
            <div key="costera" className="p-4 rounded-lg flex flex-wrap gap-8 justify-center">
              {['/img/mapa-03.png', '/img/mapa-04.png'].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={src}
                    alt="Mapa de Ruta B"
                    width={450}
                    height={300}
                    className="rounded shadow"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <AboutUsSection />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="galeria"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <SectionTitle>Galería de Imágenes</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="object-cover h-96 w-full rounded transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                >
                  <h3 className="text-white text-2xl font-bold text-center px-4 py-2 bg-black bg-opacity-50 rounded-lg shadow-lg">
                    {img.alt}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="tours"
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <SectionTitle>Nuestros Tours</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow"
              >
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={tour.url} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                    Reservar Ahora
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">
                <Image src="/img/logo.png" alt="TravelExplorer" width={120} height={80} />
              </h3>
              <p className="text-sm text-gray-400">Descubre el mundo con nosotros. Aventuras inolvidables te esperan.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                {['Inicio', 'Rutas', 'Tours', 'Galería'].map((item) => (
                  <li key={item}>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </motion.div>
                  </li>
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
                  <motion.div key={social} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">{social}</span>
                      <i className={`fab fa-${social.toLowerCase()}`}></i>
                    </Link>
                  </motion.div>
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
      </motion.footer>
    </div>
  )
}