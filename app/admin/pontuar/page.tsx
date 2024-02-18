import ListIdeiasPendentes from "@/components/Pendencias/ListIdeiasPendentes";

export default function Handler() {

    return (
        <div className="w-full h-full flex flex-col gap-5 p-5 items-center text-center justify-start">
            {/* Botões */}
            <div className="w-8/12 h-28 flex flex-row items-center justify-between text-center
            bg-white rounded-md">

            </div>




            {/* Listagem de pendencias */}
            <ListIdeiasPendentes />
        </div>
    )
}