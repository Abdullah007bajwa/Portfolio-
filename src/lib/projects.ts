/**
 * @file projects.ts
 * @description This file exports an array of project data for the portfolio application.
 * Each project adheres to the Project interface, ensuring type safety and consistency.
 */

/**
 * Defines the structure of a portfolio project.
 */
export interface Project {
  /** Unique identifier for the project */
  id: number;
  /** The display title of the project */
  title: string;
  /** A brief description of the project */
  description: string;
  /** A detailed description for modal or extended views */
  detailDescription: string;
  /** Relative path to the project's thumbnail image */
  image: string;
  /** Relative path to a more detailed image for project popups */
  detailImage: string;
  /** URL for the live demo of the project */
  demoUrl: string;
  /** URL for the project's source code repository */
  codeUrl: string;
}

/**
 * An array of projects for the portfolio.
 */
export const projects: Project[] = [
  {
    id: 8,
    title: "Cuddly Fortnight",
    description: "Real-time text prediction dashboard.",
    detailDescription:
      "An interactive dashboard that delivers real-time text predictions using advanced machine learning models, providing a seamless user experience for predictive typing and text completion.",
    image: "/images/work-8.png",
    detailImage: "/images/work-8.png",
    demoUrl: "https://cuddly-fortnight-o8t6.onrender.com/",
    codeUrl: "https://github.com/Abdullah007bajwa/cuddly-fortnight",
  },
  {
    id: 1,
    title: "Workout Video Classifier",
    description: "AI-driven exercise video classification using deep learning.",
    detailDescription:
      "Achieved 95% accuracy with a TensorFlow-based classifier that analyzes and classifies workout videos, enhancing exercise tracking and providing actionable feedback.",
    image: "/images/work-1.jpg",
    detailImage: "/images/work-1.jpg",
    demoUrl: "https://github.com/Abdullah007bajwa/WorkoutVideoAnalyzer",
    codeUrl: "https://github.com/Abdullah007bajwa/WorkoutVideoAnalyzer",
  },
  {
    id: 2,
    title: "Stock Pattern Predictor",
    description: "Predictive model using LSTM for stock market trends.",
    detailDescription:
      "Improved stock forecasting accuracy by 20% by leveraging LSTM networks with attention mechanisms to analyze and predict market trends, empowering informed decision-making.",
    image: "/images/work-2.jpg",
    detailImage: "/images/work-2.jpg",
    demoUrl:
      "https://advanced-stock-pattern-prediction-using.onrender.com/",
    codeUrl:
      "https://github.com/Abdullah007bajwa/Advanced-Stock-Pattern-Prediction-using-LSTM-with-Attention-Mechanism-in-TensorFlow",
  },
  {
    id: 3,
    title: "Elderly Companion App",
    description: "Flutter app for senior care with AI companionship and drone assistance.",
    detailDescription:
      "A mobile application designed for elderly care that integrates AI companionship with innovative drone support to ensure safety, engagement, and connectivity. Currently used by over 5 elderly users.",
    image: "/images/work-3.jpg",
    detailImage: "/images/work-3.jpg",
    demoUrl: "https://github.com/Abdullah007bajwa/Elderly_Care_Companion",
    codeUrl: "https://github.com/Abdullah007bajwa/Elderly_Care_Companion",
  },
  {
    id: 4,
    title: "Million Parameter LLM",
    description: "Large language model with millions of parameters for text generation tasks.",
    detailDescription:
      "Developed a 5M+ parameter model with 15% faster inference, capable of generating coherent and contextually rich text, showcasing cutting-edge AI capabilities in natural language processing.",
    image: "/images/work-4.avif",
    detailImage: "/images/work-4.avif",
    demoUrl: "https://github.com/Abdullah007bajwa/Million-Parameter-LLM",
    codeUrl: "https://github.com/Abdullah007bajwa/Million-Parameter-LLM",
  },
  {
    id: 7,
    title: "MintArt",
    description: "Flutter-based platform for AI image generation.",
    detailDescription:
      "A comprehensive platform for AI-powered image generation built with Flutter. Features a responsive UI, secure payment integration, and an intuitive interface for creating digital art.",
    image: "/images/work-7.png",
    detailImage: "/images/work-7.png",
    demoUrl: "https://github.com/Abdullah007bajwa/MintArt",
    codeUrl: "https://github.com/Abdullah007bajwa/MintArt",
  },
  {
    id: 6,
    title: "Recipe",
    description: "A modern web application for browsing and managing recipes.",
    detailDescription:
      "Recipe is a full-featured web application built to help users browse, save, and share recipes. It features an intuitive interface, advanced search capabilities, and integration with external APIs for culinary content, offering a seamless experience for food enthusiasts.",
    image: "/images/work-6.png",
    detailImage: "/images/work-6.png",
    demoUrl: "https://abdullah007bajwa.github.io/Recipe",
    codeUrl: "https://github.com/Abdullah007bajwa/Recipe",
  },
  {
    id: 9,
    title: "EAGLE WINGS - AI Drone Assistant",
    description: "AI-powered drone assistant for enhanced safety and automation.",
    detailDescription:
      "An innovative project integrating facial recognition, autonomous charging, and interactive chatbot support, delivering a state-of-the-art AI drone assistant for smart environments.",
    image: "/images/work-9.jpg",
    detailImage: "/images/work-9.jpg",
    demoUrl: "https://github.com/Abdullah007bajwa/Eagle-Wings",
    codeUrl: "https://github.com/Abdullah007bajwa/Eagle-Wings",
  },
  {
    id: 5,
    title: "Stella - The Chatbot",
    description: "Voice-based AI chatbot for natural language conversations.",
    detailDescription:
      "An interactive voice-based chatbot that leverages advanced AI to deliver seamless conversational experiences and automate smart home devices.",
    image: "/images/work-5.png",
    detailImage: "/images/work-5.png",
    demoUrl: "https://github.com/Abdullah007bajwa/Stella-TheChatbot",
    codeUrl: "https://github.com/Abdullah007bajwa/Stella-TheChatbot",
  },
  {
    id: 10,
    title: "Home Automation System",
    description: "IoT-based lighting and security automation solution.",
    detailDescription:
      "A robust IoT solution that provides lighting and security automation with over 90% voice accuracy, integrating smart devices to create a safer and more efficient home environment.",
    image: "/images/work-10.png",
    detailImage: "/images/work-10.png",
    demoUrl: "https://github.com/Abdullah007bajwa/Home-Automation-System",
    codeUrl: "https://github.com/Abdullah007bajwa/Home-Automation-System",
  },
  {
    id: 11,
    title: "Face Detection",
    description: "Real-time face detection using advanced computer vision.",
    detailDescription:
      "Implemented state-of-the-art face detection using TensorFlow/PyTorch and OpenCV, achieving high accuracy in real-time performance across diverse lighting conditions and backgrounds.",
    image: "/images/work-11.jpg",
    detailImage: "/images/work-11.jpg",
    demoUrl: "https://github.com/Abdullah007bajwa/Face-Detection",
    codeUrl: "https://github.com/Abdullah007bajwa/Face-Detection",
  },
  {
    id: 12,
    title: "HuBiCEM - Hunar Bin Cost Evaluation Model",
    description: "Advanced cost evaluation model for individual developer performance.",
    detailDescription:
      "HuBiCEM (Hunar Bin Cost Evaluation Model) is an innovative tool that estimates the performance of each developer individually rather than evaluating the team as a whole. It features sprint-based task evaluation, per-developer performance prediction using linear regression, and detailed cost and time estimates for future sprints.",
    image: "/images/work-12.png",
    detailImage: "/images/work-12.png",
    demoUrl: "https://github.com/HuBiCEM",
    codeUrl: "https://github.com/HuBiCEM",
  },
];
