import ListIdeiasPendentes from "@/components/Pendencias/ListIdeiasPendentes";
import ListMelhoriasPendentes from "@/components/Pendencias/ListMelhoriasPendentes";
import ListResumosPendentes from "@/components/Pendencias/ListResumosPendentes";

export default function Handler() {

    return (
        <div className="w-full h-full flex flex-col gap-5 p-5 items-center text-center justify-start">

            {/* Listagem de pendencias */}
            <ListIdeiasPendentes />
            <ListMelhoriasPendentes />
            < ListResumosPendentes />
        </div>
    )
}