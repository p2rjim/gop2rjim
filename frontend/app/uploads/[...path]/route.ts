import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { getBundledUploadsDirectory, getUploadsDirectory } from '@/lib/storage'

export const runtime = 'nodejs'

function getContentType(fileName: string) {
  const extension = path.extname(fileName).toLowerCase()

  switch (extension) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.png':
      return 'image/png'
    case '.gif':
      return 'image/gif'
    case '.webp':
      return 'image/webp'
    case '.svg':
      return 'image/svg+xml'
    default:
      return 'application/octet-stream'
  }
}

export async function GET(_request: Request, { params }: any) {
  const fileName = Array.isArray(params?.path) ? params.path[params.path.length - 1] : params?.path

  if (!fileName) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  try {
    const runtimeFilePath = path.join(getUploadsDirectory(), fileName)
    const bundledFilePath = path.join(getBundledUploadsDirectory(), fileName)

    let fileBuffer: Buffer
    try {
      fileBuffer = await fs.readFile(runtimeFilePath)
    } catch {
      fileBuffer = await fs.readFile(bundledFilePath)
    }

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': getContentType(fileName),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}