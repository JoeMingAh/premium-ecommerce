import { useState, useEffect } from 'react';
import { ShoppingBag, Loader2, Coffee, Droplets, Leaf, ChevronDown } from 'lucide-react';
import { createCheckoutWithProduct, fetchDefaultProduct } from '../lib/shopify';

export default function ProductSection() {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const [productInfo, setProductInfo] = useState({
        title: "Sip Haven",
        description: "Loading premium coffee...",
        imageUrl: "",
        variantId: "gid://shopify/ProductVariant/45505881564227"
    });

    useEffect(() => {
        const loadProduct = async () => {
            const product = await fetchDefaultProduct();
            if (product) {
                setProductInfo({
                    title: product.title || "Premium Product",
                    description: product.description || "The perfect decaf experience.",
                    imageUrl: product.images[0]?.src || "/hero_product.png",
                    variantId: product.variants[0]?.id || "gid://shopify/ProductVariant/45505881564227"
                });
            }
        };
        loadProduct();
    }, []);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            const checkoutUrl = await createCheckoutWithProduct(productInfo.variantId, 1);
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error("Checkout error:", error);
            setIsCheckingOut(false);
        }
    };

    return (
        <section id="product" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Image Left */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
                    <img
                        src={productInfo.imageUrl}
                        alt={productInfo.title}
                        className="w-full max-w-lg mx-auto object-contain rounded-2xl shadow-xl border border-border/50 bg-muted/40 p-4 transition-transform duration-700 hover:scale-[1.02]"
                        style={{ maxHeight: '700px' }}
                    />
                </div>

                {/* Content Right */}
                <div className="flex flex-col items-start lg:pl-8">

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                        {productInfo.title}
                    </h2>

                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                        {productInfo.description}
                    </p>

                    {/* Taste Profile Module */}
                    <div className="w-full mb-10">
                        <h4 className="font-bold text-sm tracking-widest text-foreground/50 uppercase mb-4">Taste Profile</h4>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium border border-border">Medium Roast</span>
                            <span className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium border border-border">Swiss Water® Decaf</span>
                            <span className="px-3 py-1 bg-muted text-foreground rounded-md text-sm font-medium border border-border">Ethiopia</span>
                        </div>

                        <div className="flex items-center gap-6 pb-8 border-b border-border/60">
                            <div className="flex items-center gap-2 text-foreground/80">
                                <Droplets className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">Strawberry</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-border"></div>
                            <div className="flex items-center gap-2 text-foreground/80">
                                <Leaf className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">Almond</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-border"></div>
                            <div className="flex items-center gap-2 text-foreground/80">
                                <Coffee className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">Sweet Cream</span>
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
                                onClick={() => setIsSubscribed(!isSubscribed)}
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
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                            className="w-full bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-xl font-bold text-lg transition-all hover-lift flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
                        >
                            {isCheckingOut ? 'Loading Secure Checkout...' : (isSubscribed ? 'Subscribe Now — $18.70' : 'Buy Once — $22.00')}
                            {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingBag className="w-5 h-5" />}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
