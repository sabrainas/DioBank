import { Header } from "./Header"

export const Layout = ({children}: any) => {
    return (
        <>
            <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center">
                <Header/>
                {children}
            </div>
        </>
    )
}