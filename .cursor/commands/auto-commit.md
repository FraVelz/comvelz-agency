# Autocommit — comvelz-agency

Use when the user asks to **commit**. **Do not** push unless they explicitly ask (GitHub/Vercel steps are an explicit ask).

## Forbidden

No `Co-authored-by: Cursor`, `Made-with: Cursor`, or other AI/IDE trailers.
Commit with `git commit -F`. Verify with `git log -1 --format=%B`.

## Message style

Conventional Commits in **English**. Types: `feat`, `fix`, `docs`, `refactor`, `style`, `chore`, `perf`, `ci`, `test`.

```text
feat(hero): add two-column landing hero
```

Do not restore deleted files. Do not commit `.env`, `.next/`, `node_modules/`.
