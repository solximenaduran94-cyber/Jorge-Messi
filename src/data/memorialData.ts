import { SocialHandle, CondolenceMessage } from '../types';

export const JORGE_MESSI_INFO = {
  fullName: "Jorge Horacio Messi",
  birthYear: 1958,
  deathDate: "Sábado, 8 de Agosto de 2026",
  timeOfDeath: "02:00 a. m.",
  age: 68,
  location: "Sanatorio Centro",
  city: "Rosario, Santa Fe, Argentina",
  role: "Padre, mentor y representante de Lionel Andrés Messi",
  cause: "Cáncer (enfermedad prolongada agravada en los últimos meses)",
  medicalDirector: "Dr. Carlos Mackey",
  medicalStatement: "El Sanatorio Centro confirma con profundo pesar el fallecimiento del Sr. Jorge Horacio Messi a las 02:00 horas del 8 de agosto de 2026. Solicitamos a la opinión pública y a los medios de comunicación el mayor de los respetos y privacidad para toda la familia Messi en este momento de inmenso dolor.",
};

export const OFFICIAL_NETWORKS: SocialHandle[] = [
  {
    platform: "Instagram Oficial",
    handle: "@leomessi",
    url: "https://www.instagram.com/leomessi",
    description: "Cuenta oficial verificada de Lionel Messi. Red principal donde recibe los mensajes de sus fanáticos y seres queridos.",
    iconType: "instagram",
    verified: true,
  },
  {
    platform: "Facebook Oficial",
    handle: "Leo Messi",
    url: "https://www.facebook.com/leomessi",
    description: "Página oficial verificada en Facebook con actualizaciones de su carrera y comunicados.",
    iconType: "facebook",
    verified: true,
  },
  {
    platform: "Sitio Web Oficial",
    handle: "messi.com",
    url: "https://messi.com",
    description: "Portal oficial de Lionel Messi donde su equipo de gestión publica comunicados de prensa e información institucional.",
    iconType: "globe",
    verified: true,
  },
  {
    platform: "YouTube Oficial",
    handle: "Leo Messi",
    url: "https://www.youtube.com/@leomessi",
    description: "Canal oficial de YouTube de Lionel Messi.",
    iconType: "youtube",
    verified: true,
  },
  {
    platform: "Instagram de Jorge Messi",
    handle: "@jorge.sole",
    url: "https://www.instagram.com/jorge.sole",
    description: "Cuenta personal de Instagram donde Jorge Messi compartía momentos familiares y del entorno más cercano.",
    iconType: "instagram",
    verified: false,
  }
];

export const FOOTBALL_HOMAGES = [
  {
    entity: "Asociación del Fútbol Argentino (AFA)",
    badge: "Luto Oficial",
    detail: "Decretó luto oficial en todo el fútbol argentino, disponiendo un minuto de silencio obligatorio y el uso de crespón/brazalete negro en todos los partidos de la fecha."
  },
  {
    entity: "Newell's Old Boys",
    badge: "Rosario, Argentina",
    detail: "El club de los amores de la infancia de Leo y Jorge en Rosario emitió un sentido mensaje recordando sus raíces leprosis y acompañando a la familia Messi."
  },
  {
    entity: "FC Barcelona",
    badge: "España",
    detail: "Envió sus más sinceras condolencias recordando la etapa decisiva en la que Jorge acompañó la llegada y consagración de Leo al fútbol europeo."
  },
  {
    entity: "Real Madrid C.F.",
    badge: "España",
    detail: "El club madrileño emitió un comunicado oficial manifestando sus condolencias a Lionel Messi y a sus allegados en un gesto de respeto deportivo."
  },
  {
    entity: "Inter Miami CF",
    badge: "EE. UU.",
    detail: "Expresó el apoyo incondicional de toda la institución, jugadores y directiva hacia Lionel y su familia en este difícil trance."
  }
];

export const FAKE_NEWS_CLARIFICATION = {
  title: "Aclaración sobre antecedentes de noticias falsas",
  date: "18 de junio de 2026",
  details: "Es importante recordar que el 18 de junio de 2026 circuló un rumor falso sobre su deceso iniciado en un programa de televisión en Argentina (conducido por Florencia Peña). En aquel momento, la familia desmintió la noticia aclarando que Jorge se encontraba con vida y bajo tratamiento médico. Tristemente, el deceso real y definitivo aconteció en el Sanatorio Centro este sábado 8 de agosto de 2026 a las 02:00 a. m."
};

