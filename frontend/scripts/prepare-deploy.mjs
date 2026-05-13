import { cp, mkdir, readdir, rm } from 'fs/promises'
import path from 'path'

const frontendRoot = process.cwd()
const buildRoot = path.join(frontendRoot, 'dist')
const standaloneRoot = path.join(buildRoot, 'standalone')
const publicRoot = path.join(frontendRoot, 'public')
const backendFrontendRoot = path.join(frontendRoot, '..', 'backend', 'dist', 'frontend')

async function copyContents(sourceDir, targetDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true })

  await mkdir(targetDir, { recursive: true })

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name)
    const targetPath = path.join(targetDir, entry.name)
    await cp(sourcePath, targetPath, { recursive: true, force: true })
  }
}

async function main() {
  await rm(backendFrontendRoot, { recursive: true, force: true })
  await mkdir(backendFrontendRoot, { recursive: true })

  await copyContents(standaloneRoot, backendFrontendRoot)
  await copyContents(publicRoot, path.join(backendFrontendRoot, 'public'))
}

main().catch((error) => {
  console.error('Failed to prepare deploy bundle:', error)
  process.exit(1)
})