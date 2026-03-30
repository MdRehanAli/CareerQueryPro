import React from 'react';

const ConsultingServices = () => {
    return (
        <section class="py-24 px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <span class="text-secondary font-label text-xs uppercase tracking-[0.2em] font-bold block mb-4">Strategic Authority</span>
                    <h2 class="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6">Expert Career Consulting</h2>
                    <p class="text-on-surface-variant max-w-2xl mx-auto text-lg">Beyond the paper. We provide the strategic guidance needed to navigate the highest echelons of professional growth.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-surface-container-high p-10 rounded-2xl hover:bg-surface-container-highest transition-all hover:-translate-y-2 duration-300">
                        <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                            <span class="material-symbols-outlined text-3xl">record_voice_over</span>
                        </div>
                        <h4 class="text-xl font-headline font-bold mb-4">Interview Coaching</h4>
                        <p class="text-on-surface-variant leading-relaxed">Behavioral techniques and executive presence training designed to convert high-stakes opportunities into offers.</p>
                        <hr class="my-8 border-outline-variant/10" />
                        <ul class="space-y-3">
                            <li class="flex items-center gap-3 text-sm text-on-surface"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Mock Stress Tests</li>
                            <li class="flex items-center gap-3 text-sm text-on-surface"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Salary Negotiation</li>
                            
                        </ul>
                    </div>
                    <div class="bg-surface-container-high p-10 rounded-2xl hover:bg-surface-container-highest transition-all hover:-translate-y-2 duration-300">
                        <div class="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-8">
                            <span class="material-symbols-outlined text-3xl">hub</span>
                        </div>
                        <h4 class="text-xl font-headline font-bold mb-4">LinkedIn Optimization</h4>
                        <p class="text-on-surface-variant leading-relaxed">A digital identity that functions as a 24/7 lead magnet for headhunters and top-tier recruiters.</p>
                        <hr class="my-8 border-outline-variant/10" />
                        <ul class="space-y-3">
                            <li class="flex items-center gap-3 text-sm text-on-surface"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Keyword Authority</li>
                            <li class="flex items-center gap-3 text-sm text-on-surface"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Networking Strategy</li>
                        </ul>
                    </div>
                    <div class="bg-surface-container-high p-10 rounded-2xl hover:bg-surface-container-highest transition-all hover:-translate-y-2 duration-300">
                        <div class="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-8">
                            <span class="material-symbols-outlined text-3xl">psychology</span>
                        </div>
                        <h4 class="text-xl font-headline font-bold mb-4">Career Pivot Strategy</h4>
                        <p class="text-on-surface-variant leading-relaxed">Relentless clarity for professionals transitioning between industries or seeking the next vertical leap.</p>
                        <hr class="my-8 border-outline-variant/10" />
                        <ul class="space-y-3">
                            <li class="flex items-center gap-3 text-sm text-on-surface"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Gap Analysis</li>
                            <li class="flex items-center gap-3 text-sm text-on-surface"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> Portfolio Audits</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingServices;