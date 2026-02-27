import { AudioWaveform, Zap, Wifi } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: "Uncompromising Fidelity",
            description: "Custom-tuned 50mm dynamic drivers deliver a soundstage so vast, you'll feel every note vibrating through your soul. Precision-engineered acoustic mesh maintains absolute clarity.",
            icon: <AudioWaveform className="w-6 h-6 text-primary" />,
            image: "/feature1_audio.png",
            reversed: false
        },
        {
            title: "Architectural Elegance",
            description: "Forged from aerospace-grade aluminum and wrapped in acoustic fabric. Eclipse doesn't just play your music—it elevates the aesthetic of any room it occupies.",
            icon: <Zap className="w-6 h-6 text-primary" />,
            image: "/feature2_design.png",
            reversed: true
        },
        {
            title: "Intuitive Intelligence",
            description: "Seamlessly connects to your entire ecosystem. With advanced spatial awareness, it automatically tunes its EQ to match the exact acoustics of your room.",
            icon: <Wifi className="w-6 h-6 text-primary" />,
            image: "/feature3_smart.png",
            reversed: false
        }
    ];

    return (
        <section id="features" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Mastery in every detail.</h2>
                    <p className="text-lg text-foreground/70">
                        We spent three years refining the relationship between aesthetics and acoustics so you never have to compromise.
                    </p>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">
                    {features.map((feature, idx) => (
                        <div key={idx} className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 group">
                                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] glass bg-muted/30">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/10 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 flex flex-col items-start">
                                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                                <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group">
                                    Learn more about engineering
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
