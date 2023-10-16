import {useAuth} from "@/provider/Auth";

export function Home() {
    const {perfil} = useAuth();

    return (
        <>
            <div className="outer">
                <div>1</div>
                <div>2</div>
            </div>
        </>
    )
}

