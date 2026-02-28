import { Star, Instagram } from 'lucide-react';

export default function SocialProof() {
    const reviews = [
        {
            imageUrl: "https://images.unsplash.com/photo-1444418185997-1145401101e0?auto=format&fit=crop&q=80&w=800",
            author: "@sarah.brews",
            role: "Coffee Enthusiast",
            content: "The flavor profile is unmatched. I've tried dozens of decafs that taste flat or burnt, but Sip Haven is genuinely sweet and complex.",
            rating: 5
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
            author: "@marcus_pours",
            role: "Home Barista",
            content: "Finally, a decaf that pulls a beautiful shot of espresso. The crema is thick and the strawberry notes really shine through.",
            rating: 5
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&q=80&w=800",
            author: "@elena.reads",
            role: "Night Owl",
            content: "This is my go-to evening ritual. It gives me the cozy satisfaction of a great cup of coffee without ruining my sleep schedule.",
            rating: 5
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
            author: "@roastmaster_dave",
            role: "Café Owner",
            content: "Absolutely blown away by the quality. The Swiss Water process makes a world of difference. My customers can't even tell it's decaf.",
            rating: 5
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-muted/40 border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Loved by coffee obsessives.</h2>
                        <p className="text-lg text-foreground/70">Trusted by over 10,000 home brewers globally. Tag us to be featured.</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                            ))}
                        </div>
                        <p className="font-medium text-lg text-foreground">4.9/5 Average Rating</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-background rounded-2xl overflow-hidden flex flex-col h-full hover-lift border border-border/50 shadow-sm">

                            {/* Image Header */}
                            <div className="relative aspect-square overflow-hidden group">
                                <img
                                    src={review.imageUrl}
                                    alt={`Review by ${review.author}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur rounded-full p-2">
                                    <Instagram className="w-4 h-4 text-foreground" />
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'fill-muted text-foreground/40'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-foreground/80 flex-grow mb-6 leading-relaxed italic">
                                    "{review.content}"
                                </p>
                                <div className="border-t border-border/60 pt-4">
                                    <p className="font-bold text-foreground">{review.author}</p>
                                    <p className="text-xs font-medium text-primary mt-1 uppercase tracking-wider">{review.role}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
