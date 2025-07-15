function Herozinho() {
    return (
        <div className="bg-[url('/images/bg.png')] bg-cover bg-center lg:w-[1280px] lg:h-[984px] @md:w-[393px]     ">
            <span className=" flex flex-col max-w[528px] p-[187.5px] justify-center items-center">
                <span className="flex flex-row justify-center items-center gap-2.5 pb-6">
                    <img className="max-w-[160px]" src="\images\8d1e7a913cdd1dec86e6b1beb28a973ffe6345d7.png" />
                    <h1 className="lg:flex max-w-[334px] text-6x1 font-semibold @md:hidden">Financeiro</h1>
                </span>
                <div className="flex flex-col justify-start items-start max-w-[528px] w-full">
                    <p className="text-base font-semibold pb-5">E-mail ou usuário</p>
                    <input type="text"
                    placeholder="E-mail ou usuário"
                    className="input border-r-[12px] w-full p-3 rounded border border-gray-300 text-white "/>
                    <p className="text-base font-semibold pt-5 pb-5">Senha</p>
                    <input type="text"
                    placeholder="Senha"
                    className="input border-r-[12px] w-full p-3 rounded border border-gray-300 text-white "/>
                    <label class="flex items-center space-x-2 cursor-pointer pt-4 pb-12">
                        <input type="checkbox" class=" w-4 h-4"/>
                        <span class="font-semibold text-[12px] select-none">Lembrar senha</span>
                    </label>
                    <div className="cursor-pointer w-full rounded-xl items-center flex justify-center h-12 opacity-90 bg-[#FAAE2B] font-bold">Login
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3.5H19C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H15M10 17.5L15 12.5M15 12.5L10 7.5M15 12.5H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <label className="flex justify-center items-center w-[528px] p-5">
                    <a href="#"className="text-white underline-offset-1">
                    Esqueceu a senha?
                    </a>
                    </label>
                    <div className="w-[528px] h-[1px] bg-[#FAAE2B]"></div>
                </div>
                    <label className=" cursor-pointer flex items-center justify-center pt-5.5">    
                    <div className="w-[313px] h-12 bg-[#7D7D7D] rounded-xl items-center flex justify-center opacity-75 font-bold">Cadastre-se
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H6C4.93913 15.5 3.92172 15.9214 3.17157 16.6716C2.42143 17.4217 2 18.4391 2 19.5V21.5M19 8.5V14.5M22 11.5H16M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </label>
            </span>
        </div>
    )
}

export default Herozinho 