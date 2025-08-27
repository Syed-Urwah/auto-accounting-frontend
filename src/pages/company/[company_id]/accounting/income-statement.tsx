
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

const IncomeStatementPage: NextPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Income Statement</CardTitle>
          <CardDescription>
            Your company's financial performance over a period of time.
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
                <TableCell className="font-medium">Revenue</TableCell>
                <TableCell>$100,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Expenses</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">Salaries</TableCell>
                <TableCell>$25,000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Net Income</TableCell>
                <TableCell>$75,000.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default IncomeStatementPage;
