# Revision Quiz

## Quiz structure

Each topic is now maintained as its own source file in [quizzes](quizzes/):

- `01-relational-model.json`
- `02-er-modelling-and-keys.json`
- `03-tables-and-normalization.json`
- `04-oracle-sql.json`
- `05-mini-library-erd.json`

[quiz-manifest.json](quiz-manifest.json) controls the quiz metadata and the order in which those topics appear in the selector. Edit the relevant topic JSON file to add or revise its questions.

Question numbers are generated from the question order across the topic files. Do not add a `num` field: insert a question wherever it belongs and the displayed serial numbers update automatically.

Use an optional `context` block when a question needs its own table or supporting text. This keeps the material attached to the exact question rather than adding a separate HTML scenario:

```json
"context": {
  "type": "table",
  "title": "Reference table for NULL values",
  "columns": ["Name", "Place", "Phone No."],
  "rows": [
    ["Tom", "USA", "20394568"],
    ["John", "UAE", "NULL"]
  ]
}
```

When hosted (for example, on GitHub Pages), the app loads these individual JSON files. The existing `quiz_data.js` is retained only as an offline fallback for opening `index.html` directly from the file system.

Each topic and question can also include optional PDF or source-code links using `references`:

```json
"references": [
  {
    "label": "Week 2 related reading, p. 27",
    "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
    "page": 27
  }
]
```

`page` is optional. The app appends it as a PDF page anchor when present.

After changing a topic file, rebuild that offline fallback only if you plan to open `index.html` directly:

```powershell
pwsh -File .\scripts\build-offline-fallback.ps1
```

## Optional explanation images

Add an image to a question by setting `explanationImage`. It appears beneath the explanation only after the learner answers that question.

```json
{
  "explanation": "A compiler translates source code before execution.",
  "explanationImage": "img/compiler-flow.png",
  "explanationImageAlt": "Diagram showing source code being compiled into machine code"
}
```

- Put local images in the `img` folder and reference them with a relative path such as `img/compiler-flow.png`.
- You can also use a full `https://` image URL.
- `explanationImageAlt` is optional but recommended for accessibility.
- If an image URL is invalid or an image cannot be loaded, the image area is hidden and the explanation remains visible.
