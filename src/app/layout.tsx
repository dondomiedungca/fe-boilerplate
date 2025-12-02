import Header from "@/components/Header";
import StoreProvider from "@/store/StoreProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Boilerplate",
  description: "Frontend boilerplate for large and enterprise applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
