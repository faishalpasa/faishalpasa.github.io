# Commit Skill

Auto-invoked when the user asks to commit changes.

## Conventional Commit Format

```
<type>: <short description in lowercase>
```

### Types

| Type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | New section, feature, or significant addition           |
| `fix`      | Bug fix                                                 |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `style`    | Visual/styling changes (Tailwind classes, layout)       |
| `content`  | Copy, data, or asset updates (no code logic change)     |
| `chore`    | Build config, dependency updates, deploy setup          |

### Examples

```
feat: add experience section with framer motion animations
fix: resolve lottie animation not looping on safari
style: update hero section typography and spacing
content: add three new portfolio projects
chore: update gh-pages to v6
```

## Steps Before Committing

1. Run `git status` to review what's staged
2. Run `git diff --staged` to verify the changes are correct
3. Do NOT include unrelated files in the same commit

## Staging Files

Prefer staging specific files over `git add .`:

```bash
git add src/App.tsx src/experience-section.tsx
```

## Commit Command

```bash
git commit -m "$(cat <<'EOF'
type: short description

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

## Rules

- Message must be lowercase
- No period at the end
- Description should explain WHAT changed, not HOW
- One logical change per commit — do not bundle unrelated changes
- Always verify staged files before committing
