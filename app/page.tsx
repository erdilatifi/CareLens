'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mic, Brain, Headset, ShieldCheck, ArrowRight } from 'lucide-react';
import React from 'react';

const Home = () => {
  return (
    <main className="flex flex-col text-black bg-white mt-[80px] w-full min-h-screen">
      {/* 1️⃣ Hero (modern white & black) */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-black leading-tight">
              AI‑powered Symptom Checker <br />
              that <span className="italic text-violet-600">actually</span> listens
            </h1>
            <p className="text-lg text-violet-700 max-w-xl mx-auto lg:mx-0">
              Speak or type your symptoms and get instant, accurate guidance powered by state‑of‑the‑art medical AI.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-6">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2 bg-black text-white hover:bg-violet-900">
                  Try it free <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-violet-600 text-violet-600 hover:border-black hover:text-black"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/hero.jpg"
              alt="Doctor speaking to patient"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full bg-violet-50 py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-semibold text-violet-900">How CareLens Works</h2>
            <p className="text-violet-600 text-lg">Simple steps. Reliable guidance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { icon: <Mic />, title: 'Speak or Type', desc: 'Describe your symptoms naturally.' },
              { icon: <Brain />, title: 'AI Analysis', desc: 'Instant medical interpretation.' },
              { icon: <ArrowRight />, title: 'Guided Advice', desc: 'Get clear steps to take.' },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-xl border border-violet-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center bg-violet-900 text-white rounded-full text-2xl">
                  {icon}
                </div>
                <h3 className="font-semibold text-xl text-violet-900">{title}</h3>
                <p className="text-violet-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-white py-20 border-t border-violet-200">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold text-black">Why CareLens?</h2>
            <p className="text-violet-600 text-lg">Built for speed, accuracy, and peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureCard icon={<Mic />} title="Voice Input" desc="Hands‑free symptom reporting." />
            <FeatureCard icon={<Brain />} title="Medical‑Grade AI" desc="Tuned on verified clinical data." />
            <FeatureCard icon={<Headset />} title="Audio Response" desc="Get answers read back to you." />
            <FeatureCard icon={<ShieldCheck />} title="Privacy First" desc="End‑to‑end encryption included." />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-violet-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-semibold text-violet-900">Trusted by patients worldwide</h2>
            <p className="text-violet-600 text-lg">Real experiences from early adopters.</p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="I described my symptoms and got actionable advice in seconds—it felt like having a doctor on call."
              name="Sarah J."
              img="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80"
            />
            <Testimonial
              quote="As a busy parent, the voice feature saves me so much time. Love the peace of mind."
              name="Daniel K."
              img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
            />
            <Testimonial
              quote="The AI explanations are clear and easy to understand—way better than googling symptoms."
              name="Aisha P."
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
      </section>
<section className="w-full bg-black text-white py-20">
  <div className="max-w-6xl mx-auto text-center space-y-8 px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold">
      Your Health Assistant. Anytime. Anywhere.
    </h2>
    <p className="text-violet-300 text-lg max-w-xl mx-auto">
      Start using CareLens today and experience modern symptom checking.
    </p>
    <Link href="/dashboard">
      <Button size="lg" className="bg-violet-600 text-white hover:bg-violet-700">
        Start for Free
      </Button>
    </Link>
  </div>
</section>

{/* Footer */}
<footer className="w-full bg-black  py-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-violet-400 text-sm">
    <div>&copy; {new Date().getFullYear()} CareLens. All rights reserved.</div>
    <div className="flex space-x-6">
      <Link href="/privacy" className="hover:text-violet-200 transition-colors">
        Privacy
      </Link>
      <Link href="/terms" className="hover:text-violet-200 transition-colors">
        Terms
      </Link>
      <Link href="/contact" className="hover:text-violet-200 transition-colors">
        Contact
      </Link>
    </div>
  </div>
</footer>

    </main>
  );
};

/* ----------------------------- Helper Components ---------------------------- */

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center space-y-5 h-full border border-violet-200 hover:border-violet-900 transition-all duration-300">
    <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-violet-900 text-white text-2xl">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-black">{title}</h3>
    <p className="text-violet-600 text-sm">{desc}</p>
  </div>
);

const Testimonial = ({
  quote,
  name,
  img,
}: {
  quote: string;
  name: string;
  img: string;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 h-full border border-violet-200 hover:border-violet-900 transition-all duration-300">
    <p className="text-black leading-relaxed text-lg">&ldquo;{quote}&rdquo;</p>
    <div className="flex items-center gap-4 pt-2">
      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-violet-900">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <span className="font-medium text-violet-900 text-lg">{name}</span>
    </div>
  </div>
);

export default Home;
