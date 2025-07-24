"use client";
import { projects } from '../lib/projects';
import { ProjectCard } from './ProjectCard';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContactSection } from './ContactSection';

export function ProjectsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [sectionStart, setSectionStart] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [showContact, setShowContact] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [sectionStart - 300, sectionStart], [0, 1]);
  const scale = useTransform(scrollY, [sectionStart - 100, sectionStart], [0.95, 1]);

  useEffect(() => {
    const updateDimensions = () => {
      if (sectionRef.current && containerRef.current) {
        const section = sectionRef.current;
        const container = containerRef.current;
        setSectionStart(section.offsetTop);
        setSectionHeight(section.offsetHeight);
        setContainerWidth(container.scrollWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollProgress = Math.max(0, Math.min(
        (scrollY - sectionStart) / sectionHeight,
        1
      ));
      
      const maxTranslate = Math.max(containerWidth - viewportWidth, 0);
      const newTranslate = -maxTranslate * scrollProgress;
      setTranslateX(newTranslate);

      // Show contact section when scroll reaches 90% of projects grid
      setShowContact(scrollProgress > 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionStart, sectionHeight, containerWidth, viewportWidth]);

  return (
    <>
      <motion.section
        id="work"
        ref={sectionRef}
        className="h-screen sticky top-0 overflow-hidden py-24 px-8 sm:px-12 lg:px-16"
        style={{ opacity, scale }}
      >
        {/* Gradient scroll indicators */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex flex-row items-center h-full gap-12 will-change-transform"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
            key={project.id}
            className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] p-8 group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Wrapper div to ensure single child */}
            <div className="w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-rose-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative transform transition-all duration-500 hover:scale-[1.02] active:scale-100">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl" />
                <div className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all">
                  <ProjectCard project={project} />
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact section appears after projects grid scroll */}
      <div className={`relative transition-opacity duration-500 ${showContact ? 'opacity-100' : 'opacity-0'}`}>
        <ContactSection />
      </div>

      {/* Spacer to ensure smooth scroll transition */}
      <div className="h-[50vh]" />
    </>
  );
}