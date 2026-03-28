import React from 'react';

const Banner = () => {
    return (
        <section class="relative min-h-230.25 flex items-center overflow-hidden px-8">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-linear-to-tr from-background via-background to-primary-container/10"></div>
                <svg class="absolute right-0 top-0 h-full w-1/2 opacity-10" preserveaspectratio="none" viewbox="0 0 100 100">
                    <path class="text-primary" d="M0 100 L100 0 L100 100 Z" fill="currentColor"></path>
                </svg>
            </div>
            <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div class="space-y-8">
                    <div class="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant/15">
                        <span class="text-secondary font-label text-[10px] uppercase tracking-[0.2em] font-bold">New Standards 2024</span>
                    </div>
                    <h1 class="text-display-lg font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface">
                        Engineering Your <br />
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-fixed-dim to-secondary">Career Velocity.</span>
                    </h1>
                    <p class="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
                        Move beyond standard applications. CareerQuery Pro combines architectural precision with modern recruitment intelligence to build resumes that command attention.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <button class="bg-linear-to-br from-primary-container to-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-xl shadow-primary-container/20 active:scale-95 duration-200">
                            Start Building Your CV
                        </button>
                        <button class="px-8 py-4 rounded-xl border border-outline-variant/20 text-secondary font-headline font-bold text-lg hover:bg-surface-container-low transition-all active:scale-95 duration-200">
                            Explore Services
                        </button>
                    </div>
                </div>
                <div class="hidden lg:block relative">
                    <div class="relative z-10 bg-surface-container-low rounded-2xl p-4 shadow-2xl border border-outline-variant/10">
                        <img alt="Professional Resume Mockup" class="rounded-xl grayscale hover:grayscale-0 transition-all duration-700" data-alt="Minimalist high-end professional resume layout on a dark wooden desk with soft dramatic studio lighting and premium paper texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqI_Ty3h2creJJHZC5cYRRRcdYtpA98Hfni16FWA5CnOp13d5MhmY1TlU0zs6fB7SFsqqNpogX--78RUqYdG-_3zymQ5iQ30La13DCD0AcCkBE6_QwmoeatO3DHp-yxvafeiF1M3Mj5f3X8RPYthRITj5AZHcN_kmrGUnuKuhZWryD-U6uPx9WcZKRP5AlJQa083J2EFgm_ErkPRCUiGwOUNaSMlD_xuz_ca2zrEh0p8ESpvyvLvlp4Ypg0bWgDX4zyxQImHuEAOJF" />
                    </div>
                    <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
                    <div class="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;