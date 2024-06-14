import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";

function page() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Registro de paciente</CardTitle>
          <CardDescription>
            Fill out the form below to register a new patient.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input id="name" placeholder="Enter patient's name" required />
            </div>
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <Input id="dob" type="date" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Textarea
              id="address"
              placeholder="Enter patient's address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Medical History</Label>
            <Textarea
              id="medical-history"
              placeholder="Enter any relevant medical history or conditions"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Register Patient
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default page;
