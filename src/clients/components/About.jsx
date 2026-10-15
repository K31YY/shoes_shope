import React from 'react';
import { Sparkles, Footprints, Flame, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Premium Quality',
      description: 'Crafted with top-grade materials for maximum durability and long-lasting performance.',
    },
    {
      icon: Footprints,
      title: 'Ultimate Comfort',
      description: 'Engineered insoles designed for all-day cushioning, wherever your strides take you.',
    },
    {
      icon: Flame,
      title: 'Trending Styles',
      description: 'Constantly updated with the latest streetwear vibes and trendsetting silhouettes.',
    },
  ];

  return (
    <section id="about" className="bg-zinc-950 text-zinc-300 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header / Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" /> About Shoesvibe
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Step into Your Unique Vibe
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            At Shoesvibe, we believe footwear is more than just an accessory—it’s an expression of energy, confidence, and individuality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-zinc-900/60 p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Driven by Passion & Design</h3>
            <p className="text-zinc-400 leading-relaxed">
              Founded for sneaker enthusiasts and everyday style movers, Shoesvibe was created with a single vision: to make high-end streetwear aesthetics accessible without compromising comfort.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Whether you are hitting the city streets, stepping into gym sessions, or elevating a casual outfit, our silhouettes are built to keep you moving in style.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-crimson/20 via-zinc-900 to-zinc-950 border border-crimson/30 h-64 md:h-80 flex items-center justify-center text-center p-6">
            <div>
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-crimson text-white shadow-lg shadow-crimson/30">
                <Footprints className="h-7 w-7 -rotate-12" strokeWidth={2.4} />
              </div>
              <h4 className="text-2xl font-black text-white tracking-tight lowercase">
                shoes<span className="text-crimson">vibe</span>
              </h4>
              <p className="text-xs text-zinc-400 mt-2 tracking-widest uppercase font-semibold">
                Quality • Comfort • Vibe
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars / Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Why Choose Shoesvibe?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900/80 p-8 rounded-2xl border border-white/10 hover:border-crimson/50 transition-colors text-center group"
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}