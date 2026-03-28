import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-[#0d1c32] w-full pt-24 pb-12">
            <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div class="md:col-span-1">
                    <span class="text-xl font-black text-[#d6e3ff] mb-4 block font-headline">CareerQuery Pro</span>
                    <p class="text-[#c3c6d6] text-sm font-body leading-relaxed mb-6">Architectural Career Authority. Helping elite professionals reach their ultimate career velocity since 2018.</p>
                    <div class="flex gap-4">
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
                        <a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
                    </div>
                </div>
                <div>
                    <h5 class="text-[#e9c176] font-headline font-bold mb-6">Services</h5>
                    <ul class="space-y-4 font-body text-sm">
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Resume Builder</a></li>
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Career Services</a></li>
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Interview Prep</a></li>
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">LinkedIn Audits</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-[#e9c176] font-headline font-bold mb-6">Company</h5>
                    <ul class="space-y-4 font-body text-sm">
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Privacy</a></li>
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Terms</a></li>
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Contact</a></li>
                        <li><a class="text-[#c3c6d6] hover:text-[#e9c176] transition-colors" href="#">Newsletter</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-[#e9c176] font-headline font-bold mb-6">Subscribe</h5>
                    <p class="text-[#c3c6d6] text-xs mb-4">Weekly insights on executive career strategy.</p>
                    <div class="flex">
                        <input class="bg-[#041329] border-none rounded-l-lg text-sm px-4 py-2 w-full focus:ring-1 focus:ring-primary-container" placeholder="Email address" type="email" />
                        <button class="bg-primary text-on-primary px-4 py-2 rounded-r-lg"><span class="material-symbols-outlined">send</span></button>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <span class="text-[#c3c6d6] text-xs font-body">© 2024 CareerQuery Pro. Architectural Career Authority.</span>
                <div class="flex gap-8">
                    <a class="text-[#c3c6d6] text-xs hover:text-[#e9c176] transition-colors" href="#">LinkedIn</a>
                    <a class="text-[#c3c6d6] text-xs hover:text-[#e9c176] transition-colors" href="#">X (Twitter)</a>
                    <a class="text-[#c3c6d6] text-xs hover:text-[#e9c176] transition-colors" href="#">Dribbble</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;