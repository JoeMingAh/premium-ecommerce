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
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
            <div className="container relative z-20 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Content Left */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 backdrop-blur border border-border text-sm font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="w-2 h-2 rounded-full bg-primary animate-subtle-pulse"></span>
                        Freshly Roasted & Ready
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {productInfo.title}
                    </h1>

                    <p className="text-lg text-foreground/70 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
                    </div>
                </div>

                {/* Image Right */}
                <div className="relative animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '0.5s' }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl blur-3xl -z-10"></div>
                    <img
                        src={productInfo.imageUrl}
                        alt={productInfo.title}
                        className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-2xl border border-border/50 bg-muted/30 p-2"
                        style={{ maxHeight: '600px' }}
                    />
                </div>

            </div>
        </section>
    );
}
