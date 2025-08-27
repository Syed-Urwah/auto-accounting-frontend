
import { NextPage } from "next";
import { useState } from "react";
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
  const [extractedText, setExtractedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';


  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${API_URL}/ocr/image`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Extracted text:", data);
        setExtractedText(data.data.text);
      } else {
        console.error("Error uploading image");
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
    setIsLoading(false);
  };

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
                <Textarea placeholder="e.g., Paid $500 for office rent" value={extractedText} onChange={(e) => setExtractedText(e.target.value)} />
                <Button>Generate Entries</Button>
              </div>
            </TabsContent>
            <TabsContent value="image">
              <div className="grid w-full gap-4 pt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" onChange={handleImageUpload} />
                </div>
                {isLoading && <p>Extracting text...</p>}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default UploadEntriesPage;
