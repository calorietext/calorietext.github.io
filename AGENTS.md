# Calorietext project context

- Canonical user repository: https://github.com/calorietext/calorietext.github.io.git
- Brand: Calorietext. This repository contains the standalone public marketing/demo website. The actual fitness application and backend will be separate.
- Public project demo: https://calorietext.github.io/. Publish via the GitHub Pages workflow after pushes to main.
- The current demo is illustrative. Do not claim live SMS, iMessage, calorie analysis, payments, or voice calls until implemented and tested.
- Do not invent customer counts, testimonials, pricing, or trial terms.
- Never commit provider credentials. Use server-side environment secrets for integrations.
- Planned direction: each trainer has an AI assistant for client texts/calls, food photos, equipment guidance, trainer-approved plans, and progress tracking. Voice likeness requires the trainer's authorization.
- Check TypeScript and `pnpm build:pages` after material changes. Preserve root-relative asset/link paths and static-compatible routes. Verify responsive layout and interactive behavior when browser QA is available.
