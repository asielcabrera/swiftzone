"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code, PenTool, BarChart, Layers, Monitor, MessageSquare, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { LogoSvg } from "@/components/ui/logo-svg";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Carlos Méndez",
    role: "CEO, TechStart",
    contentKey: "SwiftZone transformó por completo nuestra presencia digital. Su equipo no solo entregó un sitio web impresionante, sino que también implementó estrategias de marketing que incrementaron nuestras conversiones en un 45%.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Laura González",
    role: "Directora de Marketing, Innovate",
    contentKey: "Trabajar con SwiftZone ha sido una experiencia excepcional. Su enfoque en la experiencia de usuario y su capacidad para traducir nuestras necesidades en soluciones técnicas efectivas superó todas nuestras expectativas.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Miguel Sánchez",
    role: "Fundador, GrowthLab",
    contentKey: "Llevamos colaborando con SwiftZone más de 2 años y son un socio estratégico clave. Su capacidad para entender nuestro negocio y proponer soluciones innovadoras ha sido fundamental para nuestro crecimiento.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    titleKey: "NeoBank",
    categoryKey: "Desarrollo Web & UX/UI",
    descriptionKey: "Plataforma bancaria digital con experiencia de usuario premium",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    titleKey: "FitConnect",
    categoryKey: "Aplicación Móvil",
    descriptionKey: "App de fitness con planes personalizados y seguimiento",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    titleKey: "EcoTravel",
    categoryKey: "Marketing Digital",
    descriptionKey: "Estrategia de marketing para agencia de viajes sostenibles",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
  },
];

// Services data
const services = [
  {
    id: "diseno-ux-ui",
    titleKey: "services.uxui",
    descriptionKey: "services.uxui.desc",
    icon: PenTool,
    color: "bg-violet-100 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    features: [
      "Investigación y análisis de usuarios",
      "Wireframes y prototipos interactivos",
      "Diseño visual de interfaces",
      "Pruebas de usabilidad",
      "Optimización de experiencia de usuario"
    ]
  },
  {
    id: "desarrollo-software",
    titleKey: "services.software",
    descriptionKey: "services.software.desc",
    icon: Code,
    color: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    features: [
      "Desarrollo a medida",
      "Aplicaciones web progresivas (PWA)",
      "Arquitectura de software",
      "Integración de APIs",
      "Mantenimiento y soporte"
    ]
  },
  {
    id: "marketing-digital",
    titleKey: "services.marketing",
    descriptionKey: "services.marketing.desc",
    icon: BarChart,
    color: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    features: [
      "SEO (Optimización para motores de búsqueda)",
      "SEM (Marketing en motores de búsqueda)",
      "Gestión de redes sociales",
      "Email marketing",
      "Análisis y reporting"
    ]
  },
  {
    id: "estrategia-digital",
    titleKey: "services.strategy",
    descriptionKey: "services.strategy.desc",
    icon: Layers,
    color: "bg-red-100 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400",
    features: [
      "Consultoría estratégica digital",
      "Planificación de roadmap digital",
      "Análisis de competencia",
      "Definición de KPIs",
      "Optimización de conversión"
    ]
  },
  {
    id: "desarrollo-web",
    titleKey: "services.web",
    descriptionKey: "services.web.desc",
    icon: Monitor,
    color: "bg-amber-100 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    features: [
      "Diseño web a medida",
      "Desarrollo de tiendas online",
      "Optimización de velocidad",
      "Sitios web responsivos",
      "CMS personalizados"
    ]
  },
  {
    id: "consultoria-tecnologica",
    titleKey: "services.consulting",
    descriptionKey: "services.consulting.desc",
    icon: MessageSquare,
    color: "bg-teal-100 dark:bg-teal-900/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    features: [
      "Auditoría de sistemas",
      "Consultoría de transformación digital",
      "Optimización de infraestructura",
      "Análisis de datos",
      "Seguridad informática"
    ]
  },
];

// Función para manejar el scroll suave
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    // Handle hash navigation on page load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        setTimeout(() => {
          scrollToSection(id);
        }, 500);
      }
    }
  }, []);

  // Estilos de botones consistentes
  const buttonStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    primaryWhite: "bg-white text-primary hover:bg-white/90",
    outline: "border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all",
    outlineWhite: "border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all"
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative bg-secondary text-primary overflow-hidden pt-24">
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight"
              >
                We Drive<br />
                Digital Growth<br />
                for Your<br />
                Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base md:text-lg text-primary/80 mb-8 max-w-xl"
              >
                We are an agency specialized in digital marketing,
                and software development that combines creativity
                and technology to boost your digital presence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className={buttonStyles.primary}
                  onClick={() => scrollToSection('servicios')}
                >
                  Our Services
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={buttonStyles.outline}
                  onClick={() => scrollToSection('contacto')}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative"
              >
                <LogoSvg width={450} height={450} variant="dark" className="float-animation" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Clients Logo Section */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
            THEY TRUST US
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity"
                data-aos="fade-up"
                data-aos-delay={item * 100}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-white dark:bg-gray-950 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
              {t("services.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                data-aos="fade-up"
                data-aos-delay={150 + (index * 50)}
              >
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t(service.descriptionKey)}
                </p>
                <span
                  className="inline-flex items-center text-primary font-medium hover:underline cursor-pointer"
                  onClick={() => scrollToSection('contacto')}
                >
                  {t("services.seeMore")} <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="section-padding bg-secondary dark:bg-gray-900 scroll-mt-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {t("about.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {t("about.p1")}
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-8">
                {t("about.p2")}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">+50</p>
                  <p className="text-gray-700 dark:text-gray-400">{t("about.stat1")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">+100</p>
                  <p className="text-gray-700 dark:text-gray-400">{t("about.stat2")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">+20</p>
                  <p className="text-gray-700 dark:text-gray-400">{t("about.stat3")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">+5</p>
                  <p className="text-gray-700 dark:text-gray-400">{t("about.stat4")}</p>
                </div>
              </div>
              <Button
                size="lg"
                className={buttonStyles.primary}
                onClick={() => scrollToSection('contacto')}
              >
                {t("about.cta")}
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative" data-aos="fade-left">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                  alt="Equipo SwiftZone trabajando"
                  fill
                  className="object-cover"
                  priority
                  suppressHydrationWarning
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A531D]/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                <p className="text-lg font-semibold mb-1">5+ {t("about.exp")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="proyectos" className="section-padding bg-white dark:bg-gray-950 scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
              {t("projects.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={150 + (index * 50)}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.titleKey}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    suppressHydrationWarning
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-sm font-medium text-primary-foreground/80 mb-2">{item.categoryKey}</p>
                    <h3 className="text-xl font-bold mb-1">{item.titleKey}</h3>
                    <p className="text-sm text-gray-200">{item.descriptionKey}</p>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 flex justify-end">
                  <span
                    className="text-sm font-medium text-primary inline-flex items-center hover:underline cursor-pointer"
                    onClick={() => scrollToSection('contacto')}
                  >
                    {t("projects.viewProject")} <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
            <Button
              size="lg"
              variant="outline"
              className={buttonStyles.outline}
              onClick={() => scrollToSection('contacto')}
            >
              {t("projects.seeAll")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" data-aos="fade-up">
              {t("testimonials.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                data-aos="fade-up"
                data-aos-delay={150 + (index * 100)}
              >
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.contentKey}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding bg-primary text-white scroll-mt-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className={buttonStyles.primaryWhite}>
                  {t("cta.budget")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={buttonStyles.outlineWhite}
                >
                  {t("cta.schedule")}
                </Button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-primary-foreground/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">{t("cta.form.title")}</h3>
                <p className="text-primary-foreground/80 mb-6">
                  {t("cta.form.subtitle")}
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder={t("cta.form.name")}
                        className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t("cta.form.email")}
                        className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t("cta.form.subject")}
                      className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t("cta.form.message")}
                      rows={4}
                      className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    ></textarea>
                  </div>
                  <Button size="lg" className={buttonStyles.primaryWhite}>
                    {t("cta.form.send")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
