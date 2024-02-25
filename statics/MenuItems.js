import { LuHome, LuLightbulb, LuAward, LuAlbum, LuBookKey, LuBrainCog, LuUserCog } from "react-icons/lu";

export const userMenuItems = [
    {
        id: 0,
        name: "Home",
        path: "/map",
        icon: <LuHome />
    },
    {
        id: 1,
        name: "Ideias",
        path: "/map/ideias",
        icon: <LuLightbulb />
    },
    {
        id: 2,
        name: "Melhorias",
        path: "/map/melhorias",
        icon: <LuBookKey />
    },
    {
        id: 3,
        name: "Resumos",
        path: "/map/resumos",
        icon: <LuAlbum />
    },
    {
        id: 4,
        name: "Config",
        path: "/map/config",
        icon: <LuBrainCog />
    },
]



export const adminMenuItems = [
    {
        id: 0,
        name: "Home",
        path: "/admin",
        icon: <LuHome />
    },
    {
        id: 1,
        name: "Ideias",
        path: "/admin/ideias",
        icon: <LuLightbulb />
    },
    {
        id: 2,
        name: "Melhorias",
        path: "/admin/melhorias",
        icon: <LuBookKey />
    },
    {
        id: 3,
        name: "Resumos",
        path: "/admin/resumos",
        icon: <LuAlbum />
    },
    {
        id: 4,
        name: "Pontuar",
        path: "/admin/pontuar",
        icon: <LuAward />
    },
    {
        id: 5,
        name: "Usuarios",
        path: "/admin/usuarios",
        icon: <LuUserCog />
    },
    /* 
     {
         id: 6,
         name: "Config",
         path: "/admin/config",
         icon: <LuBrainCog />
     }, */
]