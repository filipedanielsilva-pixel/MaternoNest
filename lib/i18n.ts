export const defaultLocale = "pt"
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
        features: [
          "Regular health monitoring",
          "Nutritional guidance",
          "Birth plan development",
          "Cultural sensitivity",
        ],
      },
      birth: {
        title: "Birth Support",
        description: "Empowering you with a nurturing environment for your birth experience.",
        detailed:
          "Whether you're planning a home birth, hospital birth, or birth centre delivery, we provide continuous support, advocacy, and expertise to help you achieve the birth experience you desire.",
        features: [
          "Continuous labor support",
          "Birth advocacy",
          "Pain management techniques",
          "Partner support guidance",
        ],
      },
      postnatal: {
        title: "Postnatal Care",
        description: "Comprehensive support for you and your newborn, ensuring a smooth transition.",
        detailed:
          "Our postnatal care includes breastfeeding support, newborn care guidance, postpartum recovery assistance, and emotional support during this important transition period.",
        features: ["Breastfeeding support", "Newborn care guidance", "Recovery assistance", "Emotional support"],
      },
    },
    servicesPage: {
      title: "Our Services",
      subtitle:
        "Comprehensive midwifery care designed specifically for English-speaking families in Porto, combining international best practices with local expertise.",
      bookConsultation: "Book Consultation",
      whyChoose: {
        title: "Why Choose MaternoNest?",
        licensed: {
          title: "Licensed & Experienced",
          description: "Over 10 years of midwifery experience with Portuguese and international certifications.",
        },
        bilingual: {
          title: "Bilingual Support",
          description: "Fluent in English and Portuguese, ensuring clear communication throughout your journey.",
        },
        flexible: {
          title: "Flexible Care",
          description: "Personalised care plans that adapt to your schedule, preferences, and cultural needs.",
        },
      },
    },
    blog: {
      title: "Pregnancy & Birth Blog",
      subtitle:
        "Expert insights, practical tips, and guidance for your pregnancy journey in Porto. Written specifically for English-speaking families navigating Portuguese healthcare.",
      searchPlaceholder: "Search articles...",
      allArticles: "All Articles",
      featuredArticle: "Featured Article",
      readArticle: "Read Article",
      read: "Read",
      noArticles: "No articles found matching your search.",
      newsletter: {
        title: "Stay Updated",
        description: "Get the latest articles and pregnancy tips delivered to your inbox.",
        placeholder: "Enter your email",
        subscribe: "Subscribe",
      },
    },
    about: {
      title: "About MaternoNest",
      subtitle:
        "Dedicated to supporting families throughout Portugal with compassionate, culturally-sensitive midwifery care",
      story:
        "Founded with a passion for supporting English-speaking families throughout Portugal, MaternoNest bridges the gap between traditional Portuguese healthcare and the needs of international families. Our bilingual approach and online consultations ensure you feel understood and supported throughout your pregnancy journey, wherever you are in Portugal.",
      mission:
        "Our mission is to provide personalised, evidence-based midwifery care that honours your choices, respects your cultural background, and supports your family's unique needs. Through both in-person and virtual consultations, we make expert midwifery care accessible to families across Portugal.",
      qualifications:
        "Licensed Midwife with over 10 years of experience, certified in both Portuguese and international birthing practices, fluent in English and Portuguese. Specialising in supporting international families through virtual and in-person consultations.",
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
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      location: "Location",
      whatToExpect: {
        title: "What to Expect",
        quickResponse: {
          title: "Quick Response",
          description: "We'll respond within 24 hours",
        },
        freeConsultation: {
          title: "Free Consultation",
          description: "Initial 15-minute phone consultation",
        },
        personalizedCare: {
          title: "Personalised Care",
          description: "Tailored to your unique needs",
        },
      },
      sendMessage: "Send us a Message",
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
        email: "info@maternonest.com",
        address: "Portugal",
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions from families considering midwifery care in Portugal.",
        q1: {
          question: "Do you work with hospitals in Portugal?",
          answer:
            "Yes, we collaborate with several hospitals and birth centres throughout Portugal. We can support you regardless of where you plan to give birth.",
        },
        q2: {
          question: "What if I don't speak Portuguese?",
          answer:
            "That's exactly why we're here! We provide full bilingual support and can help translate and advocate for you throughout your pregnancy and birth experience.",
        },
        q3: {
          question: "When should I contact a midwife?",
          answer:
            "The earlier, the better! Many families contact us as soon as they discover they're pregnant, but we can support you at any stage of your pregnancy journey.",
        },
        q4: {
          question: "Do you accept insurance?",
          answer:
            "We work with several private insurance providers and can help you understand your coverage options. We also offer flexible payment plans for private pay clients.",
        },
      },
      emergency: {
        title: "Need Immediate Support?",
        description:
          "For urgent pregnancy-related concerns, please contact your healthcare provider or emergency services. For non-urgent questions, we typically respond within 24 hours.",
      },
      success: "Thank you for your message! We'll get back to you within 24 hours.",
      error: "There was an error sending your message. Please try again.",
    },
    newsletter: {
      title: "Stay Connected",
      description: "Get weekly pregnancy tips and updates from our practice delivered to your inbox.",
      placeholder: "Enter your email address",
      subscribe: "Subscribe",
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
        features: [
          "Monitorização regular da saúde",
          "Orientação nutricional",
          "Desenvolvimento do plano de parto",
          "Sensibilidade cultural",
        ],
      },
      birth: {
        title: "Apoio ao Parto",
        description: "Capacitando-a com um ambiente acolhedor para a sua experiência de parto.",
        detailed:
          "Quer esteja a planear um parto em casa, no hospital ou numa casa de parto, fornecemos apoio contínuo, advocacia e experiência para a ajudar a alcançar a experiência de parto que deseja.",
        features: [
          "Apoio contínuo durante o trabalho de parto",
          "Advocacia do parto",
          "Técnicas de gestão da dor",
          "Orientação de apoio ao parceiro",
        ],
      },
      postnatal: {
        title: "Cuidados Pós-natais",
        description: "Apoio abrangente para si e o seu recém-nascido, garantindo uma transição suave.",
        detailed:
          "Os nossos cuidados pós-natais incluem apoio à amamentação, orientação sobre cuidados com o recém-nascido, assistência na recuperação pós-parto e apoio emocional durante este período importante de transição.",
        features: [
          "Apoio à amamentação",
          "Orientação sobre cuidados com recém-nascidos",
          "Assistência na recuperação",
          "Apoio emocional",
        ],
      },
    },
    servicesPage: {
      title: "Os Nossos Serviços",
      subtitle:
        "Cuidados de obstetrícia abrangentes concebidos especificamente para famílias anglófonas no Porto, combinando as melhores práticas internacionais com experiência local.",
      bookConsultation: "Marcar Consulta",
      whyChoose: {
        title: "Porquê Escolher a MaternoNest?",
        licensed: {
          title: "Licenciada e Experiente",
          description: "Mais de 10 anos de experiência em obstetrícia com certificações portuguesas e internacionais.",
        },
        bilingual: {
          title: "Apoio Bilingue",
          description: "Fluente em inglês e português, garantindo comunicação clara durante toda a sua jornada.",
        },
        flexible: {
          title: "Cuidados Flexíveis",
          description:
            "Planos de cuidados personalizados que se adaptam ao seu horário, preferências e necessidades culturais.",
        },
      },
    },
    blog: {
      title: "Blogue de Gravidez e Parto",
      subtitle:
        "Conhecimentos especializados, dicas práticas e orientação para a sua jornada de gravidez no Porto. Escrito especificamente para famílias anglófonas que navegam nos cuidados de saúde portugueses.",
      searchPlaceholder: "Pesquisar artigos...",
      allArticles: "Todos os Artigos",
      featuredArticle: "Artigo em Destaque",
      readArticle: "Ler Artigo",
      read: "Ler",
      noArticles: "Não foram encontrados artigos que correspondam à sua pesquisa.",
      newsletter: {
        title: "Mantenha-se Actualizada",
        description: "Receba os artigos mais recentes e dicas de gravidez na sua caixa de correio electrónico.",
        placeholder: "Insira o seu correio electrónico",
        subscribe: "Subscrever",
      },
    },
    about: {
      title: "Sobre a MaternoNest",
      subtitle:
        "Dedicados a apoiar famílias em todo o Portugal com cuidados de obstetrícia compassivos e culturalmente sensíveis",
      story:
        "Fundada com paixão por apoiar famílias anglófonas em todo o Portugal, a MaternoNest faz a ponte entre os cuidados de saúde tradicionais portugueses e as necessidades das famílias internacionais. A nossa abordagem bilingue e consultas online garantem que se sinta compreendida e apoiada durante toda a sua jornada de gravidez, onde quer que esteja em Portugal.",
      mission:
        "A nossa missão é fornecer cuidados de obstetrícia personalizados e baseados em evidências que honram as suas escolhas, respeitam o seu contexto cultural e apoiam as necessidades únicas da sua família. Através de consultas presenciais e virtuais, tornamos os cuidados especializados de obstetrícia acessíveis a famílias em todo o Portugal.",
      qualifications:
        "Parteira licenciada com mais de 10 anos de experiência, certificada em práticas de parto portuguesas e internacionais, fluente em inglês e português. Especializada em apoiar famílias internacionais através de consultas virtuais e presenciais.",
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
      contactInfo: "Informações de Contacto",
      phone: "Telefone",
      email: "Correio Electrónico",
      location: "Localização",
      whatToExpect: {
        title: "O Que Esperar",
        quickResponse: {
          title: "Resposta Rápida",
          description: "Responderemos em 24 horas",
        },
        freeConsultation: {
          title: "Consulta Gratuita",
          description: "Consulta telefónica inicial de 15 minutos",
        },
        personalizedCare: {
          title: "Cuidados Personalizados",
          description: "Adaptados às suas necessidades únicas",
        },
      },
      sendMessage: "Envie-nos uma Mensagem",
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
        email: "info@maternonest.com",
        address: "Portugal",
      },
      faq: {
        title: "Perguntas Frequentes",
        subtitle: "Questões comuns de famílias que consideram cuidados de obstetrícia em Portugal.",
        q1: {
          question: "Trabalham com hospitais em Portugal?",
          answer:
            "Sim, colaboramos com vários hospitais e casas de parto em todo o Portugal. Podemos apoiá-la independentemente de onde planeia dar à luz.",
        },
        q2: {
          question: "E se eu não falar português?",
          answer:
            "É exactamente por isso que estamos aqui! Fornecemos apoio bilingue completo e podemos ajudar a traduzir e defender os seus interesses durante toda a sua experiência de gravidez e parto.",
        },
        q3: {
          question: "Quando devo contactar uma parteira?",
          answer:
            "Quanto mais cedo, melhor! Muitas famílias contactam-nos assim que descobrem que estão grávidas, mas podemos apoiá-la em qualquer fase da sua jornada de gravidez.",
        },
        q4: {
          question: "Aceitam seguros?",
          answer:
            "Trabalhamos com vários fornecedores de seguros privados e podemos ajudá-la a compreender as suas opções de cobertura. Também oferecemos planos de pagamento flexíveis para clientes particulares.",
        },
      },
      emergency: {
        title: "Precisa de Apoio Imediato?",
        description:
          "Para preocupações urgentes relacionadas com a gravidez, contacte o seu prestador de cuidados de saúde ou os serviços de emergência. Para questões não urgentes, normalmente respondemos em 24 horas.",
      },
      success: "Obrigada pela sua mensagem! Entraremos em contacto consigo nas próximas 24 horas.",
      error: "Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente.",
    },
    newsletter: {
      title: "Mantenha-se Conectada",
      description:
        "Receba dicas semanais de gravidez e actualizações da nossa prática na sua caixa de correio electrónico.",
      placeholder: "Insira o seu endereço de correio electrónico",
      subscribe: "Subscrever",
    },
  },
} as const
