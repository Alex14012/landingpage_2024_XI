function MainContent(){
    return(
        <>
        <div className="flex gap-1 flex-col">
            <div className="relative flex flex-col h-[500px] w-full overflow-hidden">
            <div className="h-full w-full bg-Crossup transition bg-no-repeat bg-cover bg-center hover:scale-125 ease-in-out delay-150 duration-500 peer">
            </div>
            <div className="absolute w-full bottom-0 transition ease-linear flex flex-col bg-white peer-hover:opacity-30"> 
                    <h1 className="text-5xl font-PlusJakartaSans font-medium">
                    This controller may change the meta
                    </h1>
                    <h3 className="text-3xl">
                    Cross up review
                    </h3>
                </div>
            </div>

            <div className="relative flex flex-col h-[500px] w-full overflow-hidden">
            <div className="h-full w-full bg-KasaneTeto transition bg-no-repeat bg-cover bg-center hover:scale-125 ease-in-out delay-150 duration-500 peer">
            </div>
                <div className="absolute bottom-0 w-full transition ease-linear flex flex-col bg-white peer-hover:opacity-30"> 
                    <h1 className="text-5xl font-PlusJakartaSans font-medium">
                    From a joke to a real soundbank
                    </h1>
                    <h3 className="text-3xl">
                    SynthV Kasane Teto preview
                    </h3>
                </div>
            </div>

            <div className="relative flex flex-col h-[500px] w-full overflow-hidden">
            <div className="h-full w-full bg-CPU transition bg-no-repeat bg-cover bg-center hover:scale-125 ease-in-out delay-150 duration-500 peer">
            </div>
                <div className="absolute bottom-0 w-full transition ease-linear flex flex-col bg-white peer-hover:opacity-30"> 
                    <h1 className="text-5xl font-PlusJakartaSans font-medium">
                    top 10 cpu in 2024
                    </h1>
                    <h3 className="text-3xl">
                    list of cpu that worth to buy in 2024
                    </h3>
                </div>
            </div>


        </div>
        </>
    )
}

export default MainContent