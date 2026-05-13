import { NextRequest, NextResponse } from "next/server"
import { mkdir, writeFile } from "fs/promises"
import { join } from "path"
import { getUploadsDirectory } from "@/lib/storage"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const maxUploadSize = 10 * 1024 * 1024
    if (file.size > maxUploadSize) {
      return NextResponse.json({ error: "File is too large" }, { status: 413 })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 8)
    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg"
    const filename = `${timestamp}-${randomString}.${extension}`

    // Convert to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadsDirectory = getUploadsDirectory()
    await mkdir(uploadsDirectory, { recursive: true })
    const publicPath = join(uploadsDirectory, filename)
    await writeFile(publicPath, buffer)

    return NextResponse.json({
      url: `/uploads/${filename}`,
      path: `uploads/${filename}`,
    })
  } catch (error: any) {
    console.error("Upload exception:", error)
    return NextResponse.json(
      { error: error.message || "Failed to upload file" },
      { status: 500 }
    )
  }
}
