import React from "react";
import { AppBar, AppBarMenuItem, SmallVerticalDivider, SearchBar } from "aq_components/dist";

type TopSectionProps = {
    onSearch : (value : string) => void,
};

export default function TopSection({onSearch} : TopSectionProps) {
    return (
        <div className="bg-teal-400">
            <section title="Shows" className="container mx-auto py-8">
                <AppBar title={'Shows'} actions={<>
                    <AppBarMenuItem name="All" href="/" />
                    <AppBarMenuItem name="Anime" href="?type=Anime" />
                    <AppBarMenuItem name="Movies" href="?type=Movie" />
                    <SmallVerticalDivider />
                    <AppBarMenuItem name="Login" href="/admin"/>
                </>} />
                <div className="flex flex-col mt-16 lg:mt-24 mb-24">
                    <div className="flex flex-col self-center text-center mt-8 lg:w-128">
                        <h1 className="text-4xl xl:text-5xl font-bold">My Show List</h1>
                        <div className="text-lg xl:text-xl align-text-bottom text-center py-4" style={{ color: '#2E3A59' }}>By Ali Qanbari</div>
                    </div>
                    <div className="flex flex-col place-items-center mt-8">
                        <div className="">
                        <SearchBar onChange={onSearch} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}