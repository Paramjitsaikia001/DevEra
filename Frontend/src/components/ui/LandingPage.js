import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    const heroRef = useRef(null);
    const ctaRef = useRef(null);
    const cardsRef = useRef([]);
    const blobRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            // Respect reduced motion: simple visibility toggles
            gsap.set([heroRef.current, ctaRef.current, blobRef.current], { autoAlpha: 1 });
            cardsRef.current.forEach((c) => gsap.set(c, { autoAlpha: 1 }));
            return;
        }

        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from(heroRef.current.querySelectorAll(".animate-in"), {
                y: 20,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
            });

            // CTA pulse on hover and quick pop
            gsap.fromTo(
                ctaRef.current,
                { scale: 0.98, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1,0.6)", delay: 0.5 }
            );

            // Blob slow floating
            gsap.to(blobRef.current, {
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 6,
                ease: "sine.inOut",
            });

            // Feature cards with ScrollTrigger
            gsap.from(cardsRef.current, {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Subtle reveal for footer
            gsap.from(".lp-footer", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".lp-footer",
                    start: "top 90%",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    const setCardRef = (el, i) => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-neutral-900 to-slate-950 text-slate-100 antialiased">
            {/* Decorative animated blob */}
            <div
                ref={blobRef}
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
            >
                <svg
                    className="w-[90rem] h-[40rem] opacity-20 transform-gpu blur-3xl"
                    viewBox="0 0 1400 600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0" stopColor="#7c3aed" />
                            <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                        <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="60" result="blur" />
                            <feColorMatrix
                                in="blur"
                                type="matrix"
                                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 0.8 0"
                            />
                        </filter>
                    </defs>
                    <g filter="url(#f1)">
                        <path
                            fill="url(#g1)"
                            d="M174.2,75.4C251.2,0,360.9,-2.7,466.9,15.1c127.5,21.9,237,76.2,343.4,146.1c109.9,72.2,209.9,159.7,205.8,262.1
              c-4.2,114.1-129.4,148.8-225.6,175.9c-116.5,33.8-248.2,38.6-363.8,14.6C430,655.2,330.1,607,229.7,540.7C131.5,475.9,52.9,389.4,33.4,288.3
              C14.6,193,97.7,150.9,174.2,75.4z"
                            transform="translate(-20 -40)"
                        />
                    </g>
                </svg>
            </div>

            <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center ring-1 ring-white/10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M3 12h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 6h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                            <path d="M3 18h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                        </svg>
                    </div>
                    <span className="font-semibold text-lg">DevEra</span>
                </div>

                <nav className="flex gap-4 items-center text-sm text-slate-300">
                    <a className="hover:text-white transition" href="#features">Features</a>
                    <a className="hover:text-white transition" href="#pricing">Pricing</a>
                    <a className="hover:text-white transition" href="#contact">Contact</a>
                    <a
                        href="#get-started"
                        className="ml-2 inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-slate-100 hover:bg-white/10 transition"
                    >
                        Get Started
                    </a>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
                <section
                    ref={heroRef}
                    className="grid md:grid-cols-2 gap-12 items-center"
                    aria-labelledby="hero-heading"
                >
                    <div>
                        <p className="uppercase tracking-wider text-sm text-cyan-300 mb-3 animate-in">Build faster • Ship smarter</p>
                        <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100 animate-in">
                            Modern developer experiences for teams who move fast
                        </h1>
                        <p className="mt-6 text-slate-300 max-w-xl animate-in">
                            DevEra brings together tools you actually use — analytics, feature flags, and realtime insights — into
                            one lightweight, privacy-first platform. Ship confidently with instant feedback and delightful developer
                            ergonomics.
                        </p>

                        <div className="mt-8 flex gap-4 items-center animate-in">
                            <a
                                ref={ctaRef}
                                id="get-started"
                                href="#dev-era"
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-lg hover:scale-[1.02] transform transition"
                            >
                                Try DevEra — Free
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 5l6 7-6 7" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                            <a
                                href="#features"
                                className="text-sm text-slate-300 hover:text-white transition underline-offset-4"
                            >
                                Learn more →
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
                            <span className="px-3 py-1 rounded-full bg-white/3">No credit card required</span>
                            <span className="px-3 py-1 rounded-full bg-white/3">SSO & Teams</span>
                            <span className="px-3 py-1 rounded-full bg-white/3">GDPR-ready</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 ring-1 ring-white/6 p-6 backdrop-blur-sm shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-xs text-slate-300">Realtime</div>
                                    <div className="text-2xl font-semibold text-white">API Latency</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-slate-300">Now</div>
                                    <div className="text-lg font-medium text-green-400">24ms</div>
                                </div>
                            </div>

                            <div className="h-48 bg-gradient-to-tr from-indigo-900 to-cyan-900 rounded-md overflow-hidden">
                                {/* lightweight chart placeholder */}
                                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                                    <polyline
                                        points="0,140 60,120 120,90 180,105 240,60 300,80 360,50 420,70 480,35 540,55 600,40"
                                        fill="none"
                                        stroke="url(#lineGrad)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        opacity="0.95"
                                    />
                                    <defs>
                                        <linearGradient id="lineGrad" x1="0" x2="1">
                                            <stop offset="0" stopColor="#7c3aed" />
                                            <stop offset="1" stopColor="#06b6d4" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="mt-4 flex gap-3 text-xs text-slate-300">
                                <div className="px-3 py-2 rounded bg-white/3">Uptime 99.99%</div>
                                <div className="px-3 py-2 rounded bg-white/3">Events / sec 1.2k</div>
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-slate-400">Preview of live dashboard</div>
                    </div>
                </section>

                <section id="features" className="mt-20">
                    <h2 className="text-2xl font-semibold mb-6">What you get</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Feature Flags",
                                desc: "Roll out quickly with safe targeting and instant rollback.",
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path d="M5 3v18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M6 5c3.5-1.2 6 0 9 0s5.5-1.2 9 0v12c-3.5 1.2-6 0-9 0s-5.5 1.2-9 0V5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Observability",
                                desc: "Get instant insights into releases, errors and performance.",
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.2" opacity="0.95" />
                                        <path d="M8 12l2 2 4-4" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Integrations",
                                desc: "Connect easily with CI, Slack, and your stack via our APIs.",
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path d="M3 12h18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                                        <path d="M12 3v18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>
                                ),
                            },
                        ].map((f, i) => (
                            <article
                                key={f.title}
                                ref={(el) => setCardRef(el, i)}
                                className="rounded-2xl p-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 ring-1 ring-white/4 shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-slate-900">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">{f.title}</h3>
                                        <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="pricing" className="mt-20">
                    <h2 className="text-2xl font-semibold mb-6">Simple pricing</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-slate-800/40 ring-1 ring-white/4">
                            <div className="text-sm text-slate-300">Starter</div>
                            <div className="mt-3 flex items-baseline gap-2">
                                <span className="text-3xl font-extrabold text-white">$0</span>
                                <span className="text-sm text-slate-400">/ month</span>
                            </div>
                            <p className="mt-3 text-slate-300 text-sm">Community tier for small projects.</p>
                            <a className="mt-4 inline-block rounded-full bg-white/6 px-4 py-2 text-sm text-slate-100 hover:bg-white/10 transition" href="#start-free">
                                Start free
                            </a>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-700 to-cyan-700 ring-1 ring-white/6 shadow-lg text-white">
                            <div className="text-sm opacity-95">Pro</div>
                            <div className="mt-3 flex items-baseline gap-2">
                                <span className="text-3xl font-extrabold">$29</span>
                                <span className="text-sm opacity-90">/ month</span>
                            </div>
                            <p className="mt-3 text-sm opacity-90">For teams, includes SSO, premium support.</p>
                            <a className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm text-slate-900 font-medium hover:brightness-105 transition" href="#pro">
                                Get Pro
                            </a>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-800/40 ring-1 ring-white/4">
                            <div className="text-sm text-slate-300">Enterprise</div>
                            <div className="mt-3 text-sm text-slate-300">Custom pricing</div>
                            <p className="mt-3 text-slate-300 text-sm">Advanced controls and SLAs for large orgs.</p>
                            <a className="mt-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-slate-100 hover:bg-white/6 transition" href="#contact">
                                Contact sales
                            </a>
                        </div>
                    </div>
                </section>

                <section id="contact" className="mt-20 lp-footer">
                    <div className="rounded-2xl p-6 bg-slate-900/40 ring-1 ring-white/4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h4 className="text-lg font-semibold">Ready to ship better?</h4>
                            <p className="text-slate-300 mt-1">Start your free trial and see how DevEra fits into your workflow.</p>
                        </div>
                        <div className="flex gap-3">
                            <a href="#pricing" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-slate-900 font-medium hover:scale-[1.02] transition">
                                Start free
                            </a>
                            <a href="#contact" className="rounded-full px-4 py-2 border border-white/6 text-sm text-slate-300 hover:bg-white/4 transition">
                                Contact sales
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-400">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-100">D</div>
                        <div>
                            <div className="font-semibold text-slate-100">DevEra</div>
                            <div className="text-xs text-slate-400">© {new Date().getFullYear()} DevEra, Inc</div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a className="hover:text-white transition" href="#privacy">Privacy</a>
                        <a className="hover:text-white transition" href="#terms">Terms</a>
                        <a className="hover:text-white transition" href="#docs">Docs</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}