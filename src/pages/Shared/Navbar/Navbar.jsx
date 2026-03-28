import React from 'react';

const Navbar = () => {
    return (
        <nav class="fixed top-0 w-full z-50 bg-[#041329]/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(214,227,255,0.06)]">
            <div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
                <div class="text-2xl font-bold tracking-tighter text-[#d6e3ff] font-headline">CareerQuery Pro</div>
                <div class="hidden md:flex items-center space-x-8 font-headline tracking-tight text-sm font-medium">
                    <a class="text-[#b1c5ff] border-b-2 border-[#e9c176] pb-1" href="#">Resume Builder</a>
                    <a class="text-[#c3c6d6] hover:text-[#d6e3ff] transition-colors" href="#">Career Services</a>
                    <a class="text-[#c3c6d6] hover:text-[#d6e3ff] transition-colors" href="#">Pricing</a>
                </div>
                <div class="flex items-center gap-6">
                    <button class="text-[#c3c6d6] font-headline text-sm font-medium hover:text-[#d6e3ff] transition-colors">Sign In</button>
                    <button class="bg-linear-to-br from-primary-container to-primary text-on-primary px-6 py-2.5 rounded-xl font-headline text-sm font-bold shadow-lg active:scale-95 duration-200">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;