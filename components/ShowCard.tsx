import { Show } from "lib/Show";
import Image from "next/image";

export default function ShowCard({ show }: { show: Show }) {
    const url = `/images/${show.slug}.jpg`;
    return (
        <div className="flex flex-col items-center mt-2">
            <div className="relative" style={{ width: '225px', height: '320px' }}>
                <Image className="rounded-lg shadow-md m-4" width="225px" height="320px" src={url} alt={show.slug} />
                <div className="absolute right-0 top-8 bg-white rounded-l-full shadow-lg">
                    <div className="flex flex-row p-1">
                        <span><svg className="fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24" /><path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z" /></g></svg></span>
                        <p className="text-center text-md font-bold">{show.score}/10</p>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 right-0">
                    <p className="text-left font-bold text-white stroked-text p-2 from-black to-transparent bg-gradient-to-t rounded-b-lg">{show.name}</p>
                </div>
            </div>
        </div>

    );
};
