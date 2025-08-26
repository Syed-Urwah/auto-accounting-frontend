import { NextPage } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { MainLayout } from "@/components/layouts/main-layout";

const journalEntries = [
  {
    date: "2024-01-01",
    account: "Cash",
    debit: 1000,
    credit: 0,
  },
  {
    date: "2024-01-01",
    account: "Owner's Equity",
    debit: 0,
    credit: 1000,
  },
  {
    date: "2024-01-02",
    account: "Rent Expense",
    debit: 200,
    credit: 0,
  },
  {
    date: "2024-01-02",
    account: "Cash",
    debit: 0,
    credit: 200,
  },
];

const GeneralJournalPage: NextPage = () => {
  return (
    <MainLayout>
    <Card>
      <CardHeader>
        <CardTitle>General Journal</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Debit</TableHead>
              <TableHead className="text-right">Credit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {journalEntries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.account}</TableCell>
                <TableCell className="text-right">{entry.debit}</TableCell>
                <TableCell className="text-right">{entry.credit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    </MainLayout>
  );
};

export default GeneralJournalPage;