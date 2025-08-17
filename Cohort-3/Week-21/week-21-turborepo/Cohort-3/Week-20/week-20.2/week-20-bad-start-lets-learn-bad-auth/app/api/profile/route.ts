

import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";
 


export function GET(req: NextRequest) {

    return NextResponse.json({
        avatarUrl: "http://images.google.com/cat.png"
    })
}

