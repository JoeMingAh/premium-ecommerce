import { useState, useEffect } from 'react';
import { ShoppingBag, Loader2, Coffee, Droplets, Leaf, ChevronDown } from 'lucide-react';
import { createCheckoutWithProduct, fetchAllProducts } from '../lib/shopify';

export default function ProductSection() {
    const [products, setProducts] = useState([]);
    const [loadingStates, setLoadingStates] = useState({});
    const [subscriptionStates, setSubscriptionStates] = useState({});

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchAllProducts();

            // Map the generic Shopify data into our frontend structure
            const formattedProducts = fetchedProducts.map(p => {
                const variant = p.variants[0];
                return {
                    id: p.id,
                    title: p.title,
                    description: p.description || "A rich, full-bodied experience.",
                    imageUrl: p.images[0]?.src || "/hero_product.png",
                    variantId: variant?.id,
                    price: variant?.price?.amount ? parseFloat(variant.price.amount) : 20.00
                };
            });

            setProducts(formattedProducts);
        };
        loadProducts();
    }, []);

    const toggleSubscription = (productId) => {
        setSubscriptionStates(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const handleCheckout = async (variantId, productId) => {
        setLoadingStates(prev => ({ ...prev, [productId]: true }));
        try {
            const checkoutUrl = await createCheckoutWithProduct(variantId, 1);
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error("Checkout error:", error);
            setLoadingStates(prev => ({ ...prev, [productId]: false }));
        }
    };

    if (products.length === 0) {
        return (
            <section id="product" className="py-24 bg-background min-h-[50vh] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-foreground/50">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p>Loading the roasts...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="product" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 flex flex-col gap-32">

                {products.map((product, index) => {
                    const isReversed = index % 2 !== 0;
                    const isSubscribed = subscriptionStates[product.id] || false;
                    const isCheckingOut = loadingStates[product.id] || false;

                    const basePrice = product.price;
                    const subscribePrice = (basePrice * 0.85).toFixed(2);

                    return (
                        <div key={product.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full max-w-lg mx-auto object-contain rounded-2xl shadow-xl border border-border/50 bg-muted/40 p-4 transition-transform duration-700 hover:scale-[1.02]"
                                    style={{ maxHeight: '700px' }}
                                />
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start lg:px-8">

                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                                    {product.title}
                                </h2>

                                <div className="prose prose-lg text-foreground/70 mb-8 leading-relaxed max-w-none" dangerouslySetInnerHTML={{ __html: product.description }}></div>

                                {/* Taste Profile Module - Hardcoded aesthetic for now, can be dynamic later */}
                                <div className="w-full mb-10">
                                    <h4 className="font-bold text-sm tracking-widest text-foreground/50 uppercase mb-4">Taste Profile</h4>

                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium border border-border">Specialty Roast</span>
                                        <span className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium border border-border">Ethically Sourced</span>
                                        <span className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium border border-border">Small Batch</span>
                                    </div>

                                    <div className="flex items-center gap-6 pb-8 border-b border-border/60">
                                        <div className="flex items-center gap-2 text-foreground/80">
                                            <Droplets className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">Rich</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-border"></div>
                                        <div className="flex items-center gap-2 text-foreground/80">
                                            <Leaf className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">Smooth</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-border"></div>
                                        <div className="flex items-center gap-2 text-foreground/80">
                                            <Coffee className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">Balanced</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Purchasing Flow */}
                                <div className="w-full bg-muted/30 border border-border rounded-2xl p-6 lg:p-8">

                                    {/* Subscribe Toggle */}
                                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
                                        <div>
                                            <h3 className="font-bold text-lg">Subscribe & Save 15%</h3>
                                            <p className="text-sm text-foreground/60">Delivered freshly roasted every 2 weeks.</p>
                                        </div>
                                        <button
                                            onClick={() => toggleSubscription(product.id)}
                                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isSubscribed ? 'bg-primary' : 'bg-border/60'}`}
                                        >
                                            <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${isSubscribed ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                        </button>
                                    </div>

                                    {/* Grind Type Dropdown */}
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium text-foreground/80 mb-2">Grind Type</label>
                                        <div className="relative">
                                            <select disabled className="w-full appearance-none bg-background border border-border text-foreground rounded-lg px-4 py-3 outline-none opacity-70 cursor-not-allowed">
                                                <option>Whole Bean Only</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50 pointer-events-none" />
                                        </div>
                                        <p className="text-xs text-primary mt-2">Whole bean ensures maximum freshness and flavor retention.</p>
                                    </div>

                                    {/* Checkout Button */}
                                    <button
                                        onClick={() => handleCheckout(product.variantId, product.id)}
                                        disabled={isCheckingOut}
                                        className="w-full bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-xl font-bold text-lg transition-all hover-lift flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
                                    >
                                        {isCheckingOut ? 'Loading Secure Checkout...' : (isSubscribed ? `Subscribe Now — $${subscribePrice}` : `Buy Once — $${basePrice.toFixed(2)}`)}
                                        {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingBag className="w-5 h-5" />}
                                    </button>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
