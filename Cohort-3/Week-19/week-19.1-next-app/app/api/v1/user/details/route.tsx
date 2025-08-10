

import { NextResponse } from "next/server";



export function GET() {
    return NextResponse.json({
        user: "1harkirat",
        email: "1harkirat@gmail.com"
    })
}


export function POST() {
    return NextResponse.json({
        user: "2harkirat",
        email: "2harkirat@gmail.com"
    })
}


export function PUT() {
    return NextResponse.json({
        user: "3harkirat",
        email: "3harkirat@gmail.com"
    })
}


export function DELETE() {
    return NextResponse.json({
        user: "3harkirat DELETE",
        email: "3harkirat@gmail.com"
    })
}