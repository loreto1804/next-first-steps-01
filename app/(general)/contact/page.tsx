import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'esta es la pagina de contactos',
};
export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}