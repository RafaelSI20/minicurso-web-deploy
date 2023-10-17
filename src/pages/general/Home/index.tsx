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

    const style_red = `
    flex
    flex-column
    w-full
    h-full
    border-orange-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    align-items-center
    justify-content-around
    `

    const red_first_row = `
    flex
    flex-row
    w-full
    justify-content-center
    `

    const red_second_row = `
    flex
    flex-row
    w-full
    justify-content-around
    `

    const red_third_row = `
    w-full
    flex
    `

    const green_container = `
    border-solid border-green-500 w-8rem h-4rem m-2
    `

    const green_container_grow = `
    border-solid border-green-500 w-8rem h-4rem m-2 flex-grow-1
    `

    return (
        <>
            <div className={`w-full h-screen flex flex-row m-2 p-4`}>
                <div className={style}>2</div>
                <div className={style_red}>
                    <div className={red_first_row}>
                        <div className={green_container}>1</div>
                        <div className={green_container}>2</div>
                    </div>
                    <div className={red_second_row}>
                        <div className={green_container}>1</div>
                        <div className={green_container}>2</div>
                        <div className={green_container}>3</div>
                    </div>
                    <div className={red_third_row}>
                        <div className={green_container_grow}>1</div>
                    </div>
                </div>
            </div>
        </>
    )
}

