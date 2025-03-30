import { useScrollSnap } from '../hooks/useScrollSnap';

export const Layout = ({ children }) => {
    useScrollSnap();

    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {children}
        </main>
    );
}; 