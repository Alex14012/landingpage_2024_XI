function NavBar(){
    return(
        <>
        <div className="w-full z-50 fixed">
            <div className="flex flex-row justify-between gap-3 bg-red-500 w-full h-14">
                <div className="flex flex-row gap-3">
                <div className="bg-[url('/src/assets/img/bx-home-alt-2.png')] hover:bg-[url('/src/assets/img/bxs-home-alt-2.png')] bg-cover w-12 h-12 transition ease-in-out delay-1000 duration-300"></div> 
                <h1 className="text-5xl hover:underline">Artikel</h1>
                </div>
                <h1 className="font-CosmicIndustry text-5xl ">Techy</h1>
            </div>           
        </div>
        </>
    )
}

export default NavBar