import { Table } from "./table";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";
import { TableCell } from "./table-cell";

export default {
  title: "COMPONENTS/Table/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Jean Dupont</TableCell>
          <TableCell>jean.dupont@example.com</TableCell>
          <TableCell>Engineering</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Marie Martin</TableCell>
          <TableCell>marie.martin@example.com</TableCell>
          <TableCell>Marketing</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Pierre Durand</TableCell>
          <TableCell>pierre.durand@example.com</TableCell>
          <TableCell>Sales</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithBorder = {
  render: () => (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Jean Dupont</TableCell>
            <TableCell>jean.dupont@example.com</TableCell>
            <TableCell>Engineering</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Marie Martin</TableCell>
            <TableCell>marie.martin@example.com</TableCell>
            <TableCell>Marketing</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};
