export const defaultLocale = "en"
export const locales = ["en", "pt"] as const

export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      connect: "Connect",
    },
    hero: {
      title: "Embrace Your Journey: Compassionate Midwifery Care in Porto",
      subtitle: "Supporting Expectant Mothers Every Step of the Way",
      cta: "Book Consultation",
    },
    trustIndicators: {
      licensedMidwife: "Licensed Midwife",
      bilingualSupport: "Bilingual Support",
      expatFocused: "Expat Focused",
    },
    servicesSection: {
      title: "Our Services",
      subtitle: "Comprehensive care throughout your pregnancy journey, tailored to your unique needs.",
      learnMore: "Learn More",
      viewAllServices: "View All Services",
    },
    services: {
      prenatal: {
        title: "Prenatal Care",
        description: "Personalised check-ups and guidance tailored to your unique journey.",
        detailed:
          "Our comprehensive prenatal care includes regular check-ups, nutritional guidance, birth planning, and emotional support throughout your pregnancy. We provide personalised care that respects your choices and cultural background.",
      },
      birth: {
        title: "Birth Support",
        description: "Empowering you with a nurturing environment for your birth experience.",
        detailed:
          "Whether you're planning a home birth, hospital birth, or birth centre delivery, we provide continuous support, advocacy, and expertise to help you achieve the birth experience you desire.",
      },
      postnatal: {
        title: "Postnatal Care",
        description: "Comprehensive support for you and your newborn, ensuring a smooth transition.",
        detailed:
          "Our postnatal care includes breastfeeding support, newborn care guidance, postpartum recovery assistance, and emotional support during this important transition period.",
      },
    },
    about: {
      title: "About MaternoNest",
      subtitle: "Dedicated to supporting families in Porto with compassionate, culturally-sensitive midwifery care",
      story:
        "Founded with a passion for supporting English-speaking families in Porto, MaternoNest bridges the gap between traditional Portuguese healthcare and the needs of international families. Our bilingual approach ensures you feel understood and supported throughout your pregnancy journey.",
      mission:
        "Our mission is to provide personalised, evidence-based midwifery care that honours your choices, respects your cultural background, and supports your family's unique needs.",
      qualifications:
        "Licensed Midwife with over 10 years of experience, certified in both Portuguese and international birthing practices, fluent in English and Portuguese.",
      stats: {
        experience: "Years Experience",
        families: "Families Supported",
        languages: "Languages Spoken",
        satisfaction: "Satisfaction Rate",
      },
      values: {
        title: "Our Values",
        subtitle: "The principles that guide our approach to midwifery care.",
        compassionate: {
          title: "Compassionate Care",
          description: "Every family deserves personalised, empathetic support during this special time.",
        },
        cultural: {
          title: "Cultural Sensitivity",
          description: "Understanding and respecting diverse backgrounds and birthing preferences.",
        },
        family: {
          title: "Family-Centered",
          description: "Supporting not just mothers, but entire families through the pregnancy journey.",
        },
        evidence: {
          title: "Evidence-Based",
          description: "Combining traditional wisdom with modern, research-backed practices.",
        },
      },
      qualificationsSection: {
        title: "Qualifications & Experience",
        certifications: "Certifications",
        specializations: "Specializations",
        licensedMidwife: "Licensed Midwife (Portugal)",
        childbirth: "International Childbirth Education",
        lactation: "Lactation Consultant Certification",
        highRisk: "High-risk pregnancy support",
        natural: "Natural birth advocacy",
        mental: "Postpartum mental health",
      },
      cta: "Get in Touch",
    },
    connect: {
      title: "Connect With Us",
      subtitle:
        "Join our community of families and stay updated with tips, stories, and support for your pregnancy journey.",
      instagram: {
        title: "Instagram",
        description: "Daily tips, birth stories, and behind-the-scenes moments from our midwifery practice.",
      },
      facebook: {
        title: "Facebook",
        description: "Join our supportive community of English-speaking families in Porto.",
      },
      newsletter: {
        title: "Stay Connected",
        description:
          "Get weekly pregnancy tips, local Porto resources, and updates from our practice delivered to your inbox.",
        placeholder: "Enter your email address",
        button: "Subscribe",
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to start your journey? We're here to support you every step of the way.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Interested In",
        dueDate: "Expected Due Date",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
      },
      services: {
        prenatal: "Prenatal Care",
        birth: "Birth Support",
        postnatal: "Postnatal Care",
        consultation: "Initial Consultation",
      },
      info: {
        phone: "+351 XXX XXX XXX",
        email: "hello@maternonest.com",
        address: "Porto, Portugal",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      },
      success: "Thank you for your message! We'll get back to you within 24 hours.",
      error: "There was an error sending your message. Please try again.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      blog: "Blogue",
      contact: "Contacto",
      connect: "Conectar",
    },
    hero: {
      title: "Abrace a Sua Jornada: Cuidados de Obstetrícia Compassivos no Porto",
      subtitle: "Apoiando Futuras Mães em Cada Passo do Caminho",
      cta: "Marcar Consulta",
    },
    trustIndicators: {
      licensedMidwife: "Parteira Licenciada",
      bilingualSupport: "Apoio Bilingue",
      expatFocused: "Focado em Expatriados",
    },
    servicesSection: {
      title: "Os Nossos Serviços",
      subtitle: "Cuidados abrangentes durante toda a sua jornada de gravidez, adaptados às suas necessidades únicas.",
      learnMore: "Saber Mais",
      viewAllServices: "Ver Todos os Serviços",
    },
    services: {
      prenatal: {
        title: "Cuidados Pré-natais",
        description: "Consultas personalizadas e orientação adaptada à sua jornada única.",
        detailed:
          "Os nossos cuidados pré-natais abrangentes incluem consultas regulares, orientação nutricional, planeamento do parto e apoio emocional durante a gravidez. Fornecemos cuidados personalizados que respeitam as suas escolhas e contexto cultural.",
      },
      birth: {
        title: "Apoio ao Parto",
        description: "Capacitando-a com um ambiente acolhedor para a sua experiência de parto.",
        detailed:
          "Quer esteja a planear um parto em casa, no hospital ou numa casa de parto, fornecemos apoio contínuo, advocacia e experiência para a ajudar a alcançar a experiência de parto que deseja.",
      },
      postnatal: {
        title: "Cuidados Pós-natais",
        description: "Apoio abrangente para si e o seu recém-nascido, garantindo uma transição suave.",
        detailed:
          "Os nossos cuidados pós-natais incluem apoio à amamentação, orientação sobre cuidados com o recém-nascido, assistência na recuperação pós-parto e apoio emocional durante este período importante de transição.",
      },
    },
    about: {
      title: "Sobre a MaternoNest",
      subtitle:
        "Dedicados a apoiar famílias no Porto com cuidados de obstetrícia compassivos e culturalmente sensíveis",
      story:
        "Fundada com paixão por apoiar famílias anglófonas no Porto, a MaternoNest faz a ponte entre os cuidados de saúde tradicionais portugueses e as necessidades das famílias internacionais. A nossa abordagem bilingue garante que se sinta compreendida e apoiada durante toda a sua jornada de gravidez.",
      mission:
        "A nossa missão é fornecer cuidados de obstetrícia personalizados e baseados em evidências que honram as suas escolhas, respeitam o seu contexto cultural e apoiam as necessidades únicas da sua família.",
      qualifications:
        "Parteira licenciada com mais de 10 anos de experiência, certificada em práticas de parto portuguesas e internacionais, fluente em inglês e português.",
      stats: {
        experience: "Anos de Experiência",
        families: "Famílias Apoiadas",
        languages: "Idiomas Falados",
        satisfaction: "Taxa de Satisfação",
      },
      values: {
        title: "Os Nossos Valores",
        subtitle: "Os princípios que orientam a nossa abordagem aos cuidados de obstetrícia.",
        compassionate: {
          title: "Cuidados Compassivos",
          description: "Cada família merece apoio personalizado e empático durante este momento especial.",
        },
        cultural: {
          title: "Sensibilidade Cultural",
          description: "Compreender e respeitar contextos diversos e preferências de parto.",
        },
        family: {
          title: "Centrado na Família",
          description: "Apoiar não apenas as mães, mas famílias inteiras durante a jornada de gravidez.",
        },
        evidence: {
          title: "Baseado em Evidências",
          description: "Combinando sabedoria tradicional com práticas modernas apoiadas por investigação.",
        },
      },
      qualificationsSection: {
        title: "Qualificações e Experiência",
        certifications: "Certificações",
        specializations: "Especializações",
        licensedMidwife: "Parteira Licenciada (Portugal)",
        childbirth: "Educação Internacional para o Parto",
        lactation: "Certificação de Consultora de Lactação",
        highRisk: "Apoio a gravidezes de alto risco",
        natural: "Advocacia do parto natural",
        mental: "Saúde mental pós-parto",
      },
      cta: "Entre em Contacto",
    },
    connect: {
      title: "Conecte-se Connosco",
      subtitle:
        "Junte-se à nossa comunidade de famílias e mantenha-se actualizada com dicas, histórias e apoio para a sua jornada de gravidez.",
      instagram: {
        title: "Instagram",
        description: "Dicas diárias, histórias de parto e momentos dos bastidores da nossa prática de obstetrícia.",
      },
      facebook: {
        title: "Facebook",
        description: "Junte-se à nossa comunidade de apoio de famílias anglófonas no Porto.",
      },
      newsletter: {
        title: "Mantenha-se Conectada",
        description:
          "Receba dicas semanais de gravidez, recursos locais do Porto e actualizações da nossa prática na sua caixa de correio electrónico.",
        placeholder: "Insira o seu endereço de correio electrónico",
        button: "Subscrever",
      },
    },
    contact: {
      title: "Entre em Contacto",
      subtitle: "Pronta para começar a sua jornada? Estamos aqui para a apoiar em cada passo do caminho.",
      form: {
        name: "Nome Completo",
        email: "Endereço de Correio Electrónico",
        phone: "Número de Telefone",
        service: "Serviço de Interesse",
        dueDate: "Data Prevista do Parto",
        message: "Mensagem",
        submit: "Enviar Mensagem",
        sending: "A enviar...",
      },
      services: {
        prenatal: "Cuidados Pré-natais",
        birth: "Apoio ao Parto",
        postnatal: "Cuidados Pós-natais",
        consultation: "Consulta Inicial",
      },
      info: {
        phone: "+351 XXX XXX XXX",
        email: "hello@maternonest.com",
        address: "Porto, Portugal",
        hours: "Segunda a Sexta: 9h00 às 18h00",
      },
      success: "Obrigada pela sua mensagem! Entraremos em contacto consigo nas próximas 24 horas.",
      error: "Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente.",
    },
  },
} as const
