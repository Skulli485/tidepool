/**
 * FeatureMotion — Block A live-build target.
 * Drei staggered Cards mit Motion Variants und AnimatePresence.
 */
import { motion, AnimatePresence, type Variants } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
};

type Feature = { title: string; body: string };

const features: Feature[] = [
  { title: "Variants", body: "Parent Chreographiert. Child Gemotriert" },
  { title: "AnimatePresence", body: "Umount-Delay. Mehr nicht. Genug!" },
  { title: "View Treansition", body: "Pixel-Snapshot vorher und nachher." },
];

// callback macht nichts ausserhalb die transition zwischen die zwei pixel snapshots zu starten.
function withViewTransition(callback: () => void) {
  if (!document.startViewTransition) {
    callback();
    return;
  }
  document.startViewTransition(callback);
}

export function FeatureMotion(): ReactNode {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const [showFourth, setshowFourth] = useState(false); //WARUM KEIN USEREF!?
  // Oben, das eime aka das Konstant halt mein werte. aber gegenuber zu useRef, Trigger useState kein Re-Render als die zustand immer sich andert!

  function toggleExpand(title: string) {
    withViewTransition(() => {
      setExpandedTitle((prev) => (prev === title ? null : title));
    });
  }

  return (
    <>
      <button
        onClick={() => withViewTransition(() => setshowFourth(!showFourth))}
        className="mb-6 px-4 py-2 border border-card-border rounded-lg hover:bg-card-bg"
      >
        {showFourth ? "Vierte Karte aus" : "Vierte Karte ein"}
      </button>
      <AnimatePresence>
        {showFourth && (
          <motion.article
            key="fourth"
            style={{ viewTransitionName: "fourth-card" }}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="bg-card-bg p-6 rounded-xl border-2 border-brand col-span-full"
          >
            <h3 className="text-xl font-semibold mb-2">
              Wenn du hier klickst verkaufst du deine Seele!
            </h3>
            <p className="text-ink-muted">Be warned, there is no going back!</p>
          </motion.article>
        )}
      </AnimatePresence>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 feature-motion"
      >
        {features.map((f) => {
          const isExpanded = expandedTitle === f.title;
          return (
            <motion.article
              key={f.title} // Key ist für motion hier kritisch, wenn der Key sich andert, siehst motion ein neuen komponente, lasst die alte exit-animieren fllas AnimatePresence drum ist, und mountet die neue.
              variants={itemVariants}
              onClick={() => toggleExpand(f.title)}
              style={{
                viewTransitionName: `feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`,
              }}
              className={`bg-card-bg p-6 rounded-xl border cursor-pointer transition-colors ${
                isExpanded
                  ? "col-span-full border-brand"
                  : "border-card-border hover:border-iris-400"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-ink-muted">{f.body}</p>

              {isExpanded && (
                <p className="text-ink-muted mt-4 text-sm leading-relaxed max-w-propose">
                  Diese Karte ist gerade Expanded. Der Browser had die alte
                  Grid-Cell und die neue Full-Width-Box als das selbe Element
                  erkannt. Hätte ohne view-transition-name nicht funktioniert.
                </p>
              )}
            </motion.article>
          );
        })}
      </motion.section>
    </>
  );
}
Comment;
