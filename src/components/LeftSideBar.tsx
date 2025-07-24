'use client';
import Link from 'next/link';
import { SocialIcons } from './SocialIcons';

export default function SideBars() {
  return (
    <>
      {/* Social Icons fixed at bottom left, displayed vertically */}
      <div className="fixed left-0 bottom-0 p-4">
        <SocialIcons vertical />
      </div>
      {/* Resume link fixed at center right with rotated text using "Android 7" font */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <Link href="/resumee.pdf" target="_blank" rel="noopener noreferrer">
          <span
            className="-rotate-90 block text-xl font-semibold text-white transition-all duration-300 hover:text-[var(--coral)] hover:scale-110"
            style={{ fontFamily: '"Android 7"' }}
          >
            Resume
          </span>
        </Link>
      </div>
    </>
  );
}
