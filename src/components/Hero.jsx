import { useState, useEffect } from 'react';
import { ShoppingBag, PlayCircle, Loader2 } from 'lucide-react';
import { createCheckoutWithProduct, fetchDefaultProduct } from '../lib/shopify';

export default function Hero() {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [productInfo, setProductInfo] = useState({
        title: "Eclipse 2.0",
        description: "Experience studio-quality audio enclosed in a masterpiece of modern architecture. Designed for the purist.",
        imageUrl: "/hero_product.png",
        variantId: "gid://shopify/ProductVariant/45505881564227"
    });

    useEffect(() => {
        const loadProduct = async () => {
            const product = await fetchDefaultProduct();
            if (product) {
                setProductInfo({
                    title: product.title || "Premium Product",
                    description: product.description || "Experience studio-quality audio enclosed in a masterpiece of modern architecture. Designed for the purist.",
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
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background z-10"></div>
                <img
                    src={productInfo.imageUrl}
                    alt={productInfo.title}
                    className="w-full h-full object-cover object-center animate-fade-in-up"
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-12 md:mt-24">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 backdrop-blur border border-border text-sm font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="w-2 h-2 rounded-full bg-primary animate-subtle-pulse"></span>
                    Meet {productInfo.title}
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Sound that defies <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">expectations.</span>
                </h1>

                <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {productInfo.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all hover-lift flex items-center justify-center gap-2 shadow-xl shadow-primary/20 disabled:opacity-70 disabled:pointer-events-none"
                    >
                        {isCheckingOut ? 'Loading Secure Checkout...' : 'Shop Now'}
                        {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingBag className="w-5 h-5" />}
                    </button>

                    <button className="w-full sm:w-auto bg-background/50 hover:bg-background/80 backdrop-blur border border-border text-foreground px-8 py-4 rounded-full font-medium text-lg transition-all hover-lift flex items-center justify-center gap-2">
                        Watch the Film
                        <PlayCircle className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}
