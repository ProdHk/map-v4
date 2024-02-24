"use client"

import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Input } from "../../ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import Link from "next/link"


export function DataTable({ columns, data, usuarios }) {

    const [sorting, setSorting] = React.useState([])
    const [columnFilters, setColumnFilters] = React.useState(
        []
    )

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <div className="rounded-md border">
            <div className="flex items-center p-3   text-center justify-center">
                <Input
                    placeholder="Digite uma palavra chave"
                    value={(table.getColumn("titulo")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("titulo")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}
                            className=" flex flex-row justify-between px-5 h-10"
                        >
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}
                                        className="w-4/12 text-center"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {

                            console.log(row.original)

                            return <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}


                            >

                                <Link href={`/admin/usuarios/${row.original._id}`}
                                    className=" flex flex-row w-full h-16 text-center items-center justify-between p-4">
                                    <p className="w-4/12 text-center ">{row?.original?.nome}</p>
                                    <p className="w-4/12 text-center">{row?.original?.team}</p>
                                    {/*   <p className="w-4/12 text-center">{row?.original?.empresa}</p>
                                    <p className="w-4/12 text-center">{row?.original?.dataAdmissao}</p> */}
                                </Link>
                            </TableRow>


                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Não encontrado
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
