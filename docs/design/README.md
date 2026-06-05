# Stitch design assets

Fetched from **Ente Doctor Login UI** (`projects/15685051624025422900`) via Google Stitch MCP HTTP API.

| File | Source |
|------|--------|
| `DESIGN.md` | Project `designTheme.designMd` (Clinical Precision) |
| `design-context.json` | Colors, typography, spacing summary |
| `screens/Welcome-Email-Entry.html` | Reference HTML for Welcome & Email Entry |
| `list_projects.json` / `list_screens.json` | Raw MCP responses |

Implemented in app: `/auth/welcome` → `src/components/Auth/WelcomeEmailEntryScreen.tsx`

Re-fetch: `node scripts/stitch-mcp-call.mjs list_projects` then `node scripts/stitch-download-assets.mjs`
