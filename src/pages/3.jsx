< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Career Services | CareerQuery Pro</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "tertiary-fixed": "#d4e3ff",
            "on-error": "#690005",
            "on-tertiary-container": "#b4d1ff",
            "secondary-fixed": "#ffdea5",
            "surface-container-highest": "#27354c",
            "surface-bright": "#2c3951",
            "on-background": "#d6e3ff",
            "on-tertiary": "#00315d",
            "on-secondary-fixed": "#261900",
            "on-primary-fixed": "#001947",
            "surface-container-low": "#0d1c32",
            "surface-container-lowest": "#010e24",
            "surface-container-high": "#1c2a41",
            "tertiary-fixed-dim": "#a4c9ff",
            "primary-container": "#0051c3",
            "on-primary-fixed-variant": "#00419f",
            "on-surface-variant": "#c3c6d6",
            "surface-variant": "#27354c",
            "tertiary-container": "#005aa2",
            "inverse-on-surface": "#233148",
            "primary-fixed": "#dae2ff",
            "secondary": "#e9c176",
            "surface-container": "#112036",
            "primary": "#b1c5ff",
            "inverse-surface": "#d6e3ff",
            "surface-tint": "#b1c5ff",
            "on-primary": "#002c71",
            "secondary-fixed-dim": "#e9c176",
            "on-secondary": "#412d00",
            "on-primary-container": "#beceff",
            "error-container": "#93000a",
            "background": "#041329",
            "on-secondary-container": "#dab36a",
            "on-error-container": "#ffdad6",
            "on-surface": "#d6e3ff",
            "on-tertiary-fixed": "#001c39",
            "tertiary": "#a4c9ff",
            "inverse-primary": "#1357c9",
            "surface-dim": "#041329",
            "error": "#ffb4ab",
            "surface": "#041329",
            "on-secondary-fixed-variant": "#5d4201",
            "outline-variant": "#434653",
            "secondary-container": "#604403",
            "primary-fixed-dim": "#b1c5ff",
            "on-tertiary-fixed-variant": "#004883",
            "outline": "#8d909f"
              },
            fontFamily: {
                "headline": ["Manrope"],
            "body": ["Inter"],
            "label": ["Inter"]
              },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
            },
          },
        }
        </script>
        <style>
            .material-symbols-outlined {
                font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
            .glass-header {
                background: rgba(4, 19, 41, 0.8);
            backdrop-filter: blur(12px);
        }
            body {
                background - color: #041329;
            color: #d6e3ff;
            font-family: 'Inter', sans-serif;
        }
        </style>
    </head>
        <body class="bg-background text-on-background selection:bg-primary/30">
            <!-- TopNavBar -->
            <header class="fixed top-0 w-full z-50 bg-[#041329]/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(214,227,255,0.06)]">
                <nav class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
                    <div class="text-2xl font-bold tracking-tighter text-[#d6e3ff] font-['Manrope']">CareerQuery Pro</div>
                    <div class="hidden md:flex items-center space-x-8 font-['Manrope'] tracking-tight text-sm font-medium">
                        <a class="text-[#c3c6d6] hover:text-[#d6e3ff] transition-colors" href="#">Resume Builder</a>
                        <a class="text-[#b1c5ff] border-b-2 border-[#e9c176] pb-1" href="#">Career Services</a>
                        <a class="text-[#c3c6d6] hover:text-[#d6e3ff] transition-colors" href="#">Pricing</a>
                    </div>
                    <div class="flex items-center space-x-6">
                        <button class="text-[#b1c5ff] font-['Manrope'] text-sm font-medium hover:text-[#d6e3ff] transition-colors">Sign In</button>
                        <button class="bg-gradient-to-br from-primary-container to-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 duration-200">Get Started</button>
                    </div>
                </nav>
            </header>
            <main class="pt-32">
                <!-- Hero Section -->
                <section class="max-w-7xl mx-auto px-8 mb-24">
                    <div class="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span class="inline-block px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 font-label">Architectural Authority</span>
                            <h1 class="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1] mb-8">
                                Precision-Engineered <span class="text-primary italic">Careers.</span>
                            </h1>
                            <p class="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10 font-body">
                                Elevate your professional trajectory with high-impact strategic consulting. We combine executive data-driven insights with architectural structure to refine your market presence.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <button class="bg-gradient-to-br from-primary-container to-primary text-on-primary px-8 py-4 rounded-xl font-bold text-base transition-all active:scale-95 shadow-xl shadow-primary-container/20">View All Packages</button>
                                <button class="border border-outline-variant/20 text-secondary px-8 py-4 rounded-xl font-bold text-base hover:bg-secondary/5 transition-colors">Request a Consult</button>
                            </div>
                        </div>
                        <div class="relative group">
                            <div class="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
                            <div class="relative bg-surface-container-low rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-1">
                                <img alt="Professional Career Consultant" class="w-full h-full object-cover rounded-[1.8rem]" data-alt="A confident professional woman in modern business attire looking directly into camera with soft architectural office lighting in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWh-ftn6kZWqOCdivKb8mqFrVZxAOp3A3txYKSGJPnmCYte0Op5nPYjnAFiGb1p3L2-jCpun3iwYMv5JMi9vnDA3uH491XN8g4xHUc1KjRXNNUlc85ByBv79juomPNme63Coip9e2B81F8ABc3JfXaeo1T__vAsWNLNV4o4g5E64oOJ-qcOYm9lpGUZbuFZWDBtG5O7gNFzkrw5p9MqujAG-3WiOuInGzOyKbUf__SlPaIJA27bp1vQDhJ5bNfeVRwRhG2zf8i3aPf" />
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Services Grid -->
                <section class="bg-surface-container-low py-24 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
                    <div class="max-w-7xl mx-auto px-8">
                        <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div class="max-w-2xl">
                                <h2 class="text-3xl md:text-4xl font-bold font-headline tracking-tight text-on-surface mb-4">Professional Ecosystem Services</h2>
                                <p class="text-on-surface-variant font-body">Rigorous strategies designed for high-stakes career transitions and executive refinement.</p>
                            </div>
                            <div class="flex items-center gap-2 text-secondary font-label text-sm font-semibold tracking-wider">
                                <span class="material-symbols-outlined text-sm">verified_user</span>
                                CERTIFIED EXPERT ADVISORS
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <!-- Service 1 -->
                            <div class="bg-surface-container-high p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 transform hover:-translate-y-1 group">
                                <div class="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary-container/20 transition-colors">
                                    <span class="material-symbols-outlined text-primary" data-icon="record_voice_over">record_voice_over</span>
                                </div>
                                <h3 class="text-xl font-bold font-headline text-on-surface mb-4">Interview Coaching</h3>
                                <p class="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">Master the art of the interview with high-pressure simulations and behavioral framework analysis.</p>
                                <button class="w-full py-3 bg-surface-container-lowest text-secondary text-sm font-bold rounded-lg border border-outline-variant/15 hover:border-secondary/40 transition-all active:scale-[0.98]">Book Now</button>
                            </div>
                            <!-- Service 2 -->
                            <div class="bg-surface-container-high p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 transform hover:-translate-y-1 group">
                                <div class="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary-container/20 transition-colors">
                                    <span class="material-symbols-outlined text-primary" data-icon="share_reviews">share_reviews</span>
                                </div>
                                <h3 class="text-xl font-bold font-headline text-on-surface mb-4">LinkedIn Optimization</h3>
                                <p class="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">Algorithm-aware profile restructuring to enhance visibility and attract elite headhunter engagement.</p>
                                <button class="w-full py-3 bg-surface-container-lowest text-secondary text-sm font-bold rounded-lg border border-outline-variant/15 hover:border-secondary/40 transition-all active:scale-[0.98]">Book Now</button>
                            </div>
                            <!-- Service 3 -->
                            <div class="bg-surface-container-high p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 transform hover:-translate-y-1 group border border-secondary/10 shadow-xl shadow-secondary-container/5">
                                <div class="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-8">
                                    <span class="material-symbols-outlined text-secondary" data-icon="strategy">strategy</span>
                                </div>
                                <h3 class="text-xl font-bold font-headline text-on-surface mb-4">Strategy Sessions</h3>
                                <p class="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">60-minute deep-dives into your professional roadmap, mapping market trends to your unique strengths.</p>
                                <button class="w-full py-3 bg-secondary-container text-secondary text-sm font-bold rounded-lg transition-all active:scale-[0.98]">Book Now</button>
                            </div>
                            <!-- Service 4 -->
                            <div class="bg-surface-container-high p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 transform hover:-translate-y-1 group">
                                <div class="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary-container/20 transition-colors">
                                    <span class="material-symbols-outlined text-primary" data-icon="military_tech">military_tech</span>
                                </div>
                                <h3 class="text-xl font-bold font-headline text-on-surface mb-4">Executive Coaching</h3>
                                <p class="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">Bespoke leadership advisory for V-level and C-level professionals navigating complex organizational shifts.</p>
                                <button class="w-full py-3 bg-surface-container-lowest text-secondary text-sm font-bold rounded-lg border border-outline-variant/15 hover:border-secondary/40 transition-all active:scale-[0.98]">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
                </section>
                <!-- Expertise Spotlight (Asymmetric Layout) -->
                <section class="max-w-7xl mx-auto px-8 py-32">
                    <div class="grid grid-cols-12 gap-12 items-center">
                        <div class="col-span-12 lg:col-span-5 order-2 lg:order-1">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="aspect-[3/4] rounded-2xl overflow-hidden mt-12 bg-surface-container">
                                    <img alt="Expert Consultant" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Portrait of a male executive consultant in a navy suit against a dark grey minimalist backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAck22v17VEimyFGMNr6TncbQiAbZ_1DDSscv1fsFhSPcu0d0o6PQA0sMSzI7RqhfwNiVKikMiCakLDwFKWm-ZpmveJY-zKIz_9lAOGZauMAulyL_udj_TX5qloyB6d2SoBoerHZp45e5AMs0_6BsB-U8HaWE8uRTAkH4uZyKnW7zIU8IhW2I4sYUPfjb-5LsIGrtmmJjTHO8rrCcujm8NDHvdE3E84m-32_nmdMjjrakthE3F06S3HuCsyizfBIxvx8uGChHD_r927" />
                                </div>
                                <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container">
                                    <img alt="Expert Consultant" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Professional female coach working with a digital tablet in a clean architect-style office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ9RZwC53bXqecQl-VSv5jjUBE_NuaytN3XH4Y5AOd0GlLfYmXkQJSvfZTtRBKyh9QcGQd0zNwnGi5ZvkddnxdQv1N3R6rjn9CMLGxEsc03yPtv35_bxvDyREpn7WcASm_P8CTD6Bk4r6kHbZJ-XZnrCClP1fvT7VXabUngwDUW34d6bfKck-QQwFuzxF2zqgLZmqK3XGUWSjqFK0Mb1nNKTIIzYcwlrZfgJ2NEyL_hrvUknIgerJs3hyTUqnHcsIIHhgd3SMTI7kx" />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-7 order-1 lg:order-2">
                            <div class="pl-0 lg:pl-16">
                                <span class="text-secondary font-label font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Advisory Board</span>
                                <h2 class="text-4xl md:text-5xl font-black font-headline text-on-surface leading-tight mb-8">
                                    Guided by Industry <br />Architects &amp; Thought Leaders.
                                </h2>
                                <div class="space-y-8">
                                    <div class="flex gap-6 items-start">
                                        <div class="mt-1 text-primary">
                                            <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
                                        </div>
                                        <div>
                                            <h4 class="text-xl font-bold font-headline text-on-surface mb-2">Tier-1 Experience</h4>
                                            <p class="text-on-surface-variant font-body text-base leading-relaxed">Our consultants are former Fortune 500 recruiters and HR Directors who understand the mechanics of elite hiring.</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-6 items-start">
                                        <div class="mt-1 text-primary">
                                            <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">insights</span>
                                        </div>
                                        <div>
                                            <h4 class="text-xl font-bold font-headline text-on-surface mb-2">Data-Driven Methodology</h4>
                                            <p class="text-on-surface-variant font-body text-base leading-relaxed">We leverage ATS simulations and market analytics to ensure your profile ranks in the top 1% of candidate pools.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Testimonial Section (Bento Inspired) -->
                <section class="max-w-7xl mx-auto px-8 py-24">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="md:col-span-2 bg-gradient-to-br from-[#0d1c32] to-[#041329] p-12 rounded-[2rem] flex flex-col justify-between border border-outline-variant/10">
                            <p class="text-2xl md:text-3xl font-light font-body text-on-surface italic leading-relaxed mb-12">
                                "The LinkedIn optimization wasn't just a rewrite; it was a total brand transformation. Within three weeks, I was approached by two Tier-1 tech firms for roles that weren't even listed."
                            </p>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-bold text-on-primary">JD</div>
                                <div>
                                    <p class="font-bold text-on-surface">Jameson D.</p>
                                    <p class="text-sm text-on-surface-variant">Director of Engineering @ NexaScale</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-primary-container p-12 rounded-[2rem] flex flex-col justify-center text-on-primary">
                            <h3 class="text-5xl font-black mb-4">94%</h3>
                            <p class="text-lg font-medium opacity-90 leading-snug">Success rate for clients seeking senior management roles within 90 days.</p>
                        </div>
                    </div>
                </section>
                <!-- Final CTA -->
                <section class="max-w-7xl mx-auto px-8 py-32">
                    <div class="relative bg-surface-container-low rounded-[3rem] p-16 overflow-hidden text-center">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-transparent to-transparent"></div>
                        <div class="relative z-10">
                            <h2 class="text-4xl md:text-6xl font-black font-headline text-on-surface mb-8 tracking-tighter">Ready to redesign your <br /><span class="text-secondary">career trajectory?</span></h2>
                            <p class="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 font-body leading-relaxed">Join over 1,500 professionals who have unlocked executive opportunities through CareerQuery Pro.</p>
                            <button class="bg-gradient-to-br from-primary-container to-primary text-on-primary px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95">Get Started Today</button>
                        </div>
                    </div>
                </section>
            </main>
            <!-- Footer -->
            <footer class="bg-[#0d1c32] w-full pt-24 pb-12 mt-24">
                <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div class="md:col-span-1">
                        <span class="text-xl font-black text-[#d6e3ff] mb-4 block font-['Manrope']">CareerQuery Pro</span>
                        <p class="text-[#c3c6d6] text-sm leading-relaxed mb-6 font-['Inter']">Engineering excellence in professional career development and executive branding.</p>
                    </div>
                    <div class="space-y-4">
                        <h5 class="text-[#e9c176] font-bold text-xs tracking-widest uppercase">Consulting</h5>
                        <nav class="flex flex-col space-y-3 font-['Inter'] text-sm">
                            <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Resume Services</a>
                            <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Interview Prep</a>
                            <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Career Strategy</a>
                        </nav>
                    </div>
                    <div class="space-y-4">
                        <h5 class="text-[#e9c176] font-bold text-xs tracking-widest uppercase">Company</h5>
                        <nav class="flex flex-col space-y-3 font-['Inter'] text-sm">
                            <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Our Story</a>
                            <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Privacy Policy</a>
                            <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Terms of Service</a>
                        </nav>
                    </div>
                    <div class="space-y-4">
                        <h5 class="text-[#e9c176] font-bold text-xs tracking-widest uppercase">Newsletter</h5>
                        <p class="text-[#c3c6d6] text-xs leading-relaxed mb-4 font-['Inter']">Get bi-weekly executive insights directly to your inbox.</p>
                        <div class="flex gap-2">
                            <input class="bg-[#041329] border-none rounded-lg text-xs w-full focus:ring-1 focus:ring-primary text-on-surface" placeholder="Email" type="email" />
                            <button class="bg-primary-container p-2 rounded-lg"><span class="material-symbols-outlined text-white text-sm">arrow_forward</span></button>
                        </div>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto px-8 pt-12 mt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span class="text-[#c3c6d6] text-[10px] font-['Inter']">© 2024 CareerQuery Pro. Architectural Career Authority.</span>
                    <div class="flex gap-6">
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors text-xs" href="#">LinkedIn</a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors text-xs" href="#">Twitter</a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors text-xs" href="#">Newsletter</a>
                    </div>
                </div>
            </footer>
        </body></html>