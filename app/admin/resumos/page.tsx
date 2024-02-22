import ResumosConcluidasTable from "@/components/List/ResumosConcluidos";

export default function Handler() {

    return (
        <div className="w-full h-full flex flex-col gap-5 p-5 items-center text-center justify-start">
            {/* Listagem de pendencias */}
            <ResumosConcluidasTable />
        </div>
    )
}