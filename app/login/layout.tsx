import { SessionProvider } from "@/components/providers/session-provider";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
