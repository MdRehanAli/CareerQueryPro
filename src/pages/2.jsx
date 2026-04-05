< !DOCTYPE html >

    <html class="dark" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Resume Builder | CareerQuery Pro</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet" />
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
            vertical-align: middle;
        }
            .glass-panel {
                background: rgba(13, 28, 50, 0.7);
            backdrop-filter: blur(16px);
        }
            ::-webkit-scrollbar {
                width: 6px;
        }
            ::-webkit-scrollbar-track {
                background: #041329;
        }
            ::-webkit-scrollbar-thumb {
                background: #27354c;
            border-radius: 10px;
        }
        </style>
    </head>
        <body class="bg-background text-on-background font-body selection:bg-primary/30">
            <!-- Top Navigation Bar -->
            <nav class="fixed top-0 w-full z-50 bg-[#041329]/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(214,227,255,0.06)]">
                <div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
                    <div class="flex items-center gap-8">
                        <span class="text-2xl font-bold tracking-tighter text-[#d6e3ff] font-headline">CareerQuery Pro</span>
                        <div class="hidden md:flex gap-6">
                            <a class="font-headline tracking-tight text-sm font-medium text-[#b1c5ff] border-b-2 border-[#e9c176] pb-1" href="#">Resume Builder</a>
                            <a class="font-headline tracking-tight text-sm font-medium text-[#c3c6d6] hover:text-[#d6e3ff] transition-colors" href="#">Career Services</a>
                            <a class="font-headline tracking-tight text-sm font-medium text-[#c3c6d6] hover:text-[#d6e3ff] transition-colors" href="#">Pricing</a>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <button class="px-5 py-2 text-sm font-medium text-[#c3c6d6] hover:text-[#d6e3ff] transition-all">Sign In</button>
                        <button class="px-6 py-2.5 rounded-xl bg-gradient-to-br from-primary-container to-primary text-white text-sm font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all">Get Started</button>
                    </div>
                </div>
            </nav>
            <!-- Main Content Area -->
            <main class="pt-20 min-h-screen flex flex-col md:flex-row">
                <!-- Builder Sidebar (Section Navigation) -->
                <aside class="w-full md:w-64 bg-surface-container-low border-r border-outline-variant/10 p-6 flex flex-col gap-8">
                    <div class="flex flex-col gap-2">
                        <span class="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">Editor Sections</span>
                        <nav class="space-y-1">
                            <a class="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-highest text-primary font-medium transition-all group" href="#">
                                <span class="material-symbols-outlined text-[20px]" data-icon="person">person</span>
                                <span class="text-sm">Personal Info</span>
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
                                <span class="material-symbols-outlined text-[20px]" data-icon="work">work</span>
                                <span class="text-sm">Experience</span>
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
                                <span class="material-symbols-outlined text-[20px]" data-icon="school">school</span>
                                <span class="text-sm">Education</span>
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
                                <span class="material-symbols-outlined text-[20px]" data-icon="psychology">psychology</span>
                                <span class="text-sm">Skills</span>
                            </a>
                            <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
                                <span class="material-symbols-outlined text-[20px]" data-icon="workspace_premium">workspace_premium</span>
                                <span class="text-sm">Projects</span>
                            </a>
                        </nav>
                    </div>
                    <div class="mt-auto p-4 rounded-2xl bg-surface-container-high border border-outline-variant/5">
                        <p class="text-xs text-on-surface-variant leading-relaxed mb-3">Resume Strength</p>
                        <div class="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                            <div class="h-full w-2/3 bg-secondary rounded-full"></div>
                        </div>
                        <p class="text-[10px] mt-2 text-secondary">65% Complete</p>
                    </div>
                </aside>
                <!-- Input Canvas -->
                <section class="flex-1 p-8 lg:p-12 overflow-y-auto max-h-[calc(100vh-80px)]">
                    <header class="mb-12">
                        <span class="text-xs font-mono uppercase tracking-widest text-secondary mb-2 block">Step 01</span>
                        <h1 class="text-4xl font-headline font-extrabold tracking-tight text-on-surface">Personal Information</h1>
                        <p class="text-on-surface-variant mt-2 max-w-lg">Set the foundation of your professional identity. These details will appear at the top of your resume.</p>
                    </header>
                    <form class="space-y-8 max-w-2xl">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-xs font-semibold text-outline tracking-wider uppercase ml-1">Full Name</label>
                                <input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all" placeholder="e.g. Alexander Sterling" type="text" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-semibold text-outline tracking-wider uppercase ml-1">Job Title</label>
                                <input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all" placeholder="e.g. Principal Architect" type="text" />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-xs font-semibold text-outline tracking-wider uppercase ml-1">Email Address</label>
                                <input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all" placeholder="alexander@firm.com" type="email" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-semibold text-outline tracking-wider uppercase ml-1">Phone Number</label>
                                <input class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all" placeholder="+1 (555) 000-0000" type="tel" />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-semibold text-outline tracking-wider uppercase ml-1">Professional Summary</label>
                            <textarea class="w-full bg-surface-container-low border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all resize-none" placeholder="Write a brief overview of your professional career and key achievements..." rows="5"></textarea>
                        </div>
                        <div class="flex justify-between items-center pt-8">
                            <button class="text-sm font-semibold text-outline hover:text-on-surface transition-colors flex items-center gap-2" type="button">
                                <span class="material-symbols-outlined">delete</span> Clear Form
                            </button>
                            <button class="px-8 py-3.5 rounded-xl bg-gradient-to-br from-primary-container to-primary text-white font-bold shadow-xl shadow-primary/20 flex items-center gap-2 hover:translate-y-[-2px] transition-all" type="button">
                                Save &amp; Continue <span class="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                </section>
                <!-- Live Preview Pane -->
                <section class="hidden lg:block w-[450px] xl:w-[550px] bg-surface-container-lowest p-8 border-l border-outline-variant/10">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live Preview
                        </span>
                        <div class="flex gap-2">
                            <button class="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">
                                <span class="material-symbols-outlined text-[20px]">zoom_in</span>
                            </button>
                            <button class="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">
                                <span class="material-symbols-outlined text-[20px]">download</span>
                            </button>
                        </div>
                    </div>
                    <!-- Resume Template Mockup -->
                    <div class="bg-white text-slate-900 rounded-sm shadow-2xl aspect-[1/1.41] p-10 overflow-hidden transform scale-95 origin-top relative">
                        <!-- Template Header -->
                        <header class="border-b-2 border-slate-900 pb-6 mb-8">
                            <h2 class="text-3xl font-headline font-extrabold tracking-tighter uppercase mb-1">Alexander Sterling</h2>
                            <p class="text-sm font-semibold text-slate-600 tracking-widest uppercase">Principal Architect &amp; Urban Planner</p>
                        </header>
                        <div class="grid grid-cols-3 gap-8">
                            <!-- Sidebar Column -->
                            <div class="col-span-1 space-y-6">
                                <section>
                                    <h3 class="text-[10px] font-black uppercase tracking-tighter border-b border-slate-200 pb-1 mb-2">Contact</h3>
                                    <div class="space-y-1 text-[9px] text-slate-600 leading-tight">
                                        <p>New York, NY</p>
                                        <p>555-0123-456</p>
                                        <p class="truncate">alexander@sterling.com</p>
                                        <p>sterling-portfolio.com</p>
                                    </div>
                                </section>
                                <section>
                                    <h3 class="text-[10px] font-black uppercase tracking-tighter border-b border-slate-200 pb-1 mb-2">Expertise</h3>
                                    <div class="flex flex-wrap gap-1">
                                        <span class="px-1.5 py-0.5 bg-slate-100 text-[8px] font-bold">AutoCAD</span>
                                        <span class="px-1.5 py-0.5 bg-slate-100 text-[8px] font-bold">BIM</span>
                                        <span class="px-1.5 py-0.5 bg-slate-100 text-[8px] font-bold">Urban Design</span>
                                        <span class="px-1.5 py-0.5 bg-slate-100 text-[8px] font-bold">Sustainability</span>
                                    </div>
                                </section>
                            </div>
                            <!-- Main Column -->
                            <div class="col-span-2 space-y-6">
                                <section>
                                    <h3 class="text-[10px] font-black uppercase tracking-tighter border-b border-slate-200 pb-1 mb-2">Profile</h3>
                                    <p class="text-[9px] leading-relaxed text-slate-700 italic">
                                        Award-winning Architect with over 12 years of experience in designing high-profile commercial and residential spaces. Focused on blending structural integrity with modern aesthetic innovation and sustainable practices.
                                    </p>
                                </section>
                                <section>
                                    <h3 class="text-[10px] font-black uppercase tracking-tighter border-b border-slate-200 pb-1 mb-2">Recent Experience</h3>
                                    <div class="space-y-4">
                                        <div class="relative pl-3 border-l border-slate-200">
                                            <h4 class="text-[9px] font-bold">Lead Designer | Metro-Habitus</h4>
                                            <p class="text-[8px] text-slate-500 mb-1">2018 — Present</p>
                                            <p class="text-[8px] leading-snug text-slate-600">Spearheaded the design of the 'Skyline Atrium' project, reducing carbon footprint by 30% through innovative geothermal integration.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <!-- Subtle watermark for realism -->
                        <div class="absolute bottom-4 right-4 opacity-10 grayscale">
                            <span class="text-[8px] font-black">CAREERQUERY PRO</span>
                        </div>
                    </div>
                </section>
            </main>
            <!-- Footer -->
            <footer class="bg-[#0d1c32] w-full pt-24 pb-12">
                <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div class="col-span-1 md:col-span-1">
                        <span class="text-xl font-black text-[#d6e3ff] mb-4 block font-headline">CareerQuery Pro</span>
                        <p class="font-body text-sm leading-relaxed text-[#c3c6d6]">Professional architectural career management and high-end resume engineering tools.</p>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h4 class="text-[#e9c176] font-bold text-sm mb-2">Resources</h4>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] text-sm transition-colors" href="#">Career Services</a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] text-sm transition-colors" href="#">Newsletter</a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] text-sm transition-colors" href="#">LinkedIn</a>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h4 class="text-[#e9c176] font-bold text-sm mb-2">Legal</h4>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] text-sm transition-colors" href="#">Privacy</a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] text-sm transition-colors" href="#">Terms</a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] text-sm transition-colors" href="#">Contact</a>
                    </div>
                    <div class="col-span-1">
                        <h4 class="text-[#e9c176] font-bold text-sm mb-4">Authority</h4>
                        <p class="text-[#c3c6d6] text-xs leading-relaxed italic opacity-70">
                            © 2024 CareerQuery Pro. Architectural Career Authority. All rights reserved for original resume patterns and templates.
                        </p>
                    </div>
                </div>
            </footer>
            <!-- FAB Overlay (Hidden on Mobile) -->
            <div class="hidden md:flex fixed bottom-8 right-8 z-50 flex-col gap-3">
                <button class="w-14 h-14 rounded-full bg-secondary-container text-secondary flex items-center justify-center shadow-2xl hover:scale-110 transition-all group relative">
                    <span class="material-symbols-outlined">help</span>
                    <span class="absolute right-16 bg-surface-container-highest text-white text-[10px] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-all">Support Specialist</span>
                </button>
                <button class="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-all group relative">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">save</span>
                    <span class="absolute right-16 bg-surface-container-highest text-white text-[10px] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-all">Auto-saved 2m ago</span>
                </button>
            </div>
        </body></html>