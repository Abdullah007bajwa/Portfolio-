"use client";
import React, { useState, useRef, useEffect, JSX } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { cn } from "@/lib/utils";
import { Group, Scene, AnimationClip } from "three";
// Import the unified hook from Hero (ensure it's updated for SSR safety)
import { useWindowSize } from "@/components/Hero";

export function BatmanModel(props: JSX.IntrinsicElements["group"]) {
  const { scene, animations } = useGLTF(
    "/batman__multiversus.glb"
  ) as unknown as { scene: Scene; animations: AnimationClip[] };
  const ref = useRef<Group>(null);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);

  return <primitive object={scene} ref={ref} {...props} />;
}

type TabKey = "skills" | "experience" | "education";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("skills");
  const { width } = useWindowSize();
  const isSmallScreen = width < 768;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "skills", label: "Skills" },
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
  ];

  const tabContent: Record<TabKey, JSX.Element> = {
    skills: (
      <ul className="space-y-2">
        <li>
          <span className="font-bold">Programming:</span> Python, C++, SQL, HTML/CSS
        </li>
        <li>
          <span className="font-bold">Frameworks:</span> TensorFlow, PyTorch, Django, Flask, OpenCV
        </li>
        <li>
          <span className="font-bold">AI/ML:</span> LSTM, Attention Mechanisms, NLP, Model Optimization
        </li>
        <li>
          <span className="font-bold">Computer Vision:</span> Object Detection, Image Classification, Facial Recognition
        </li>
        <li>
          <span className="font-bold">Mobile Development:</span> Flutter, Android
        </li>
        <li>
          <span className="font-bold">Automation:</span> IoT, Smart Systems, Voice Control
        </li>
      </ul>
    ),
    experience: (
      <ul className="space-y-2">
        <li>
          <span className="font-bold">Founder, Bajwa.co</span> – 2020 - Present  
          <br />Spearheaded 5+ AI and automation projects; launched multiple web and mobile apps.
        </li>
        <li>
          <span className="font-bold">Sales Executive, Omega Techtriad LLC</span> – Jul 2023 - Present  
          <br />Managed 10+ daily orders, improving efficiency by 15%.
        </li>
      </ul>
    ),
    education: (
      <ul className="space-y-2">
        <li>
          <span className="font-bold">B.Sc. Artificial Intelligence</span> – UMT, Lahore (Nov 2021 - Present)
        </li>
        <li>
          <span className="font-bold">Intermediate</span> – Aspire Group of Colleges, Gujranwala (Jul 2019 - Jun 2021)
        </li>
      </ul>
    ),
  };

  // Adjust model position and scale for responsiveness
  const modelPosition: [number, number, number] = isSmallScreen ? [0, -1.5, 0] : [-0.5, -1.9, 0];
  const modelScale: [number, number, number] = isSmallScreen ? [0.8, 0.8, 0.8] : [1, 1, 1];
  const canvasContainerClasses = "relative w-full h-[500px] overflow-hidden";
  const canvasCamera = { position: [0, 2, 3] as [number, number, number], fov: 25 };

  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column – 3D Model Canvas */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className={canvasContainerClasses}>
            <Canvas camera={canvasCamera}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 5, 5]} intensity={1} />
              <BatmanModel scale={modelScale} position={modelPosition} rotation={[-0.5, -0.3, 0]} />
            </Canvas>
          </div>
        </div>
        {/* Right Column – About Text and Tabs */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-6">
            Hi! I&apos;m Abdullah Bajwa, an AI Specialist and Software Developer based in Lahore, Pakistan.
            With over 2 years of experience in computer vision, machine learning, and automation, I specialize in building AI-powered solutions, optimizing models, and developing IoT systems that transform complex challenges into streamlined processes.
          </p>
          <div>
            <div className="flex space-x-4 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "py-2 px-4 font-medium focus:outline-none",
                    activeTab === tab.key
                      ? "border-b-2 border-coral text-coral"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Render active tab content */}
            <div className="mt-4">{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
