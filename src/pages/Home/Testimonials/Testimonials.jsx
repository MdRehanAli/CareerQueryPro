import React from 'react';

const Testimonials = () => {
    return (
        <section class="py-24 bg-surface-container-lowest">
            <div class="max-w-7xl mx-auto px-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    <div>
                        <span class="text-secondary font-label text-xs uppercase tracking-[0.2em] font-bold block mb-4">Verified Success</span>
                        <h2 class="text-4xl font-headline font-extrabold text-on-surface mb-6">Client Authority</h2>
                        <p class="text-on-surface-variant text-lg">Our alumni hold leadership positions at Fortune 100 firms and innovative global startups.</p>
                        <div class="mt-8 flex items-center gap-4">
                            <div class="flex -space-x-4">
                                <div class="w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                                    <img alt="User" class="w-full h-full object-cover" data-alt="Portrait of a professional man in a dark charcoal suit against a clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzZyMbvwVs8aXWzgzdo-wFd7jQq2ZNNJG88PdBkgJ3mOV8ZcdzNUd-QDsKsoq1cbQEoXdGgnkOvHXejlHe0KyaHnDA28DZdlYHGFNRwKHt6BXDZ01hvjma1JI49BVdNEVSPW8RTnRgBHXjLL1NVspNZUKlllEp6Ql7bwwSLuqAUTaknW9-DO_8YseA8V6b-lBIWMXMMF2p7RlX0BEftz-Mv26yUy6x8fffyAJHjofk2ncjcYtQkewEdTubtHnTdLPuKUsmKGzFowlt" />
                                </div>
                                <div class="w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                                    <img alt="User" class="w-full h-full object-cover" data-alt="Close-up of a smiling professional woman with a clean blurred modern office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCugzMnaxbT6hhROhL3KAcv2zAx4925QpVYO-r0BpNIWPRgOehXSJy3c644OH5O8pmfK9MyrWJAoyQQmLCdQMzwONKGrrSbB_x1utccM7tt3pVB0DNPTwi6gl3Shf5EK1448EoAWQzO2iO29Ggu7Bvat2jC1gYcpsF_bsmRASnHnp0gBRED-ARuqBDyj9iH6ySaHDNeQcrWeHD-49Qy9MKAKxhtP6-0eQjEj9-5RGqoMKCzCrEt1LQ6gNy_iC8W9MJgyXz9vfLhJltX" />
                                </div>
                                <div class="w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                                    <img alt="User" class="w-full h-full object-cover" data-alt="Headshot of a confident executive in a tailored business blazer with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrIhgBlZ_q5mMEzGZtyxbJC-IFlAebHNd4CXUYfk-LVudf7ol1EYB4D0wl_5JfcfcDUf0ok1gzj_vYxkL7q3qQunZYb0KcTfYDGZw1FFa7xe5hejgMI_PqEIX0x3qV4qgyT2t-5NmKqvNY6HmMD6GxWi4af0T3kE18xocM5cNM_v66wtV6f3an2Jy-U9f1nUCsVS0tV9qQGVNI1Patlp4Jk2o-FYMJHLFXE44S3XWXjQ2PfAqmbmSw-FPXcIICj8Ac6OGjQvKVrUgr" />
                                </div>
                            </div>
                            <span class="text-on-surface-variant font-medium">+2,400 success stories</span>
                        </div>
                    </div>
                    <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-surface-container-high p-8 rounded-2xl relative">
                            <span class="material-symbols-outlined text-primary-container/30 text-6xl absolute top-4 right-4">format_quote</span>
                            <div class="relative z-10">
                                <p class="text-on-surface-variant italic mb-6 leading-relaxed">"CareerQuery Pro didn't just fix my resume; they redefined my professional narrative. Within 3 weeks, I secured a Director role at a leading tech firm with a 40% salary increase."</p>
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">MS</div>
                                    <div>
                                        <div class="font-headline font-bold text-sm">Marcus Sterling</div>
                                        <div class="text-xs text-secondary">Director of Engineering</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-surface-container-high p-8 rounded-2xl relative mt-8 md:mt-12">
                            <span class="material-symbols-outlined text-primary-container/30 text-6xl absolute top-4 right-4">format_quote</span>
                            <div class="relative z-10">
                                <p class="text-on-surface-variant italic mb-6 leading-relaxed">"The LinkedIn optimization was a game-changer. My profile views increased by 600%, and I was headhunted for two executive positions in the first month."</p>
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">AL</div>
                                    <div>
                                        <div class="font-headline font-bold text-sm">Artemis Low</div>
                                        <div class="text-xs text-secondary">Marketing Strategist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;