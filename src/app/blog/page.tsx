"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import AOS from "aos";
import "aos/dist/aos.css";

// Datos de muestra para el blog
const blogPosts = [
  {
    id: 1,
    title: "Tendencias en desarrollo web para 2025",
    summary: "Explora las tecnologías y enfoques que dominarán el desarrollo web en el próximo año.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=800&auto=format&fit=crop",
    date: "12 Mar 2025",
    author: "María García",
    category: "Desarrollo Web"
  },
  {
    id: 2,
    title: "Cómo implementar una estrategia SEO efectiva",
    summary: "Aprende las mejores prácticas para mejorar el posicionamiento de tu sitio web en los motores de búsqueda.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    date: "5 Mar 2025",
    author: "Carlos Rodríguez",
    category: "Marketing Digital"
  },
  {
    id: 3,
    title: "Diseño UX/UI: Claves para una experiencia de usuario excepcional",
    summary: "Descubre los principios fundamentales para crear interfaces que cautiven a tus usuarios.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    date: "28 Feb 2025",
    author: "Ana Martínez",
    category: "Diseño UX/UI"
  },
  {
    id: 4,
    title: "Inteligencia Artificial en el marketing: Casos de éxito",
    summary: "Analizamos cómo las empresas están utilizando la IA para revolucionar sus estrategias de marketing.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "20 Feb 2025",
    author: "David López",
    category: "Marketing Digital"
  },
  {
    id: 5,
    title: "Optimización de rendimiento en aplicaciones web",
    summary: "Técnicas y herramientas para mejorar la velocidad y rendimiento de tus aplicaciones web.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    date: "15 Feb 2025",
    author: "Roberto Sánchez",
    category: "Desarrollo Web"
  },
  {
    id: 6,
    title: "El futuro del e-commerce: Tendencias a seguir",
    summary: "Descubre las innovaciones que están transformando el comercio electrónico y cómo adaptarte a ellas.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
    date: "8 Feb 2025",
    author: "Laura Fernández",
    category: "Estrategia Digital"
  }
];

export default function BlogPage() {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary font-medium mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver al inicio
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up">
              Blog
            </h1>
            <p className="text-gray-700 dark:text-gray-400 text-lg mb-10" data-aos="fade-up" data-aos-delay="100">
              Últimas noticias, artículos y recursos sobre marketing digital, desarrollo de software y tendencias tecnológicas.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Leer artículo
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" className="mx-auto">
              Cargar más artículos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
