import { Show } from "lib/Show";
import Image from 'next/image';

export default function ShowCard({ show }: { show: Show }) {
    const url = `/images/${show.slug}.jpg`;
    return (
        <div>
            <p>{show.name}</p>
            <Image height="16px" width="16px" src="/icons/star_rate_white_24dp.svg" alt="Stars" />
            <Image className="rounded-lg shadow-md m-4" width="225px" height="320px" src={url} alt={show.slug} />
        </div>

    );
};
