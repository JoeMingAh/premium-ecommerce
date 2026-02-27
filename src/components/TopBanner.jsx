import { ArrowRight } from 'lucide-react';

export default function TopBanner() {
    return (
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 group cursor-pointer transition-colors hover:bg-primary/90">
            <span>Free Shipping on Orders Over $50</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
    );
}
