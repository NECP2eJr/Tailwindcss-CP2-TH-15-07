import { Outlet, NavLink } from "react-router-dom";

function Mpage() {
  return (
    <div className="overflow-x-hidden overflow-y-auto flex">
      <span className="flex flex-row bg-[#151518] w-screen">
        {/* Sidebar */}
        <div className="bg-[#09090B] w-[128px] h-screen flex-col justify-items-start">
          {/* Usuário */}
          <span className="flex flex-row gap-3.5 pt-5">
            <img
              src="\images\37d74396bb7edd43800d4ede6718807191ef1b63.jpg"
              className="rounded-full w-[32px] h-[32px] object-cover ml-4"
              alt="User"
            />
            <p className="text-white font-medium text-[12px] mt-1.5">UI August</p>
          </span>

          {/* Menu principal */}
          <span className="mt-4 flex flex-col items-start">
            <p className="pl-4 text-[10px] font-normal text-[#FFFFFF66]">Páginas</p>

            {/* Home */}
            <NavLink
              to="/app/home"
              className={({ isActive }) =>
                `mt-1 ml-4 w-[100px] flex gap-3 text-[10px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg
                className="ml-1"
                width="18"
                height="20"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home
            </NavLink>

            {/* Fluxo de caixa */}
            <NavLink
              to="/app/fluxo-caixa"
              className={({ isActive }) =>
                `mt-2.5 ml-4 w-[100px] flex gap-2 text-[10px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 8H16M8 12H14M11 16H16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Fluxo de caixa
            </NavLink>

            {/* Projeções */}
            <NavLink
              to="/app/projecoes"
              className={({ isActive }) =>
                `mt-2.5 ml-4 w-[100px] flex gap-2 text-[10px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3V21H21M19 9L14 14L10 10L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Projeções
            </NavLink>

            {/* Nova transação */}
            <NavLink
              to="/app/nova-transacao"
              className={({ isActive }) =>
                `mt-2.5 ml-4 w-[100px] flex gap-2 text-[9px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8M14 2V8H20M3 15H9M6 12V18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Nova transação
            </NavLink>

            {/* Bancos */}
            <NavLink
              to="/app/bancos"
              className={({ isActive }) =>
                `mt-2.5 ml-4 w-[100px] flex gap-2 text-[10px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12C5 6.7 12.5 5.5 16 7C16.2 6.4 17.5 5 19 5V8C19.5 8.5 20 9 20 10H22V14H20C19.7 15 19 15.5 18 16V20H14V18H11V20H7V16.5C5 15 5 13.8 5 12ZM5 12H4C2.9 12 2 11.1 2 10V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Bancos
            </NavLink>
          </span>
          <span className="mt-4 flex flex-col items-start">
            <p className="pl-4 text-[10px] font-normal text-[#FFFFFF66]">Admin</p>

            <NavLink
              to="/app/home"
              className={({ isActive }) =>
                `mt-1 ml-4 w-[100px] flex gap-3 text-[9px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 19C14 17.4087 13.3679 15.8826 12.2426 14.7574C11.1174 13.6321 9.5913 13 8 13M8 13C6.4087 13 4.88258 13.6321 3.75736 14.7574C2.63214 15.8826 2 17.4087 2 19M8 13C10.2091 13 12 11.2091 12 9C12 6.79086 10.2091 5 8 5C5.79086 5 4 6.79086 4 9C4 11.2091 5.79086 13 8 13ZM19 8V14M22 11H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Permitir acesso
            </NavLink>
            <NavLink
              to="/app/home"
              className={({ isActive }) =>
                `mt-1 ml-4 w-[100px] flex gap-3 text-[9px] items-center h-[30px] font-semibold rounded-[12px] transition-colors ${isActive ? "bg-[#FAAE2B] text-black" : "bg-[#09090B] hover:bg-[#1f1f22] text-white"
                }`
              }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3C3 17 6 15 6 8C6 4.7 8.7 2 12 2C12.7 2 13.3 2.1 13.9 2.3M10.2998 21C10.4672 21.3044 10.7133 21.5583 11.0123 21.7352C11.3113 21.912 11.6524 22.0053 11.9998 22.0053C12.3472 22.0053 12.6883 21.912 12.9873 21.7352C13.2864 21.5583 13.5324 21.3044 13.6998 21M21 8C21 9.65685 19.6569 11 18 11C16.3431 11 15 9.65685 15 8C15 6.34315 16.3431 5 18 5C19.6569 5 21 6.34315 21 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Alerta
            </NavLink>
          </span>
          <img src="\images\8d1e7a913cdd1dec86e6b1beb28a973ffe6345d7.png" className="ml-10 mt-4 w-[50px]"/>
        </div>

        {/* Conteúdo da página */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </span>
    </div>

  );
}

export default Mpage;
