import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChaptOS — Run your org. Not spreadsheets.",
  description:
    "The all-in-one operations platform for Greek and student organizations. Manage members, attendance, dues, treasury, events, and more in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
