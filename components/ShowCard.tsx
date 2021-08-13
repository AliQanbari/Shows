import { Show } from "lib/Show";

export default function ShowCard({ show }: { show: Show }) {
    const url = `/images/${show.slug}.jpg`;
    return (
        <div className="bg-white shadow-md rounded-md">
            <div>{show.name}</div>
            <div><span>*</span>{show.score}/10</div>
            <img></img>
        </div>
    );
};
