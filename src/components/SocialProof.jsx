import { Star } from 'lucide-react';

export default function SocialProof() {
    const reviews = [
        {
            author: "Sarah J.",
            role: "Audio Engineer",
            content: "The clarity is unmatched. I've tested speakers five times this price that don't even come close to the soundstage Eclipse provides.",
            rating: 5
        },
        {
            author: "Marcus T.",
            role: "Interior Designer",
            content: "Finally, a smart speaker that doesn't look like a plastic toy. It's a genuine piece of modern art that happens to sound incredible.",
            rating: 5
        },
        {
            author: "Elena R.",
            role: "Music Producer",
            content: "The low-end response is tight and punchy without muddying the mids. It's my new reference speaker for mixing in the living room.",
            rating: 5
        },
        {
            author: "David L.",
            role: "Audiophile",
            content: "Absolutely blown away. The spatial tuning actually works. Moving it from my desk to the bookshelf automatically adjusted the EQ perfectly.",
            rating: 4
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Don't just take our word for it.</h2>
                        <p className="text-lg text-foreground/70">Trusted by over 10,000 audiophiles globally.</p>
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
