/**
 * @file animations.ts
 * @description Contains custom page transition animations for the portfolio.
 */

/**
 * Triggers a fade-in animation on the element with the ID "view-transition".
 * This function uses the Web Animations API and gracefully falls back if not supported.
 */
export function animatePageIn() {
    if (typeof document === 'undefined') return;
  
    const el = document.getElementById('view-transition');
    if (el && el.animate) {
      el.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          duration: 500,
          easing: 'ease-out',
          fill: 'forwards'
        }
      );
    }
  }
  