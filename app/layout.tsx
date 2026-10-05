import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ORBIT — Explore the universe", description: "An interactive learning journey through Earth, the Moon, the Sun and our Solar System." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
