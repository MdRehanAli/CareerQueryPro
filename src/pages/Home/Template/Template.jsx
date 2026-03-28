import React from 'react';

const Template = () => {
    return (
        <section class="py-24 bg-surface-container-low">
            <div class="max-w-7xl mx-auto px-8">
                <div class="mb-16">
                    <span class="text-secondary font-label text-xs uppercase tracking-[0.2em] font-bold block mb-4">Precision Designs</span>
                    <h2 class="text-4xl font-headline font-extrabold text-on-surface">Curated Templates</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-2 group relative overflow-hidden rounded-2xl bg-surface-container-high p-8 transition-all hover:bg-surface-container-highest">
                        <div class="flex flex-col h-full justify-between">
                            <div>
                                <h3 class="text-2xl font-headline font-bold text-on-surface mb-2">The Executive Suite</h3>
                                <p class="text-on-surface-variant max-w-md">Designed for C-level visibility, prioritizing high-impact metrics and structural leadership narratives.</p>
                            </div>
                            <div class="mt-12 flex gap-4">
                                <span class="bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-label text-outline uppercase tracking-wider">Minimalist</span>
                                <span class="bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-label text-outline uppercase tracking-wider">Metrics-Focused</span>
                            </div>
                        </div>
                        <div class="absolute -right-4 -bottom-12 w-1/2 opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2.5">
                            <img alt="Modern Resume" class="rounded-xl shadow-2xl" data-alt="Close up of a modern sleek resume template with elegant sans-serif typography on heavy matte paper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt0bfPptfhQDlNezfIVT7Iz8jLvHqMXfvZsca3XR-Br35MXpQ2J_-kvVM23lEPHwmQz5LnY9WTUYyEbsYcKe50z8EQVwPs9p0AqC5TWMyxAq3L9yCHoeKWelUHuuR5pZIrDjsQqEHvXsk3iRHEG1iBzB5eCK6OywhkPK91mmUAXzYMPVsQ6fyt6gqgZHLw2aeUo82kn5M0-ZUYLAEAMURE8mPHUpcHcaIqNMva5GBHos64RgWIr9fqZTPeTDXJCwD8miKoj0qTs1G6" />
                        </div>
                    </div>
                    <div class="group relative overflow-hidden rounded-2xl bg-surface-container-high p-8 transition-all hover:bg-surface-container-highest">
                        <h3 class="text-2xl font-headline font-bold text-on-surface mb-2">Creative Flow</h3>
                        <p class="text-on-surface-variant mb-8">For innovators where visual identity is as critical as professional history.</p>
                        <div class="w-full h-48 bg-surface-container-lowest rounded-xl flex items-center justify-center overflow-hidden">
                            <img alt="Creative Career" class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" data-alt="Modern creative workspace with high-end tech equipment and a warm evening glow from a desk lamp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9gljAqyfs4LeV_ZkQo1AA2FBP1hgCK8H6k17jnDiXtwgyi75QkZOOP2JBjQuq2xNg-QX-D_WL49hwsy79scAMCHrHE8igoe01H8ltCVxMDF_zIp_gMnBzkrukXzGqukHpRk5xwJdswpq_tpBni1p1NtO0KWgmvH8HY43u9mizfWxHC5H3eZUSI-hKfk8RJeZvYg26MW9mrqkfiv7Wf5wkz9p3lFE5afwX4FJ32ydJ3AKMQVbjFG-CaN8c6dtWjLceSGNrIH8UQ1wP" />
                        </div>
                    </div>
                    <div class="group bg-surface-container-high p-8 rounded-2xl transition-all hover:bg-surface-container-highest">
                        <div class="mb-6 text-secondary">
                            <span class="material-symbols-outlined text-4xl">architecture</span>
                        </div>
                        <h3 class="text-2xl font-headline font-bold text-on-surface mb-2">Technical Draft</h3>
                        <p class="text-on-surface-variant">Optimized for ATS systems and technical recruiters. Clean, structured, and profoundly readable.</p>
                    </div>
                    <div class="md:col-span-2 group relative overflow-hidden rounded-2xl bg-surface-container-high p-8 transition-all hover:bg-surface-container-highest">
                        <div class="flex items-center gap-8 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-headline font-bold text-on-surface mb-2">Global standard</h3>
                                <p class="text-on-surface-variant">Multilingual templates compliant with EU and APAC employment standards.</p>
                                <button class="mt-6 text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Browse All 40+ Designs <span class="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                            <div class="hidden sm:block w-1/3 bg-surface-container-lowest h-full rounded-xl p-4 border border-outline-variant/10">
                                <div class="space-y-3">
                                    <div class="h-2 w-full bg-outline-variant/20 rounded"></div>
                                    <div class="h-2 w-3/4 bg-outline-variant/20 rounded"></div>
                                    <div class="h-2 w-5/6 bg-outline-variant/20 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Template;