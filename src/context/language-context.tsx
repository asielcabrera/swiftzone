"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre Nosotros",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.login": "Iniciar Sesión",
    "nav.contactUs": "Contáctanos",

    // Hero section
    "hero.title": "Impulsamos el Crecimiento Digital de tu Negocio",
    "hero.subtitle": "Somos una agencia especializada en marketing digital y desarrollo de software que combina creatividad y tecnología para impulsar tu presencia digital.",
    "hero.cta.services": "Nuestros Servicios",
    "hero.cta.contact": "Contáctanos",

    // Client logos section
    "clients.title": "CONFÍAN EN NOSOTROS",

    // Services section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Ofrecemos soluciones integrales de marketing digital y desarrollo de software para ayudarte a alcanzar tus objetivos de negocio.",
    "services.uxui": "Diseño UX/UI",
    "services.uxui.desc": "Creamos experiencias digitales intuitivas y atractivas que cautivan a los usuarios y aumentan la conversión.",
    "services.software": "Desarrollo de Software",
    "services.software.desc": "Desarrollamos soluciones tecnológicas a medida, aplicaciones web y móviles que optimizan procesos y mejoran resultados.",
    "services.marketing": "Marketing Digital",
    "services.marketing.desc": "Implementamos estrategias de marketing digital efectivas para aumentar tu visibilidad online y generar leads cualificados.",
    "services.strategy": "Estrategia Digital",
    "services.strategy.desc": "Diseñamos estrategias digitales integrales que alinean tus objetivos de negocio con las acciones en el entorno digital.",
    "services.web": "Desarrollo Web",
    "services.web.desc": "Creamos sitios web modernos, responsivos y optimizados para SEO que destacan tu marca y generan resultados.",
    "services.consulting": "Consultoría Tecnológica",
    "services.consulting.desc": "Asesoramos en la implementación de soluciones tecnológicas que optimizan procesos y potencian el crecimiento empresarial.",
    "services.seeMore": "Saber más",

    // About section
    "about.title": "Transformamos Ideas en Soluciones Digitales",
    "about.p1": "En SwiftZone, nos apasiona la innovación y el desarrollo de soluciones digitales que marcan la diferencia. Con más de 5 años de experiencia, hemos ayudado a empresas de diversos sectores a potenciar su presencia digital.",
    "about.p2": "Nuestro equipo multidisciplinar combina expertise en marketing digital, desarrollo de software y diseño UX/UI para ofrecer soluciones integrales que impactan positivamente en el crecimiento de tu negocio.",
    "about.stat1": "Clientes satisfechos",
    "about.stat2": "Proyectos completados",
    "about.stat3": "Profesionales",
    "about.stat4": "Años de experiencia",
    "about.cta": "Conoce a nuestro equipo",
    "about.exp": "Experiencia en el sector",

    // Projects section
    "projects.title": "Nuestros Proyectos",
    "projects.subtitle": "Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos a través de soluciones digitales innovadoras.",
    "projects.viewProject": "Ver proyecto",
    "projects.seeAll": "Ver todos los proyectos",

    // Testimonials section
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "La satisfacción de nuestros clientes es nuestro mayor orgullo. Descubre lo que opinan de nuestro trabajo.",

    // CTA section
    "cta.title": "¿Listo para Impulsar tu Presencia Digital?",
    "cta.subtitle": "Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio a través de soluciones digitales innovadoras.",
    "cta.budget": "Solicitar Presupuesto",
    "cta.schedule": "Agendar Llamada",
    "cta.form.title": "¿Tienes alguna pregunta?",
    "cta.form.subtitle": "Completa el formulario y nos pondremos en contacto contigo lo antes posible.",
    "cta.form.name": "Nombre",
    "cta.form.email": "Email",
    "cta.form.subject": "Asunto",
    "cta.form.message": "Mensaje",
    "cta.form.send": "Enviar Mensaje",

    // Footer
    "footer.tagline": "Impulsamos la innovación digital a través de estrategias de marketing efectivas y desarrollo de software a medida.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.address": "Dirección",
    "footer.phone": "Teléfono",
    "footer.email": "Email",
    "footer.hours": "Horario de Atención",
    "footer.weekdays": "Lunes - Viernes",
    "footer.saturday": "Sábado",
    "footer.sunday": "Domingo",
    "footer.closed": "Cerrado",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",

    // Services page
    "servicesPage.title": "Nuestros Servicios",
    "servicesPage.subtitle": "Ofrecemos soluciones integrales de marketing digital y desarrollo de software adaptadas a las necesidades específicas de tu empresa.",
    "servicesPage.cta.title": "¿Necesitas una solución a medida?",
    "servicesPage.cta.subtitle": "Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio a través de soluciones digitales innovadoras.",
    "servicesPage.cta.budget": "Solicitar Presupuesto",
    "servicesPage.cta.whatsapp": "Contactar por WhatsApp",

    // Contact page
    "contactPage.title": "Contacta con Nosotros",
    "contactPage.subtitle": "Estamos aquí para ayudarte. Contacta con nuestro equipo y descubre cómo podemos impulsar tu negocio.",
    "contactPage.form.title": "Envíanos un Mensaje",
    "contactPage.form.name": "Nombre",
    "contactPage.form.email": "Email",
    "contactPage.form.phone": "Teléfono",
    "contactPage.form.subject": "Asunto",
    "contactPage.form.message": "Mensaje",
    "contactPage.form.privacy": "He leído y acepto la política de privacidad",
    "contactPage.form.send": "Enviar Mensaje",
    "contactPage.info.title": "Información de Contacto",
    "contactPage.info.subtitle": "Estamos disponibles para atenderte y resolver cualquier duda que puedas tener sobre nuestros servicios. Contacta con nosotros a través de los siguientes medios.",
    "contactPage.faq.title": "Preguntas Frecuentes",
    "contactPage.faq.subtitle": "Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.",
    "contactPage.faq.more": "¿No encuentras lo que buscas? Contáctanos directamente.",
    "contactPage.faq.cta": "Solicita una Consulta Gratuita",

    // Language selector
    "language.switch": "EN",
  },

  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About Us",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.contactUs": "Contact Us",

    // Hero section
    "hero.title": "We Drive Digital Growth for Your Business",
    "hero.subtitle": "We are an agency specialized in digital marketing and software development that combines creativity and technology to boost your digital presence.",
    "hero.cta.services": "Our Services",
    "hero.cta.contact": "Contact Us",

    // Client logos section
    "clients.title": "THEY TRUST US",

    // Services section
    "services.title": "Our Services",
    "services.subtitle": "We offer comprehensive digital marketing and software development solutions to help you achieve your business goals.",
    "services.uxui": "UX/UI Design",
    "services.uxui.desc": "We create intuitive and attractive digital experiences that captivate users and increase conversion.",
    "services.software": "Software Development",
    "services.software.desc": "We develop custom technological solutions, web and mobile applications that optimize processes and improve results.",
    "services.marketing": "Digital Marketing",
    "services.marketing.desc": "We implement effective digital marketing strategies to increase your online visibility and generate qualified leads.",
    "services.strategy": "Digital Strategy",
    "services.strategy.desc": "We design comprehensive digital strategies that align your business objectives with actions in the digital environment.",
    "services.web": "Web Development",
    "services.web.desc": "We create modern, responsive and SEO-optimized websites that highlight your brand and generate results.",
    "services.consulting": "Technology Consulting",
    "services.consulting.desc": "We advise on the implementation of technological solutions that optimize processes and enhance business growth.",
    "services.seeMore": "Learn more",

    // About section
    "about.title": "We Transform Ideas into Digital Solutions",
    "about.p1": "At SwiftZone, we are passionate about innovation and the development of digital solutions that make a difference. With over 5 years of experience, we have helped companies from various sectors enhance their digital presence.",
    "about.p2": "Our multidisciplinary team combines expertise in digital marketing, software development, and UX/UI design to offer comprehensive solutions that positively impact your business growth.",
    "about.stat1": "Happy clients",
    "about.stat2": "Projects completed",
    "about.stat3": "Professionals",
    "about.stat4": "Years of experience",
    "about.cta": "Meet our team",
    "about.exp": "Experience in the sector",

    // Projects section
    "projects.title": "Our Projects",
    "projects.subtitle": "Discover how we have helped our clients achieve their goals through innovative digital solutions.",
    "projects.viewProject": "View project",
    "projects.seeAll": "See all projects",

    // Testimonials section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Our clients' satisfaction is our greatest pride. Discover what they think about our work.",

    // CTA section
    "cta.title": "Ready to Boost Your Digital Presence?",
    "cta.subtitle": "Contact us today and discover how we can help you achieve your business goals through innovative digital solutions.",
    "cta.budget": "Request Quote",
    "cta.schedule": "Schedule a Call",
    "cta.form.title": "Have a question?",
    "cta.form.subtitle": "Fill out the form and we'll get back to you as soon as possible.",
    "cta.form.name": "Name",
    "cta.form.email": "Email",
    "cta.form.subject": "Subject",
    "cta.form.message": "Message",
    "cta.form.send": "Send Message",

    // Footer
    "footer.tagline": "We drive digital innovation through effective marketing strategies and custom software development.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.address": "Address",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.hours": "Business Hours",
    "footer.weekdays": "Monday - Friday",
    "footer.saturday": "Saturday",
    "footer.sunday": "Sunday",
    "footer.closed": "Closed",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",

    // Services page
    "servicesPage.title": "Our Services",
    "servicesPage.subtitle": "We offer comprehensive digital marketing and software development solutions tailored to your company's specific needs.",
    "servicesPage.cta.title": "Need a custom solution?",
    "servicesPage.cta.subtitle": "Contact us today and discover how we can help you achieve your business goals through innovative digital solutions.",
    "servicesPage.cta.budget": "Request Quote",
    "servicesPage.cta.whatsapp": "Contact via WhatsApp",

    // Contact page
    "contactPage.title": "Contact Us",
    "contactPage.subtitle": "We're here to help. Contact our team and discover how we can boost your business.",
    "contactPage.form.title": "Send Us a Message",
    "contactPage.form.name": "Name",
    "contactPage.form.email": "Email",
    "contactPage.form.phone": "Phone",
    "contactPage.form.subject": "Subject",
    "contactPage.form.message": "Message",
    "contactPage.form.privacy": "I have read and accept the privacy policy",
    "contactPage.form.send": "Send Message",
    "contactPage.info.title": "Contact Information",
    "contactPage.info.subtitle": "We are available to assist you and answer any questions you may have about our services. Contact us through the following means.",
    "contactPage.faq.title": "Frequently Asked Questions",
    "contactPage.faq.subtitle": "Here you will find answers to the most common questions about our services.",
    "contactPage.faq.more": "Can't find what you're looking for? Contact us directly.",
    "contactPage.faq.cta": "Request a Free Consultation",

    // Language selector
    "language.switch": "ES",
  }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check if there's a language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
