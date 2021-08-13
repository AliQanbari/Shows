
type AppBarProps = {
    title? : String,
}

type AppBarItemProps = {
    name : string,
}

function AppBarMenuItem({ name } : AppBarItemProps){
    return (
        <div className="mx-5">
            <a className="text-lg">{name}</a>
        </div>
    );
}

export default function AppBar({ title = 'Shows' } : AppBarProps){
    return (
    <div className="flex flex-row pl-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
        <div className="flex-grow"></div>
        <div className="flex-row hidden lg:flex xl:mr-16">
            <AppBarMenuItem name="All"/>
            <AppBarMenuItem name="Anime"/>
            <AppBarMenuItem name="Movies"/>
            <div className="divider-line justify-self-center"></div>
            <AppBarMenuItem name="Login"/>
        </div>
    </div>
    );
}