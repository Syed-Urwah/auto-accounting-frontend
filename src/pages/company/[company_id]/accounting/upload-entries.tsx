import { NextPage } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Main } from "next/document";
import { MainLayout } from "@/components/layouts/main-layout";

const UploadEntriesPage: NextPage = () => {
  return (
    <MainLayout>
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Upload a picture of your entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Or enter manually</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account">Account</Label>
              <Input id="account" type="text" placeholder="e.g. Cash" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="debit">Debit</Label>
              <Input id="debit" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="credit">Credit</Label>
              <Input id="credit" type="number" placeholder="0.00" />
            </div>
            <Button type="submit">Add Entry</Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </MainLayout>
  );
};

export default UploadEntriesPage;