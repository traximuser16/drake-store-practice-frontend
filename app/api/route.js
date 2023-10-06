import { NextResponse } from "next/server";

export function GET(req, res) {
    console.log(req)
    return NextResponse("<h1>agaga</h1>")
}