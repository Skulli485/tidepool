/**
 * Dialog — Block D agent-built target.
 * shadcn/ui Dialog-Primitive + motion für Open/Close-Animation.
 * Respektiert prefers-reduced-motion.
 */
import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog as DialogRoot,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Dialog(): ReactNode {
  const [open, setOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  const transition = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 280, damping: 24 };

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" className="text-ink border-brand bg-brand/10 hover:bg-brand/20" />}>
        Was ist Agentic Engineering?
      </DialogTrigger>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={transition}
              className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md
                -translate-x-1/2 -translate-y-1/2 rounded-xl border
                border-card-border bg-card-bg p-6 shadow-2xl"
            >
              <DialogTitle className="text-lg font-semibold text-ink">
                Agentic Engineering — oder: Wie man Code schreibt, ohne Code zu schreiben
              </DialogTitle>
              <DialogDescription className="mt-3 leading-relaxed text-ink-muted">
                Agenten sind die neuen Junior-Entwickler: Sie lesen Code,
                schreiben Tests, deployen und iterieren — gesteuert durch
                präzise menschliche Briefs statt manuelle Einzelschritte.
                Der Trick? Gute Briefs schreiben. Gute Agenten folgend.
              </DialogDescription>
              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                  Schließen
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </DialogRoot>
  );
}
