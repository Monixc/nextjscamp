import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/login">로그인</Link>
            </li>
            <li>
              <Link href="/register">회원가입</Link>
            </li>
            <li>
              <Link href="/blog">블로그</Link>
              <ul>
                <li>
                  <Link href="/blog/2/recent ">최신글</Link>
                </li>
                <li>
                  <Link href="/blog/2/review/2?lang=ko&order=desc">후기</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
