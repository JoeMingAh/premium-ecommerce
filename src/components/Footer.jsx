import { Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-16 border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    <div className="md:col-span-1">
                        <span className="font-display font-bold text-2xl tracking-tight block mb-4">Sip Haven.</span>
                        <p className="text-foreground/60 max-w-xs">
                            Uncompromising flavor without the caffeine. Because great coffee shouldn't keep you awake.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-3 text-foreground/60">
                            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Brew Guide</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Subscriptions</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Wholesale</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-3 text-foreground/60">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Farm Partners</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-foreground/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sip Haven Coffee Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
