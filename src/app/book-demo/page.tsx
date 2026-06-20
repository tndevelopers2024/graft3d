import React from 'react';
import { Metadata } from 'next';
import BookDemoContent from '@/components/sections/book-demo/BookDemoContent';

export const metadata: Metadata = {
    title: "Book Demo | Graft 3D Healthcare Solutions",
    description: "Schedule a demo with Graft 3D Healthcare Solutions. Explore our 3D printing products and services for healthcare.",
    alternates: {
        canonical: '/book-demo',
    },
};

const BookDemoPage = () => {
    return (
        <main>
            <div>
                <BookDemoContent />
            </div>
        </main>
    );
};

export default BookDemoPage;
