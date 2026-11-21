# Revision Quiz

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
