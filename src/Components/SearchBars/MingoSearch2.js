import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export const MingoSearch2 = () => {
    return (
        <>
            <div className="relative">
                <input type="search" id="search_form" className="h-8 w-80 pr-8 pl-5 rounded-full outline outline-1 outline-outline_light placeholder-outline_deep" placeholder='Search...' />
                <div className="absolute top-0 m-1 right-0">
                    <button type="button" className="bg-outline_deep rounded-full py-1 px-3">
                        <MagnifyingGlassIcon className="text-default_white z-20 w-5 h-4" />
                    </button>
                </div>
            </div>
        </>
    )
}




