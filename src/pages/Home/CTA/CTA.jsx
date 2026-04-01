import React from 'react';

const CTA = () => {
    return (
        <section class="py-24 px-8 text-center bg-background relative overflow-hidden">
            <div class="absolute inset-0 bg-primary-container/5 pointer-events-none"></div>
            <div class="max-w-4xl mx-auto relative z-10">
                <h2 class="text-4xl md:text-6xl font-headline font-extrabold mb-8 text-on-surface">Ready to command your next role?</h2>
                <p class="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Join thousands of high-performers who have automated their career success through our architectural authority.</p>
                <button class="bg-gradient-to-br from-primary-container to-primary text-on-primary px-12 py-5 rounded-xl font-headline font-extrabold text-xl shadow-2xl active:scale-95 duration-200">
                    Get Started Free
                </button>
            </div>
        </section>
    );
};

export default CTA;