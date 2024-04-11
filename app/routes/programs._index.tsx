import { FunctionComponent, useState } from "react";

import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";
import { ja } from "date-fns/locale/ja";

import { ProgramRecord, fetchPrograms } from "~/repositories/program";

export const loader = async () => {
  const programs = await fetchPrograms();
  return json({ programs });
};

export default function Programs() {
  const { programs } = useLoaderData<typeof loader>();

  return <Table programs={programs} />;
}

type TableProps = {
  programs: ProgramRecord[];
};
const Table: FunctionComponent<TableProps> = ({ programs }) => {
  const [data] = useState<ProgramRecord[]>(programs);
  const columns: ColumnDef<ProgramRecord>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => {
        const orig = row.original;
        return <Link to={`/programs/${orig.id}`}>{orig.id}</Link>;
      },
    },
    {
      accessorKey: "name",
      header: "番組名",
    },
    {
      accessorKey: "startedAt",
      header: "開始日時",
      cell: ({ row }) => {
        const orig = row.original;
        return format(new Date(orig.createdAt), "yyyy/MM/dd HH:mm:ss", {
          locale: ja,
        });
      },
    },
    {
      accessorKey: "endedAt",
      header: "終了日時",
      cell: ({ row }) => {
        const orig = row.original;
        return format(new Date(orig.createdAt), "yyyy/MM/dd HH:mm:ss", {
          locale: ja,
        });
      },
    },
    {
      accessorKey: "createdAt",
      header: "登録日時",
      cell: ({ row }) => {
        const orig = row.original;
        return format(new Date(orig.createdAt), "yyyy/MM/dd HH:mm:ss", {
          locale: ja,
        });
      },
    },
    {
      accessorKey: "updatedAt",
      header: "更新日時",
      cell: ({ row }) => {
        const orig = row.original;
        return format(new Date(orig.createdAt), "yyyy/MM/dd HH:mm:ss", {
          locale: ja,
        });
      },
    },
  ];
  const table = useReactTable<ProgramRecord>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
