import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .is("work_id", null)
      .is("illustration_id", null)
      .is("activity_id", null)
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching guestbook:", error)
    return NextResponse.json(
      { error: "Failed to fetch guestbook" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nickname, content, password } = body

    if (!nickname || !content || !password) {
      return NextResponse.json(
        { error: "Nickname, content, and password are required" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("comments")
      .insert({
        nickname,
        content,
        password,
        work_id: null,
        illustration_id: null,
        activity_id: null,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error creating guestbook entry:", error)
    return NextResponse.json(
      { error: "Failed to create guestbook entry" },
      { status: 500 }
    )
  }
}
