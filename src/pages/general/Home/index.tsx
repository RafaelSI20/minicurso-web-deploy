import {useAuth} from "@/provider/Auth";

export function Home() {
    const style= `
    w-full
    h-full
    flex
    flex-row
    border-orange-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    align-items-center
    justify-items-center
    `

    return (
        <>
            <div className={`w-full h-screen flex flex-row m-2 p-4`}>
                <div className={style}>2</div>
                <div className={style}>1</div>
            </div>
        </>
    )
}

