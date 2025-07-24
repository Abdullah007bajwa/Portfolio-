'use client';
import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

interface SocialIconsProps {
  vertical?: boolean;
}

export function SocialIcons({ vertical = false }: SocialIconsProps) {
  return (
    <div className={vertical ? "flex flex-col space-y-3" : "flex space-x-3"}>
      <Link
        href="https://www.linkedin.com/in/abdullah-bajwa-6a27ab1a1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="h-6 w-6 text-gray-300 transition-all duration-300 hover:text-[var(--coral)] hover:scale-110" />
      </Link>
      <Link
        href="https://github.com/Abdullah007bajwa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-6 w-6 text-gray-300 transition-all duration-300 hover:text-[var(--coral)] hover:scale-110" />
      </Link>
      <Link
        href="mailto:bajwa15523@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className="h-6 w-6 text-gray-300 transition-all duration-300 hover:text-[var(--coral)] hover:scale-110" />
      </Link>
      <Link
        href="tel:+923254749164"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="h-6 w-6 text-gray-300 transition-all duration-300 hover:text-[var(--coral)] hover:scale-110" />
      </Link>
    </div>
  );
}