export const INITIAL_CONDOLENCES: CondolenceMessage[] = [
  {
    id: "m1",
    name: "Mateo R.",
    location: "Rosario, Santa Fe, Argentina",
    category: "oracion",
    text: "Mucha fuerza Leo querido y a toda la familia Messi. Jorge siempre estuvo ahí, luchando desde los comienzos en Grandoli y Newell's. Hoy todo Rosario reza por el descanso de su alma.",
    createdAt: "Hace 15 minutos",
    candleLit: true,
    likes: 142
  },
  {
    id: "m2",
    name: "Sofía & Familia",
    location: "Barcelona, España",
    category: "fuerza",
    text: "Desde Catalunya les enviamos nuestro abrazo más sentido. Gracias Jorge por haber protegido y acompañado al rey del fútbol. Un abrazo enorme a Leo, Antonela y a los nietos.",
    createdAt: "Hace 32 minutos",
    candleLit: true,
    likes: 98
  },
  {
    id: "m3",
    name: "Carlos Eduardo",
    location: "Buenos Aires, Argentina",
    category: "condolencia",
    text: "Q.E.P.D. Jorge Messi. Acompañamos a nuestro capitán en este día de profundo dolor. Gracias por haberle dado a la Argentina y al mundo la persona y el deportista más humilde y grande de la historia.",
    createdAt: "Hace 1 hora",
    candleLit: true,
    likes: 215
  },
  {
    id: "m4",
    name: "Gabriel V.",
    location: "Miami, Florida, EE. UU.",
    category: "homenaje",
    text: "Que la paz de Dios reconforte el corazón de Leo y de todos sus hermanos. Encendemos esta vela virtual en señal de respeto y gratitud eterna.",
    createdAt: "Hace 2 horas",
    candleLit: true,
    likes: 87
  },
  {
    id: "m5",
    name: "Lucía & Marcos",
    location: "Cordoba, Argentina",
    category: "oracion",
    text: "Elevamos nuestras oraciones por la luz eterna de Jorge Messi. La humilde fuerza de un padre trabajador que educó con valores intachables al 10 de todos los argentinos.",
    createdAt: "Hace 3 horas",
    candleLit: true,
    likes: 112
  },
  {
    id: "m6",
    name: "Peña Filial Napoli 'D10S'",
    location: "Nápoles, Italia",
    category: "homenaje",
    text: "Abbraccio forte a Leo e a tutta la famiglia Messi. Napoli piange con voi la scomparsa di un grande padre e guida. Riposa in pace, Don Jorge.",
    createdAt: "Hace 4 horas",
    candleLit: true,
    likes: 164
  },
  {
    id: "m7",
    name: "Valentina D.",
    location: "Montevideo, Uruguay",
    category: "fuerza",
    text: "Un abrazo fraterno desde la otra orilla del Río de la Plata. Todo el pueblo uruguayo está con la familia Messi en este momento triste.",
    createdAt: "Hace 5 horas",
    candleLit: true,
    likes: 74
  },
  {
    id: "m8",
    name: "Familia Liorah Studio",
    location: "Rosario, Argentina",
    category: "condolencia",
    text: "Realizado con profundo respeto para resguardar las oraciones del mundo en honor a Jorge Horacio Messi. Paz en su tumba y consuelo divino para su esposa Celia e hijos.",
    createdAt: "Hace 6 horas",
    candleLit: true,
    likes: 310
  }
];

export const QUICK_TEMPLATES = [
  "Mucha fuerza Leo, Argentina y el mundo entero te abrazan en este momento. Mis oraciones para tu papá Jorge.",
  "Que en paz descanse Jorge Messi. Gracias por guiarlo y acompañarlo siempre. Dios reconforte a toda la familia.",
  "Un abrazo fraterno desde el corazón a ti, a tus hermanos y a tu mamá Celia. Estamos con ustedes en la oración.",
  "Luz eterna para Jorge. Gracias por todo tu esfuerzo silencioso para cumplir los sueños de tu hijo."
];
