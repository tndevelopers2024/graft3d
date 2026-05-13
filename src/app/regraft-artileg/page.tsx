import ArtilegPage from '@/components/sections/regraft-artileg/ArtilegPage';
import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.regraftArtileg;

export default function RegraftArtilegPage() {
    return (
        <main className="min-h-screen bg-white">
            <ArtilegPage />
        </main>
    );
}
