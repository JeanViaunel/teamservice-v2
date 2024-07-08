"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const newTransaction = useMutation(api.transactions.createNewTransaction);
  const transactions = useQuery(api.transactions.getTransactions);

  console.log(transactions);

  return (
    <main className="text-foreground bg-background flex  flex-col items-center justify-between">
      <SignedIn>
        <div className="grid gap-4">
          {transactions?.map((item) => (
            <Card key={item._id}>
              {/* <CardHeader>
              <CardTitle>Transaction Details</CardTitle>
            </CardHeader> */}
              <CardContent>
                <p>
                  <strong>Sender:</strong> {item.sender}
                </p>
                <p>
                  <strong>Receiver:</strong> {item.receiver}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SignedIn>
      <Button
        onClick={() => newTransaction({ sender: "Victor", receiver: "Shelly" })}
      >
        Add
      </Button>
    </main>
  );
}
