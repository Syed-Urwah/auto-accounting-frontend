
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

const CashFlowStatementPage: NextPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Cash Flow Statement</CardTitle>
          <CardDescription>
            How cash moves in and out of your company.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Sample Rows */}
              <TableRow>
                <TableCell className="font-medium">Operating Activities</TableCell>
                <TableCell>$80,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Investing Activities</TableCell>
                <TableCell>($10,000.00)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Financing Activities</TableCell>
                <TableCell>($5,000.00)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Net Cash Flow</TableCell>
                <TableCell>$65,000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default CashFlowStatementPage;
