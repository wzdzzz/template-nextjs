import PageNavbar from "@/src/components/page-navbar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PageNavbar />
      {children}
    </div>
  );
}
