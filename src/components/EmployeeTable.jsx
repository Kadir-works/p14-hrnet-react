import { useState } from "react"

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table"

function EmployeeTable({ data }) {

    const [sorting, setSorting] = useState([])
    const [globalFilter, setGlobalFilter] = useState("")
    const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: 10
})
  const columns = [
    {
      header: "First Name",
      accessorKey: "firstName"
    },
    {
      header: "Last Name",
      accessorKey: "lastName"
    },
    {
      header: "Start Date",
      accessorKey: "startDate"
    },
    {
      header: "Department",
      accessorKey: "department"
    },
    {
      header: "Date of Birth",
      accessorKey: "dateOfBirth"
    },
    {
      header: "Street",
      accessorKey: "street"
    },
    {
      header: "City",
      accessorKey: "city"
    },
    {
      header: "State",
      accessorKey: "state"
    },
    {
      header: "Zip Code",
      accessorKey: "zipCode"
    }
  ]

const table = useReactTable({
  data,
  columns,
  state: {
    sorting,
    globalFilter,
    pagination
  },
  onSortingChange: setSorting,
  onGlobalFilterChange: setGlobalFilter,
  onPaginationChange: setPagination,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel()
})

return (
  <div className="table-container">

    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Rechercher..."
        value={globalFilter ?? ""}
        onChange={e => setGlobalFilter(e.target.value)}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>

    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                style={{ cursor: "pointer" }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}

                {{
                  asc: " 🔼",
                  desc: " 🔽"
                }[header.column.getIsSorted()] ?? null}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell ?? cell.column.columnDef.accessorKey,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>

  <div>
    Show{" "}
    <select
      value={pagination.pageSize}
      onChange={e =>
        setPagination(prev => ({
          ...prev,
          pageSize: Number(e.target.value)
        }))
      }
    >
      {[10, 25, 50, 100].map(size => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>{" "}
    entries
  </div>

  <div>
    <button
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      Previous
    </button>

    <span style={{ margin: "0 10px" }}>
      Page {pagination.pageIndex + 1} of {table.getPageCount()}
    </span>

    <button
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Next
    </button>
  </div>

</div>

  </div>
)
}

export default EmployeeTable