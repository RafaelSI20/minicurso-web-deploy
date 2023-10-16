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
                <div className={style}>1</div>
            </div>
        </>
    )
}

