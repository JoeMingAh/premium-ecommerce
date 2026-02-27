import { Star } from 'lucide-react';

export default function SocialProof() {
    const reviews = [
        {
            author: "Sarah J.",
            role: "Coffee Enthusiast",
            content: "The flavor profile is unmatched. I've tried dozens of decafs that taste flat or burnt, but Sip Haven is genuinely sweet and complex.",
            rating: 5
        },
        {
            author: "Marcus T.",
            role: "Home Barista",
            content: "Finally, a decaf that pulls a beautiful shot of espresso. The crema is thick and the strawberry notes really shine through.",
            rating: 5
        },
        {
            author: "Elena R.",
            role: "Night Owl",
            content: "This is my go-to evening ritual. It gives me the cozy satisfaction of a great cup of coffee without ruining my sleep schedule.",
            rating: 5
        },
        {
            author: "David L.",
            role: "Café Owner",
            content: "Absolutely blown away by the quality. The Swiss Water process makes a world of difference. My customers can't even tell it's decaf.",
            rating: 4
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Don't just take our word for it.</h2>
                        <p className="text-lg text-foreground/70">Trusted by over 10,000 coffee lovers globally.</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                            ))}
                        </div>
                        <p className="font-medium text-lg">4.9/5 Average Rating</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="glass rounded-2xl p-8 flex flex-col h-full hover-lift">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'fill-muted text-foreground/40'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-foreground/80 flex-grow mb-8 leading-relaxed">
                                "{review.content}"
                            </p>
                            <div>
                                <p className="font-bold">{review.author}</p>
                                <p className="text-sm text-foreground/60">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
