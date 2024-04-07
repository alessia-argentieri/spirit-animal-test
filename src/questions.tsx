export type Question = {
  question: string;
  choices: string[];
  letters: string[];
};

export const data: Question[] = [
  {
    question: "What is your favourite element?",
    choices: ["Water", "Fire", "Earth", "Air"],
    letters: ["A", "B", "C", "D"],
  },
  {
    question: "When do you feel most relaxed and at peace?",
    choices: [
      "In a dark, silent night",
      "Under a refreshing rain",
      "On a windy cliff",
      "In a hot, sunny day",
    ],
    letters: ["C", "A", "D", "B"],
  },
  {
    question: "What is most important to you?",
    choices: [
      "Exploring the world",
      "Achieving your goals",
      "Protecting your family",
      "Helping others",
    ],
    letters: ["D", "B", "C", "A"],
  },
  {
    question: "What kind of holiday would you prefer?",
    choices: [
      "A luxury weekend with your partner",
      "A road trip with your friends",
      "A trip around the world by yourself",
      "A nature trip with your family",
    ],
    letters: ["B", "A", "D", "C"],
  },
  {
    question: "What quality do you appreciate the most in a person?",
    choices: ["Courage", "Generosity", "Confidence", "Independence"],
    letters: ["C", "A", "B", "D"],
  },
  {
    question: "Which of the following outdoor activities do you prefer?",
    choices: [
      "A mountain climb",
      "A picnic in the park",
      "A hike in the woods",
      "A run on the beach",
    ],
    letters: ["D", "A", "C", "B"],
  },
  {
    question: "What would you like to do to celebrate your birthday?",
    choices: [
      "Have dinner in an exclusive restaurant",
      "Organise a party with all your friends",
      "Enjoy a chilled day with your family or close friends",
      "Spend the day outside visiting a new place",
    ],
    letters: ["B", "A", "C", "D"],
  },

  {
    question: "What is the key to be happy with yourself and your life?",
    choices: [
      "Valuing and protecting the people you love",
      "Expanding your knowledge and understanding of the world",
      "Having a wide circle of supportive friends",
      "Being focused and determined",
    ],
    letters: ["C", "D", "A", "B"],
  },
  {
    question: "What would you do if someone tries to intimidate you?",
    choices: [
      "Become defensive and prepare to fight back",
      "Retaliate immediately",
      "Leave, they're not worth it",
      "Try to engage and reason with them",
    ],
    letters: ["C", "B", "D", "A"],
  },
  {
    question: "What is your most important goal?",
    choices: [
      "To be free to live your life the way you choose",
      "To be liked and loved by the people in your life",
      "To be strong and capable of facing your fears",
      "To be able to protect and support the people you love",
    ],
    letters: ["D", "A", "B", "C"],
  },
  {
    question: "How do you feel about social gatherings and meeting new people?",
    choices: [
      "You love attending social gatherings and meeting new people",
      "You are usually quite reserved and enjoy social gatherings only with close friends and family",
      "You enjoy social gatherings, especially if you are at the centre of the attention ",
      "You find social gatherings interesting when meeting new people from different countries or cultures",
    ],
    letters: ["A", "C", "B", "D"],
  },
  {
    question: "What kind of person would your ideal partner be?",
    choices: [
      "Sensitive and compassionate",
      "Strong and confident",
      "Independent and curious",
      "Brave and loyal",
    ],
    letters: ["A", "B", "D", "C"],
  },
  {
    question: "What is the best strategy to solve a problem?",
    choices: [
      "Thinking independently but acting for the good of the team",
      "Solving the problem independently",
      "Teamwork",
      "Analysing a problem meticulously looking at different perspectives",
    ],
    letters: ["C", "B", "A", "D"],
  },
];

export const descriptions = {
  dolphin:
    "The dolphin is an intelligent and highly sociable animal who symbolises harmony, generosity, joy and cooperation. Having the dolphin as your spirit animal indicates that you are sociable, sympathetic and compassionate as well as intelligent, intuitive and in tune with your inner self.",
  lion: "The lion is a powerful, strong and majestic animal who symbolises strength in overcoming difficulties, confidence and personal power. Having the king of the jungle as your spirit animal indicates that you are determined and tenacious, with the ability to be a great leader, a guide for other people and a source of spiritual strength.",
  wolf: "The wolf is a brave, loyal and intelligent animal who symbolises an intriguing mix of courage, guardianship, teamwork and wildness. Having the wolf as a spirit animal indicates that you possess inner strength, wisdom, courage, loyalty, a selfless instinct to protect who you love and a deep, strong connection to the natural world.",
  eagle:
    "The eagle is a majestic bird known for their ability to soar to great heights, who symbolises freedom, wisdom, and the courage to dare. Having the eagle as a spirit animal indicates that you possess intelligence, curiosity, a strong desire to explore the world and broaden your knowledge and a deep love for freedom.",
};
