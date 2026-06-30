import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Info, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Shopping Cart | Graft3D',
    description: 'View the items in your shopping cart at Graft3D Healthcare Solutions.',
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: '/cart',
    },
};

export default function CartPage() {
    return (
        <main className="min-h-[50vh] bg-white pt-10 pb-20">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-[#fcfdfd] border-t-2 border-primary border border-gray-100 rounded px-4 py-3 mb-6 flex items-center text-sm text-[#515151]">
                    <span className="text-primary mr-3">
                        <Info size={16} />
                    </span>
                    YOUR CART IS CURRENTLY EMPTY.
                </div>
                <Button asChild className="uppercase text-[12px] font-bold px-6 py-2.5 tracking-wider w-fit">
                    <Link href="/healthcare-3d-products" className="flex items-center gap-2">
                        <ChevronLeft size={16} strokeWidth={3} className="mr-0.5" /> RETURN TO SHOP
                    </Link>
                </Button>
            </div>
        </main>
    )
}
