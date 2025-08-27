
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
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/main-layout";

const AccountsPayablePage: NextPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Accounts Payable</CardTitle>
          <CardDescription>
            Money your company owes to its suppliers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end mb-4">
            <Button>New Bill</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor</TableHead>
                <TableHead>Bill #</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Sample Row */}
              <TableRow>
                <TableCell>Stark Industries</TableCell>
                <TableCell>BILL-001</TableCell>
                <TableCell>2025-08-25</TableCell>
                <TableCell>$5,000.00</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default AccountsPayablePage;
