import {useAuth} from "@/provider/Auth";

export function Home() {
    const style= `
    w-full
    h-full
    flex
    flex-column
    p-2
    border-blue-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    align-items-center
    justify-items-center
    `
    const miniBlue = `
        border-blue-500
        border-3
        border-round
        h-4rem
        w-8rem
        text-align-center
    `
    const firstRow=`
        flex
        flex-row
        w-full
        align-items-center
        justify-content-between
    `
    const secondRow=`
        flex
        flex-row
        w-full
        justify-content-evenly
    `
    
    const miniGreen=`
        border-3
        border-green-500
        border-round
        align-items-center
        h-4rem
        w-8rem
        m-2
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

    const thirdRow=`
        flex    
        justify-content-center
        align-item-center
    `
    return (
        <>
            <div className={`w-full h-screen flex flex-row m-2 p-4`}>
                <div className={style}>
                    <div className={firstRow}>    
                        <div className={miniBlue}>1</div>
                        <div className={miniBlue}>2</div>
                    </div>
                    <div className={secondRow}>
                        <div className={miniGreen}>1</div>
                        <div className={miniGreen}>2</div>
                        <div className={miniGreen}>3</div>
                    </div>
                    <div className={thirdRow}>
                        <div className={miniGreen}>1</div>
                    </div>
                </div>
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

