import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
