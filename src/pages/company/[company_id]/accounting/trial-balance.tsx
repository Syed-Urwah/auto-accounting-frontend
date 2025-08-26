import { NextPage } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { Main } from "next/document";
import { MainLayout } from "@/components/layouts/main-layout";

const trialBalance = [
  {
    account: "Cash",
    debit: 800,
    credit: 0,
  },
  {
    account: "Owner's Equity",
    debit: 0,
    credit: 1000,
  },
  {
    account: "Rent Expense",
    debit: 200,
    credit: 0,
  },
];

const TrialBalancePage: NextPage = () => {
  const totalDebit = trialBalance.reduce((acc, entry) => acc + entry.debit, 0);
  const totalCredit = trialBalance.reduce((acc, entry) => acc + entry.credit, 0);

  return (
    <MainLayout>
    <Card>
      <CardHeader>
        <CardTitle>Trial Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Debit</TableHead>
              <TableHead className="text-right">Credit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trialBalance.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.account}</TableCell>
                <TableCell className="text-right">{entry.debit}</TableCell>
                <TableCell className="text-right">{entry.credit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell className="text-right">{totalDebit}</TableCell>
              <TableCell className="text-right">{totalCredit}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
    </MainLayout>
  );
};

export default TrialBalancePage;