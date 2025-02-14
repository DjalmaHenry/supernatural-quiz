interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Round {
  title: string;
  questions: Question[];
}

export const quizData: Round[] = [
  {
    title: "Round 1: Objetos e Artefatos Místicos",
    questions: [
      {
        question: "Qual é o número exato de coisas que o Colt (a arma lendária) supostamente pode matar?",
        options: ["5", "13", "7"],
        correctAnswer: "5"
      },
      {
        question: "Qual ingrediente é necessário para fechar os Portões do Inferno na 8ª temporada?",
        options: [
          "Sangue de um anjo caído (Lúcifer)",
          "Sangue de um Cavaleiro do Inferno (Crowley)",
          "Sangue de um humano inocente"
        ],
        correctAnswer: "Sangue de um Cavaleiro do Inferno (Crowley)"
      },
      {
        question: "Qual livro contém o segredo para derrotar Amara (A Escuridão)?",
        options: [
          "O Livro dos Dannados",
          "O Código de Um Profeta",
          "Os Arquivos Men of Letters"
        ],
        correctAnswer: "O Código de Um Profeta"
      }
    ]
  },
  {
    title: "Round 2: Mortes Memoráveis (e Retornos)",
    questions: [
      {
        question: "Como Bobby Singer morre definitivamente na 8ª temporada?",
        options: [
          "Atacado por um demônio",
          "Baleado por um capanga de Dick Roman",
          "Destruído por um feitiço"
        ],
        correctAnswer: "Baleado por um capanga de Dick Roman"
      },
      {
        question: "Quem Dean mata acidentalmente sob a influência do Mark of Cain?",
        options: [
          "Charlie Bradbury",
          "Kevin Tran",
          "Benny Lafitte"
        ],
        correctAnswer: "Charlie Bradbury"
      },
      {
        question: "Quantas vezes Dean Winchester morre ao longo da série?",
        options: ["3 vezes", "4 vezes", "5 vezes"],
        correctAnswer: "4 vezes"
      }
    ]
  },
  {
    title: "Round 3: Mitologia e Criaturas",
    questions: [
      {
        question: "Qual é o nome do primeiro vampiro (o \"Alfa\")?",
        options: [
          "Dr. Robert Francis",
          "Lenore",
          "Gordon Walker"
        ],
        correctAnswer: "Dr. Robert Francis"
      },
      {
        question: "Qual é a fraqueza original dos Leviatãs?",
        options: ["Prata", "Borax", "Água benta"],
        correctAnswer: "Borax"
      },
      {
        question: "Quem liderava os Cavaleiros do Inferno antes de Crowley?",
        options: ["Azazel", "Lilith", "Alastair"],
        correctAnswer: "Azazel"
      }
    ]
  },
  {
    title: "Round 4: Diálogos e Citações Icônicas",
    questions: [
      {
        question: "Complete a fala de Castiel: \"Eu sou aquele que te agarrou firme e te ergueu das ______.\"",
        options: [
          "chamas do Inferno",
          "profundezas do Perdição",
          "garras de Lúcifer"
        ],
        correctAnswer: "profundezas do Perdição"
      },
      {
        question: "Quem disse: \"Família não acaba com sangue, mas isso não significa que você tem que tolerar besteira.\"?",
        options: [
          "Bobby Singer",
          "John Winchester",
          "Mary Winchester"
        ],
        correctAnswer: "Bobby Singer"
      },
      {
        question: "Qual é a última fala de Dean na série?",
        options: [
          "Sempre guarde o sal.",
          "Ei, Sam... Está tudo bem.",
          "Nós salvamos o mundo, Sammy."
        ],
        correctAnswer: "Ei, Sam... Está tudo bem."
      }
    ]
  },
  {
    title: "Round 5: Detalhes Obscuros e \"Easter Eggs\"",
    questions: [
      {
        question: "Qual é o nome completo de Chuck antes de ser revelado como Deus?",
        options: [
          "Charles Shurley",
          "Carver Edlund",
          "Chuck Norris"
        ],
        correctAnswer: "Charles Shurley"
      },
      {
        question: "Quantos universos alternativos são mostrados na série?",
        options: ["2", "3", "4"],
        correctAnswer: "3"
      },
      {
        question: "Qual é a referência da placa do Impala (KAZ 2Y5)?",
        options: [
          "Ano de fabricação do carro (1967)",
          "Data de estreia da série (2005)",
          "Iniciais de Sam e Dean"
        ],
        correctAnswer: "Data de estreia da série (2005)"
      }
    ]
  },
  {
    title: "Round 6: Vilões e Arcos de Temporada",
    questions: [
      {
        question: "Qual deus pagão se disfarça de entregador de pizza na Temp. 5?",
        options: ["Zeus", "Hermes", "Loki"],
        correctAnswer: "Hermes"
      },
      {
        question: "Quem criou os \"Homens de Letras\" modernos na Europa?",
        options: [
          "Os Stynes",
          "Os British Men of Letters",
          "Os Cavaleiros do Inferno"
        ],
        correctAnswer: "Os Stynes"
      },
      {
        question: "Qual é o propósito do \"Vazio\" (The Empty)?",
        options: [
          "Prisão para anjos rebeldes",
          "Lugar onde entidades cósmicas dormem eternamente",
          "Portal para o Purgatório"
        ],
        correctAnswer: "Lugar onde entidades cósmicas dormem eternamente"
      }
    ]
  },
  {
    title: "Bônus: Para Fãs Ultra-Dedicados",
    questions: [
      {
        question: "Qual música toca na jukebox no último episódio?",
        options: [
          "Renegade",
          "Carry On Wayward Son",
          "Heat of the Moment"
        ],
        correctAnswer: "Carry On Wayward Son"
      },
      {
        question: "Qual é a referência da cela 666 de Lúcifer?",
        options: [
          "Número de anos que ele ficou preso",
          "Número da Besta do Apocalipse",
          "Data da primeira aparição do personagem"
        ],
        correctAnswer: "Número da Besta do Apocalipse"
      }
    ]
  }
];
