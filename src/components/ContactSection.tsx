'use client';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { register, handleSubmit, formState, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', result);
        // Optionally reset the form after a successful submission:
        reset();
      } else {
        console.error('Error sending email:', result.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-background/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-coral to-rose-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Input
                {...register('name', { required: true })}
                placeholder="Your Name"
                className="placeholder:text-muted-foreground/70 border-white/10 bg-white/5 focus:ring-2 focus:ring-coral"
              />
              <Input
                {...register('email', { required: true })}
                type="email"
                placeholder="your@email.com"
                className="placeholder:text-muted-foreground/70 border-white/10 bg-white/5 focus:ring-2 focus:ring-rose-500"
              />
              <Textarea
                {...register('message', { required: true })}
                placeholder="Your Message"
                rows={5}
                className="placeholder:text-muted-foreground/70 border-white/10 bg-white/5 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button
              type="submit"
              variant="glow"
              className="w-full py-6 text-lg transition-transform hover:scale-[1.02] active:scale-100"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--coral),0.05)_0%,transparent_70%)] opacity-50" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(var(--rose),0.05),transparent)]" />
    </section>
  );
}
