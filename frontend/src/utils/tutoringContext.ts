// src/utils/tutoringContext.ts
import { personalData } from "@/data/personalData";

export const getTutoringContext = () => {
  const teacher = {
    name: personalData.fullName,
    education: `${personalData.bsc}${personalData.msc ? `, ${personalData.msc}` : ""}`,
    contact: {
      location: personalData.contactInfo.location,
      phone: personalData.contactInfo.phone,
      email: personalData.contactInfo.email,
    },
    experience: personalData.experiences.find((exp) => exp.name === "Tutoring"),
  };

  const subjects = [
    {
      name: "Matematica",
      description: "Algebra, Geometria, Analisi, Statistica",
      levels: ["Liceo", "Università"],
      topics: [
        "Algebra lineare e geometria",
        "Analisi matematica I e II",
        "Calcolo differenziale e integrale",
        "Statistica e probabilità",
        "Matematica discreta",
        "Preparazione esami universitari",
      ],
    },
    {
      name: "Fisica",
      description: "Meccanica, Termodinamica, Elettromagnetismo",
      levels: ["Liceo", "Università"],
      topics: [
        "Meccanica classica",
        "Termodinamica",
        "Elettromagnetismo",
        "Ottica e onde",
        "Fisica moderna",
        "Laboratorio e problemi applicati",
      ],
    },
    {
      name: "Informatica",
      description: "Programmazione, Algoritmi, Database",
      levels: ["Liceo", "Università"],
      topics: [
        "Fondamenti di programmazione",
        "Algoritmi e strutture dati",
        "Programmazione orientata agli oggetti",
        "Database SQL e NoSQL",
        "Web development (HTML, CSS, JavaScript)",
        "Preparazione progetti universitari",
      ],
    },
  ];

  const faqs = [
    {
      question: "Dove si svolgono le lezioni?",
      answer:
        "Le lezioni possono essere online (Google Meet) o in presenza a Eboli/Salerno.",
    },
    {
      question: "Quanto durano le lezioni?",
      answer:
        "Ogni lezione dura 1 ora, ma possiamo accordarci per sessioni più lunghe se necessario.",
    },
    {
      question: "Come si prenota una lezione?",
      answer:
        "Puoi contattarmi via email, WhatsApp o tramite il chatbot qui sul sito. Ti risponderò entro 24 ore.",
    },
    {
      question: "Quali materiali servono?",
      answer:
        "Per le lezioni online ti serve solo un computer con connessione internet. Per quelle in presenza, porta i tuoi libri e appunti.",
    },
    {
      question: "Si può disdire una lezione?",
      answer:
        "Sì, con almeno 24 ore di preavviso. In caso contrario la lezione verrà comunque addebitata.",
    },
  ];

  return {
    teacher,
    subjects,
    faqs,
  };
};

export const buildSystemPrompt = () => {
  const context = getTutoringContext();

  return `Sei l'assistente virtuale di ${context.teacher.name}, un ${context.teacher.education} che offre lezioni private di Matematica, Fisica e Informatica.

INFORMAZIONI SULL'INSEGNANTE:
- Nome: ${context.teacher.name}
- Qualifica: ${context.teacher.education}
- Esperienza: ${context.teacher.experience?.description || "Esperienza pluriennale nel tutoring"}
- Località: ${context.teacher.contact.location}
- Contatti: ${context.teacher.contact.email} | ${context.teacher.contact.phone}

MATERIE E SERVIZI OFFERTI:
${context.subjects
  .map(
    (subject) => `
${subject.name} (${subject.levels.join(", ")}):
- ${subject.description}
- Argomenti: ${subject.topics.join(", ")}
`
  )
  .join("\n")}

DOMANDE FREQUENTI:
${context.faqs
  .map(
    (faq) => `
Q: ${faq.question}
A: ${faq.answer}
`
  )
  .join("\n")}

INFORMAZIONI SUL PAGAMENTO:
Il pagamento e le tariffe vengono discussi in privato. Invita gli studenti a contattare direttamente ${context.teacher.name} per maggiori dettagli al numero '+39 3384591601'.

IL TUO RUOLO:
- Rispondi in modo cordiale, professionale e disponibile
- Fornisci informazioni dettagliate sulle materie, modalità di lezione e disponibilità
- Aiuta gli studenti a capire quale materia o argomento è più adatto alle loro esigenze
- Incoraggia gli studenti a prenotare una lezione o a contattare direttamente l'insegnante
- Se non conosci una risposta specifica, suggerisci di contattare direttamente ${context.teacher.name}
- Rispondi SEMPRE in italiano
- Mantieni un tono amichevole ma professionale
- Non inventare informazioni che non ti sono state fornite

IMPORTANTE:
- Per questioni di pagamento, rimanda sempre al contatto diretto con l'insegnante
- Se ti chiedono disponibilità specifica, suggerisci di contattare direttamente via email o telefono
- Sii proattivo nel suggerire di prenotare una prima lezione conoscitiva`;
};