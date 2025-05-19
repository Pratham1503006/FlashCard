import { FlashcardType } from "@/types/flashcard";

export const flashcardData: FlashcardType[] = [
  // Computer Science
  {
    id: 1,
    question: "What is React's Virtual DOM?",
    answer: "A lightweight copy of the actual DOM that React uses to optimize rendering performance.",
    explanation: "React creates a virtual representation of the UI, compares it with the previous version, and only updates what has changed in the real DOM.",
    category: "Computer Science"
  },
  {
    id: 2,
    question: "What are React Hooks?",
    answer: "Functions that let you use state and other React features without writing class components.",
    explanation: "Introduced in React 16.8, hooks like useState and useEffect allow functional components to manage state and side effects.",
    category: "Computer Science"
  },
  {
    id: 3,
    question: "What is TypeScript?",
    answer: "A strongly typed programming language that builds on JavaScript.",
    explanation: "TypeScript adds optional static types, classes, and modules to JavaScript, helping catch errors early in development.",
    category: "Computer Science"
  },
  {
    id: 4,
    question: "What is a REST API?",
    answer: "A software architectural style for distributed systems using HTTP methods.",
    explanation: "REST APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources identified by URLs.",
    category: "Computer Science"
  },
  {
    id: 5,
    question: "What is Git?",
    answer: "A distributed version control system for tracking changes in source code.",
    explanation: "Git allows multiple developers to work on the same codebase, tracking changes and managing different versions.",
    category: "Computer Science"
  },
  
  // Mathematics
  {
    id: 6,
    question: "What is the Pythagorean theorem?",
    answer: "a² + b² = c²",
    explanation: "In a right triangle, the square of the length of the hypotenuse (c) equals the sum of squares of the other two sides (a and b).",
    category: "Mathematics"
  },
  {
    id: 7,
    question: "What is a prime number?",
    answer: "A number that has exactly two factors: 1 and itself.",
    explanation: "Examples include 2, 3, 5, 7, 11. The number 1 is not prime because it has only one factor.",
    category: "Mathematics"
  },
  {
    id: 8,
    question: "What is the quadratic formula?",
    answer: "x = (-b ± √(b² - 4ac)) / 2a",
    explanation: "This formula solves quadratic equations in the form ax² + bx + c = 0",
    category: "Mathematics"
  },
  {
    id: 9,
    question: "What is a logarithm?",
    answer: "The power to which a base must be raised to yield a given number.",
    explanation: "For example, log₂(8) = 3 because 2³ = 8",
    category: "Mathematics"
  },
  {
    id: 10,
    question: "What is the derivative?",
    answer: "The instantaneous rate of change of a function at any given point.",
    explanation: "It measures how fast a function is changing and is fundamental to calculus.",
    category: "Mathematics"
  },
  
  // Physics
  {
    id: 11,
    question: "What is Newton's First Law of Motion?",
    answer: "An object will remain at rest or in uniform motion unless acted upon by an external force.",
    explanation: "Also known as the law of inertia, it describes how objects resist changes to their state of motion.",
    category: "Physics"
  },
  {
    id: 12,
    question: "What is the speed of light in vacuum?",
    answer: "299,792,458 meters per second",
    explanation: "This is a fundamental constant of nature, often denoted as 'c' in equations.",
    category: "Physics"
  },
  {
    id: 13,
    question: "What is quantum entanglement?",
    answer: "A phenomenon where particles become correlated in such a way that the quantum state of each particle cannot be described independently.",
    explanation: "Einstein called it 'spooky action at a distance' because changes to one particle instantly affect its entangled partner.",
    category: "Physics"
  },
  {
    id: 14,
    question: "What is the theory of relativity?",
    answer: "A theory describing the relationship between space, time, gravity, and matter.",
    explanation: "Einstein's theory shows that time and space are relative to the observer's motion.",
    category: "Physics"
  },
  {
    id: 15,
    question: "What is potential energy?",
    answer: "The energy possessed by an object due to its position or configuration.",
    explanation: "Examples include a stretched spring or an object held above the ground.",
    category: "Physics"
  },
  
  // Chemistry
  {
    id: 16,
    question: "What is the atomic number?",
    answer: "The number of protons in an atom's nucleus.",
    explanation: "This number defines the element and is unique for each element in the periodic table.",
    category: "Chemistry"
  },
  {
    id: 17,
    question: "What is a covalent bond?",
    answer: "A chemical bond formed by sharing electrons between atoms.",
    explanation: "Common in molecules like H₂O, where atoms share electron pairs to achieve stable electron configurations.",
    category: "Chemistry"
  },
  {
    id: 18,
    question: "What is pH?",
    answer: "A measure of the hydrogen ion concentration in a solution.",
    explanation: "The pH scale ranges from 0 to 14, with 7 being neutral, below 7 acidic, and above 7 basic.",
    category: "Chemistry"
  },
  {
    id: 19,
    question: "What is the periodic law?",
    answer: "The properties of elements are periodic functions of their atomic numbers.",
    explanation: "This law forms the basis for organizing elements in the periodic table.",
    category: "Chemistry"
  },
  {
    id: 20,
    question: "What is activation energy?",
    answer: "The minimum energy required for a chemical reaction to occur.",
    explanation: "Catalysts lower activation energy, allowing reactions to proceed more quickly.",
    category: "Chemistry"
  },
  
  // Biology
  {
    id: 21,
    question: "What is photosynthesis?",
    answer: "The process by which plants convert light energy into chemical energy.",
    explanation: "Plants use sunlight, water, and CO₂ to produce glucose and oxygen through this process.",
    category: "Biology"
  },
  {
    id: 22,
    question: "What is DNA?",
    answer: "Deoxyribonucleic acid, a molecule carrying genetic instructions for development and functioning of living things.",
    explanation: "DNA contains four nucleotide bases: Adenine (A), Guanine (G), Cytosine (C), and Thymine (T).",
    category: "Biology"
  },
  {
    id: 23,
    question: "What is natural selection?",
    answer: "The process by which organisms better adapted to their environment survive and produce more offspring.",
    explanation: "This mechanism, described by Darwin, drives evolution and adaptation in species.",
    category: "Biology"
  },
  {
    id: 24,
    question: "What is cellular respiration?",
    answer: "The process cells use to break down glucose and produce ATP.",
    explanation: "This process occurs in the mitochondria and provides energy for cellular functions.",
    category: "Biology"
  },
  {
    id: 25,
    question: "What is a gene?",
    answer: "A segment of DNA that codes for a specific protein or functional RNA molecule.",
    explanation: "Genes are inherited from parents and determine traits in organisms.",
    category: "Biology"
  }
];