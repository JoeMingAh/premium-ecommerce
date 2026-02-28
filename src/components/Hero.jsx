import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">

            {/* Immersive Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&q=80&w=2000"
                    alt="Cozy morning coffee"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            </div>

            <div className="container relative z-20 mx-auto px-4 text-center mt-16">

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="w-2 h-2 rounded-full bg-primary animate-subtle-pulse"></span>
                    Small Batch. Hand Roasted.
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white animate-fade-in-up" style={{ animationDelay: '0.2s', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                    Uncompromising Flavor.
                    <br className="hidden md:block" /> Zero Jitters.
                </h1>

                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Masterfully roasted Swiss Water® Decaf that tastes like a dream. Because great coffee shouldn't keep you awake.
                </p>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a
                        href="#product"
                        className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all hover-lift items-center justify-center gap-2 shadow-xl"
                    >
                        Discover the Roast
                        <ArrowDown className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
}
