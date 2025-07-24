"use client";
import React, { useRef, JSX } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { StaggerParent, StaggerChild } from "@/components/ui/motion";
import { Group, Scene } from "three";

// Consolidated useWindowSize hook – exported for reuse
export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return windowSize;
}

// NobleModel with proper type annotations
function NobleModel(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/comic_drone.glb") as unknown as { scene: Scene };
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });
  return <primitive object={scene} ref={ref} {...props} />;
}

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const canvasTranslateY = useTransform(scrollY, [0, 300], [0, -300]);

  const { width } = useWindowSize();
  const isSmallScreen = width < 768;

  const handleExploreWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const canvasWidth = isSmallScreen ? "100vw" : "60vw";
  const cameraPosition: [number, number, number] = isSmallScreen ? [2, 1, 3] : [3, 1, 3];
  const cameraFov = isSmallScreen ? 45 : 42;
  const modelScale: [number, number, number] = isSmallScreen ? [0.5, 0.5, 0.5] : [0.7, 0.7, 0.7];
  const modelPosition: [number, number, number] = isSmallScreen ? [0, -0.5, 0] : [0, -1.0, 0];

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-visible">
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      {/* 3D Model Canvas */}
      <motion.div
        className="absolute top-0 right-0 h-full z-0"
        style={{ translateY: canvasTranslateY, width: canvasWidth }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Canvas camera={{ position: cameraPosition, fov: cameraFov }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <NobleModel scale={modelScale} position={modelPosition} rotation={[0, -0.7, 0]} />
        </Canvas>
      </motion.div>
      {/* Hero Content */}
      <motion.div
        className="relative z-20 max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <StaggerParent>
          <StaggerChild>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance">
              Crafting Digital Experiences at the{" "}
              <span className="bg-gradient-to-r from-coral via-rose-600 to-purple-500 bg-clip-text text-transparent">
                Intersection of AI & Design
              </span>
            </h1>
          </StaggerChild>
          <StaggerChild>
            <div className="mb-12">
              <TypeAnimation
                sequence={[
                  "AI Specialist",
                  2000,
                  "Software Developer",
                  2000,
                  "Computer Vision Expert",
                  2000,
                  "Machine Learning Engineer",
                  2000,
                  "Automation Enthusiast",
                  2000,
                  "IoT Innovator",
                  2000,
                ]}
                className="text-xl md:text-2xl text-muted-foreground font-mono"
                repeat={Infinity}
                speed={25}
              />
            </div>
          </StaggerChild>
          <StaggerChild>
            <Button
              size="xl"
              variant="glow"
              className="group rounded-full px-8 py-6 text-lg"
              onClick={handleExploreWork}
            >
              Explore Work
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </StaggerChild>
        </StaggerParent>
        {/* Bottom Arrow - Render only on larger screens */}
        {!isSmallScreen && (
          <motion.div
            onClick={handleExploreWork}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
