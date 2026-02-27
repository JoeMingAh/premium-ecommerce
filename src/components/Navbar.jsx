import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Loader2 } from 'lucide-react';
import { createCheckoutWithProduct } from '../lib/shopify';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // The Variant ID retrieved from the Shopify store
    const VARIANT_ID = "gid://shopify/ProductVariant/45505881564227";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            const checkoutUrl = await createCheckoutWithProduct(VARIANT_ID, 1);
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error(error);
            setIsCheckingOut(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'glass py-3 border-border/50' : 'bg-transparent py-5 border-transparent'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* Logo / Brand Name */}
                <div className="flex items-center gap-2">
                    <Menu className="w-6 h-6 md:hidden cursor-pointer" />
                    <span className="font-display font-bold text-xl tracking-tight">Sip Haven.</span>
                </div>

                {/* Desktop Links (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
                    <a href="#features" className="hover:text-primary transition-colors">Features</a>
                    <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
                    <a href="#specs" className="hover:text-primary transition-colors">Tech Specs</a>
                </div>

                {/* Persistent CTA */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        Log In
                    </button>
                    <button
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="bg-foreground text-background hover:bg-foreground/90 px-5 py-2 rounded-full font-medium text-sm transition-all hover-lift flex items-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                    >
                        {isCheckingOut ? 'Loading...' : 'Buy Now'}
                        {isCheckingOut ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingBag className="w-4 h-4" />}
                    </button>
                </div>

            </div>
        </nav>
    );
}
