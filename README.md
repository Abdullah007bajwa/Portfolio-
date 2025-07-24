# Comic Portfolio – Next.js, 3D, and AI

**[🌐 Live Preview](https://portfolio-14fe6.web.app/)**

This is a modern, full-stack portfolio project built with [Next.js](https://nextjs.org), featuring interactive 3D graphics, dynamic content, and a comic-inspired design. The project demonstrates advanced frontend techniques, API integration, and optimized deployment for a visually rich, high-performance web experience.

---

## 🚀 Features

- **Interactive 3D Hero**: Comic-style drone model (`/comic_drone.glb`) rendered with Three.js and @react-three/fiber.
- **Dynamic Frontend**: Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and responsive layouts.
- **Image Generation API**: Custom API endpoint for AI-powered image generation (see `/api/sendEmail/route.ts` for example API integration).
- **Contact Form**: Sends emails using Nodemailer and Mailjet SMTP.
- **Tabbed About Section**: Switch between Skills, Experience, and Education.
- **Optimized Assets**: Image and model optimization recommended for fast loading.
- **Firebase Hosting**: Static export and CDN caching for global performance.

---

## 🛠️ Technologies

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, @react-three/fiber, @react-three/drei, Lucide-react.
- **3D Models**: GLTF/GLB format, loaded and animated in-browser.
- **Backend/API**: Next.js API routes, Nodemailer (Mailjet), custom image generation endpoint.
- **Deployment**: Firebase Hosting (static export), with optional serverless functions (Blaze plan required for dynamic backend).
- **Build Tools**: imagemin/sharp (recommended for image optimization), DRACO compression for 3D models.

---

## 🎨 Design & UX

- **Color Palette**:  
  - Background: `#18181b`  
  - Foreground: `#f4f4f5`  
  - Accent: Coral (`#ff7f50`), Rose (`#e11d48`), Purple (`#a21caf`)
- **Typography**: Modern sans-serif with animated typewriter effects.
- **Layout**: Responsive, mobile-first, with animated gradients and layered visuals.
- **UX Enhancements**:  
  - Smooth scroll and fade animations  
  - Lazy loading for 3D and images  
  - Accessible navigation and focus states

---

## 📁 Project Structure

```
/public
  /images         # Static images and downloadable assets (e.g., resume)
  /comic_drone.glb  # 3D drone model (not committed to git)
/src
  /components     # React components (Hero, AboutSection, etc.)
  /app/api        # API routes (e.g., sendEmail, image generation)
/out              # Static export for Firebase Hosting
firebase.json     # Hosting and cache configuration
.gitignore        # Excludes node_modules, build, and large binaries
```

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

4. **Build and export for static hosting:**
   ```bash
   npm run build && npm run export
   ```

5. **Deploy to Firebase Hosting:**
   ```bash
   firebase deploy --only hosting
   ```

---

## 🧩 Customization & Optimization

- **3D Models:** Place `.glb` files in `/public` or `/public/models/` (do not commit large binaries; see `.gitignore`).
- **Image Optimization:** Use `imagemin` or `sharp` in your build pipeline.
- **Cache Busting:** Rename assets or use query strings to force updates on Firebase Hosting.
- **API Keys:** Store sensitive data in `.env` files (not committed).

---

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)

---

## 📦 Deployment

- **Firebase Hosting:** Static export with CDN caching for images and assets.
- **Vercel:** Supported for dynamic SSR/ISR if needed.
- **Note:** Cloud Functions require the Blaze plan on Firebase.

---

## 📝 License

This project is for personal portfolio use and learning.  
3D models and images are for demonstration only and should not be redistributed.

---

## 📫 Contact

For questions, feedback, or collaboration, reach out at:  
**[Github](https://github.com/Abdullah007bajwa)**, 
**abdullah.bajwa.co@gmail.com**

---

**Built with ❤️ using Next.js, React, and the latest web technologies.**
