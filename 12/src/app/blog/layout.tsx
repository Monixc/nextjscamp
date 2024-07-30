export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div style={{ border: "5px solid red" }}>{children}</div>
    </>
  );
}
