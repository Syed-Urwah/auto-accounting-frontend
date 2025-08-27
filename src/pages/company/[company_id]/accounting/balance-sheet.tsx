
import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MainLayout } from "@/components/layouts/main-layout";

const BalanceSheetPage: NextPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Balance Sheet</CardTitle>
          <CardDescription>
            A snapshot of your company's financial health.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Sample Rows */}
              <TableRow>
                <TableCell className="font-medium">Assets</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">Cash</TableCell>
                <TableCell>$50,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Liabilities</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">Accounts Payable</TableCell>
                <TableCell>$5,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Equity</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">Retained Earnings</TableCell>
                <TableCell>$45,000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default BalanceSheetPage;
