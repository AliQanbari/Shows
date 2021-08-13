import { Show } from "lib/Show";
import Image from 'next/image';

export default function ShowCard({ show }: { show: Show }) {
    const url = `/images/${show.slug}.jpg`;
    return (
        <div className="relative">
            <p>{show.name}</p>
            <Image className="rounded-lg shadow-lg m-4" width="225px" height="320px" src={url} alt={show.slug} />
        </div>

    );
};
