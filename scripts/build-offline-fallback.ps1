<#!
.SYNOPSIS
Builds quiz_data.js from the separately maintained quiz JSON files.

.DESCRIPTION
Run this after editing files in quizzes/ when you want index.html to work
directly from the file system (file://), where browsers block fetch requests.
#>

$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $projectRoot 'quiz-manifest.json'
$outputPath = Join-Path $projectRoot 'quiz_data.js'
$manifest = Get-Content -Raw -LiteralPath $manifestPath | ConvertFrom-Json

$sections = foreach ($entry in $manifest.sections) {
    if (-not $entry.file) {
        throw 'Each manifest section must define a file path.'
    }

    $sectionPath = Join-Path $projectRoot $entry.file
    Get-Content -Raw -LiteralPath $sectionPath | ConvertFrom-Json
}

$quiz = [ordered]@{
    quizId = $manifest.quizId
    title = $manifest.title
    course = $manifest.course
    description = $manifest.description
    sections = @($sections)
}

$json = $quiz | ConvertTo-Json -Depth 100
$content = @"
/**
 * Generated offline fallback. Do not edit directly.
 * Edit quiz-manifest.json and files in quizzes/, then run:
 * pwsh -File .\scripts\build-offline-fallback.ps1
 */
window.DEFAULT_QUIZ_DATA = $json;
"@

Set-Content -LiteralPath $outputPath -Value $content -Encoding utf8
Write-Host "Built $outputPath"
