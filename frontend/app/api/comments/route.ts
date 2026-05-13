import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const workId = searchParams.get("work_id")
    const illustrationId = searchParams.get("illustration_id")
    const activityId = searchParams.get("activity_id")

    const supabase = await createClient()

    let query = supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false })

    if (workId) {
      query = query.eq("work_id", workId)
    } else if (illustrationId) {
      query = query.eq("illustration_id", illustrationId)
    } else if (activityId) {
      query = query.eq("activity_id", activityId)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nickname, content, password, work_id, illustration_id, activity_id } = body

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
        work_id: work_id || null,
        illustration_id: illustration_id || null,
        activity_id: activity_id || null,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const password = searchParams.get("password")

    if (!id || !password) {
      return NextResponse.json(
        { error: "ID and password are required" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // First check if password matches
    const { data: comment, error: fetchError } = await supabase
      .from("comments")
      .select("password")
      .eq("id", id)
      .single()

    if (fetchError || !comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 })
    }

    if (comment.password !== password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 403 })
    }

    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting comment:", error)
    return NextResponse.json(
      { error: "Failed to delete comment" },
      { status: 500 }
    )
  }
}
