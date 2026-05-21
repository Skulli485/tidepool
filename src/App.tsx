import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { FeatureMotion } from './components/FeatureMotion'
import { Dialog } from './components/Dialog'

export function App() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted mb-3">
          Block A
        </p>
        <h2 className="text-4xl font-display font-bold mb-4">Composition.</h2>
        <p className="text-ink-muted max-w-2xl mb-12">
          Drei Karten. Choreografiert vom Parent. Geometriert vom Child. Live gebaut.
        </p>
        <FeatureMotion />
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted mb-3">
          Block D · gebaut vom Agent
        </p>
        <h2 className="text-4xl font-display font-bold mb-4">Dialog.</h2>
        <p className="text-ink-muted max-w-2xl mb-12">
          Eine shadcn/ui Card mit Dialog. Geschrieben vom Agent. Reviewed von dir.
        </p>
        <Dialog />
      </section>

      <Footer />
    </main>
  )
}
