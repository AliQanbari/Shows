import React from "react";
import AppBar from "./appbar";
import SearchBar from "./SearchBar";

export default function TopSection() {
    return (
        <div className="bg-teal-400">
            <section title="Shows" className="container mx-auto py-8">
                <AppBar />
                <div className="flex flex-col lg:space-x-32 xl:space-x-64 mt-16 lg:mt-24 mb-24">
                    <div className="flex flex-col self-center text-center mt-8 lg:w-128">
                        <h1 className="text-4xl xl:text-5xl font-bold">My Show List</h1>
                        <div className="text-lg xl:text-xl align-text-bottom text-center py-4" style={{ color: '#2E3A59' }}>By Ali Qanbari</div>
                    </div>
                    <div className="flex flex-col place-items-center mt-8">
                        <SearchBar />
                    </div>
                </div>
            </section>
        </div>
    );
}