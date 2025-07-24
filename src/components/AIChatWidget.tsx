// components/AIChatWidget.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Markdown } from '@/components/markdown';
import { useCompletion } from '@/hooks/useCompletion'; 
import { cn } from '@/lib/utils';

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { completion, input, isLoading, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/chat'
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [completion]);

  // Split completion into thinking process and response
  const parseCompletion = (content: string) => {
    const parts = content.split('<think>');
    const thinking = parts[1]?.split('</think>')[0] || '';
    const response = parts[1]?.split('</think>')[1] || content;
    return { thinking, response };
  };

  return (
    // On very small screens, use bottom-4/right-4; on larger, bottom-8/right-8.
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            // Use full width with a responsive max-width for mobile devices.
            className="bg-background/80 backdrop-blur-lg rounded-xl shadow-2xl border border-border/30 w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-coral" />
                  <h3 className="font-semibold text-sm sm:text-base">Portfolio Assistant</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="h-64 overflow-y-auto space-y-4">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <Markdown content="Hi! I'm here to help you navigate the portfolio. Ask me anything about projects, skills, or experience." />
                </div>

                {typeof completion === 'string' && completion && (
                  <div className="space-y-4">
                    {parseCompletion(completion).thinking && (
                      <div className="p-3 bg-muted/10 rounded-lg text-muted-foreground text-sm italic">
                        {parseCompletion(completion).thinking}
                      </div>
                    )}
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <Markdown content={parseCompletion(completion).response} />
                    </div>
                  </div>
                )}

                {isLoading && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-2 w-2 bg-coral rounded-full animate-pulse" />
                    <span>Analyzing query...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSubmit} className="relative">
                <Textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="pr-12 resize-none"
                  rows={1}
                  style={{ fontFamily: '"Android 7"', color: 'black' }}
                />
                
                <Button
                  size="icon"
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                >
                  <Send className="h-4 w-4 text-black" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'bg-coral rounded-full p-4 shadow-xl',
          'transition-all duration-300',
          'hover:shadow-2xl hover:bg-rose-600'
        )}
      >
        <Bot className="h-6 w-6 text-background" />
      </motion.button>
    </div>
  );
}