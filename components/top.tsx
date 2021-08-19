import React from "react";
import Link from "next/link";
import { Show } from "lib/Show";
import AppBar from "./aq_components/app_bar";
import AppBarMenuItem from "./aq_components/app_bar_menu_item";
import SmallVerticalDivider from "./aq_components/divider_vertical_small";
import SearchBar from "./aq_components/search_bar";

type TopSectionProps = {
    type: string,
    shows: Show[],
    onSearch: (value: string) => void,
};

export default function TopSection({ onSearch, shows, type }: TopSectionProps) {
    const watchTime = shows
        .map(show => show.episodeCount * show.episodeLength)
        .reduce((w1, w2) => w1 + w2);

    const hours = (watchTime / 60) >> 0;
    const minutes = (watchTime % 60);

    return (
        <div className="bg-teal-400 mb-4">
            <section title="Shows" className="container mx-auto py-8">
                <AppBar title={'Shows'} actions={<>
                    <AppBarMenuItem>
                        <Link href="/">
                            <a>All</a>
                        </Link>
                    </AppBarMenuItem>
                    <AppBarMenuItem>
                        <Link href="?type=Anime">
                            <a>Anime</a>
                        </Link>
                    </AppBarMenuItem>
                    <AppBarMenuItem>
                        <Link href="?type=Movie">
                            <a>Movies</a>
                        </Link>
                    </AppBarMenuItem>
                    <SmallVerticalDivider />
                    <AppBarMenuItem>
                        <Link href="/admin">
                            <a>Login</a>
                        </Link>
                    </AppBarMenuItem>
                </>} />
                <div className="flex flex-col mt-16 lg:mt-24 mb-24">
                    <div className="flex flex-col self-center text-center mt-8 lg:w-128">
                        <h1 className="text-4xl xl:text-5xl font-bold">My Show List</h1>
                        <div className="text-lg xl:text-xl align-text-bottom text-center py-4" style={{ color: '#2E3A59' }}>
                            Watched a total of {hours} hours and {minutes} minutes of {type}
                        </div>
                    </div>
                    <div className="flex flex-col place-items-center mt-8">
                        <div>
                            <SearchBar onChange={onSearch} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}