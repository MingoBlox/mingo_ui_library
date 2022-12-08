import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const MingoSearch = () => {

    return (
        <div className="relative">
            <input type="text" className="h-8 w-80 pr-8 pl-5 rounded-full outline outline-1 outline-outline_light placeholder-outline_deep" placeholder="Search..." />

            <div className="absolute top-1.5 right-5">
                <MagnifyingGlassIcon className="text-outline_deep z-20 w-5 h-5" />
            </div>
        </div>
    )

}