# Calorietext website

The standalone Calorietext marketing website and interactive product demo.

**Public demo:** https://calorietext.github.io/

The actual fitness application and its backend will be built separately. This repository does not run live AI, SMS, iMessage, phone calls, accounts, or payments.

## Website features

Responsive landing page, scroll-driven iPhone demo, three interactive feature tabs, optional sound, accessible FAQ accordion, sample messaging modal, QR navigation, and preview-specific privacy and terms pages. English landing routes: `/` and `/en`.

Sample conversations and nutrition values are illustrative. Get Started opens the demo; it does not contact a phone number or start a subscription.

## Development

Requires Node.js 22.13+ and pnpm. The pnpm version is pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm exec tsc --noEmit
```

## GitHub Pages

### Connect the Get Started buttons to Messages

The navigation, hero, and bottom Get Started buttons share one configuration in
`config/messaging.json`. Leave `enabled` as `false` until the dedicated backend
and your Sendblue business number have passed a private phone test. The current
buttons continue to open the demo while setup is incomplete.

When ready, enter the assigned business number in international format (a `+`
followed by country code and number), set `enabled` to `true`, and publish. Every
Get Started button becomes an `sms:` link that opens a conversation addressed to
that number. The visitor must still send their message. The phone and provider
determine whether delivery uses iMessage or SMS; the link does not force iMessage.
An invalid enabled number fails the build rather than opening the wrong link.

The QR image opens this website so phone visitors can use Get Started. Computers
need a configured messaging application to handle the link; phone testing is
required before opening the pilot publicly.

Only the public business number belongs in this repository. OpenAI, Sendblue,
database, encryption, and webhook secrets belong in the separate backend host's
environment settings, never in browser code or GitHub Pages.

The reference project is `https://github.com/pontusab/caltext`. Its current public
tree has no license file or license declaration in its README. Confirm reuse
permission before copying its implementation. This website's messaging-link
implementation is independently written.

### Build and deploy

```sh
pnpm build:pages
```

This builds a static Next.js export into `out/`. The default base path is empty, with trailing-slash routes so direct links to `/privacy/` and `/terms/` work on the organization’s GitHub Pages website. Fonts, images, scripts, navigation, and the QR code support the project URL. The output includes `.nojekyll`.

`.github/workflows/pages.yml` builds and publishes every push to `main`. The workflow can also be run manually from GitHub Actions. Repository **Settings → Pages → Source** is set to **GitHub Actions**. No custom domain or payment is required for the current public project demo.

For a future custom domain, keep the base path empty and regenerate `public/qr.svg` for the new address. Custom domain registration and DNS setup are separate steps.

## Assets and design

- User-supplied visual reference: https://caltext-frkp1pbad-midday.vercel.app/en
- The interface and phone frame are newly implemented here. No Caltext repository source is included.
- Inter and Plus Jakarta Sans: bundled SIL Open Font Licenses in `public/fonts/`.
- Salad photograph: https://images.unsplash.com/photo-1512621776951-a57141f2eefd (Unsplash).
- QR code opens the public GitHub Pages demo.

The reference's customer count, testimonials, trial claims, social profiles, and placeholder phone number are not reused.
