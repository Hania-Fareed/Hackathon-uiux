import HektoSidebar from "../components/hektosidebar";

export default function Hekto(){
    return(
        <div>
            <header className="relative py-16 mt-14 bg-purple-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-blue-900">Hekto demo</h1>
                </div>
            </header>
            <HektoSidebar/>
        </div>
    )
}