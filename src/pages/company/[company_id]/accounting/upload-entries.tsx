import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layouts/main-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UploadEntriesPage: NextPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Upload Entries</CardTitle>
          <CardDescription>
            Describe your transaction in plain English or upload an image of your entries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="text">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="text">Plain Text</TabsTrigger>
              <TabsTrigger value="image">Upload Image</TabsTrigger>
            </TabsList>
            <TabsContent value="text">
              <div className="grid w-full gap-4 pt-4">
                <Textarea placeholder="e.g., Paid $500 for office rent" />
                <div className="w-fit py-1">
                  <Button>Generate Entries</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="image">
              <div className="grid w-full gap-4 pt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" />
                </div>
                <div className="w-fit py-1">
                  <Button>Extract Text</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default UploadEntriesPage;