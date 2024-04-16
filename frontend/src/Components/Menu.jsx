import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone } from 'react-icons';




const Menu = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(true)
    // const [notificationOpen, setNotification] = useState(false)
    // const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <div>
            <nav className="bg-white border-b border-gray-300">
                <div className="flex justify-between items-center px-6">
                    
                    <button id="menu-button" onclick="expandSidebar()">
                        <i className="fas fa-bars text-cyan-500 text-lg"></i>
                    </button>
                   
                    <div className="mx-auto">
                        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="logo" className="h-20 w-28"/>
                    </div>
                   
                    <div className="space-x-4">
                        <button>
                            <i className="fas fa-bell text-cyan-500 text-lg"></i>
                        </button>
                        
                        <button>
                            <i className="fas fa-user text-cyan-500 text-lg"></i>
                        </button>
                    </div>
                </div>
            </nav>


           
            <div id="sidebar" className="w-28 bg-white h-screen fixed rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden">
               
                <div className="p-2 space-y-4">
                  
                    <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onclick="highlightSidebarItem(this)">
                        <i className="fas fa-home text-lg"></i>
                        <span className="font-medium transition-all duration-200 opacity-0">Inicio</span>
                    </button>

                    
                    <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onclick="highlightSidebarItem(this)">
                        <i className="fas fa-check-circle"></i>
                        <span className="font-medium transition-all duration-200 opacity-0">Autorizaciones</span>
                    </button>

                  
                    <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onclick="highlightSidebarItem(this)">
                        <i className="fas fa-users"></i>
                        <span className="font-medium transition-all duration-200 opacity-0">Usuarios</span>
                    </button>

                 
                    <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onclick="highlightSidebarItem(this)">
                        <i className="fas fa-store"></i>
                        <span className="font-medium transition-all duration-200 opacity-0">Comercios</span>
                    </button>

                   
                    <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onclick="highlightSidebarItem(this)">
                        <i className="fas fa-exchange-alt"></i>
                        <span className="font-medium transition-all duration-200 opacity-0">Transacciones</span>
                    </button>

                  
                    <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onclick="highlightSidebarItem(this)">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="font-medium transition-all duration-200 opacity-0">Cerrar sesión</span>
                    </button>
                </div>
            </div>


            
            <div className="ml-16 bg-gray-100 h-screen fixed w-full lg:w-3/4 transition-all duration-200 ease-in-out">

                
                <div className="flex items-center w-full mt-2 p-4">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <i className="fas fa-search text-gray-200"></i>
                        </span>
                        <input type="text" className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full text-sm placeholder-gray-400" placeholder="Buscar..." />
                    </div>
                </div>

                
                <div className="grid grid-cols-2 gap-4 mt-2 p-4">
                  
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-600 text-lg font-semibold pb-4">Usuarios</h2>
                        <div className="chart-container" style="position: relative; height:200px; width:200px">
                           
                            <canvas id="usersChart"></canvas>
                        </div>
                    </div>

                 
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-600 text-lg font-semibold pb-4">Comercios</h2>
                        <div className="chart-container" style="position: relative; height:200px; width:200px">
                          
                            <canvas id="commercesChart"></canvas>
                        </div>
                    </div>

                
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-600 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="text-sm leading-normal">
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Foto</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nombre</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-right">Rol</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10"/></td>
                                    <td className="py-4 px-6 border-b border-grey-light">Juan Pérez</td>
                                    <td className="py-4 px-6 border-b border-grey-light text-right">Administrador</td>
                                </tr>
                         
                            </tbody>
                        </table>
                    </div>

                   
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-gray-600 text-lg font-semibold pb-4">Transacciones</h2>
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="text-sm leading-normal">
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nombre</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Fecha</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-right">Monto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">Carlos Sánchez</td>
                                    <td className="py-4 px-6 border-b border-grey-light">27/07/2023</td>
                                    <td className="py-4 px-6 border-b border-grey-light text-right">$1500</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>

                

            </div>
            </div>


            )
}

            export default Menu
