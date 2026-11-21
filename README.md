# Revision Quiz

## Quiz structure

Each topic is now maintained as its own source file in [quizzes](quizzes/):

- `01-relational-model.json`
- `02-er-modelling-and-keys.json`
- `03-tables-and-normalization.json`
- `04-oracle-sql.json`
- `05-mini-library-erd.json`

[quiz-manifest.json](quiz-manifest.json) controls the quiz metadata and the order in which those topics appear in the selector. Edit the relevant topic JSON file to add or revise its questions.

When hosted (for example, on GitHub Pages), the app loads these individual JSON files. The existing `quiz_data.js` is retained only as an offline fallback for opening `index.html` directly from the file system.

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
