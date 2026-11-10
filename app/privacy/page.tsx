import { sitePath } from "../../lib/site-path";

export default function Privacy() {
  return <main className="legal-page">
    <a href={sitePath("/")} className="legal-back">← Back to Calorietext</a>
    <h1>Privacy in the pilot</h1>
    <p>This website includes sample conversations and illustrative nutrition values. Live AI replies are available only to approved, verified pilot testers.</p>
    <h2>Using the website</h2>
    <p>The sample demo runs in your browser. Get Started opens your messaging app with the Calorietext number filled in. You choose whether to send a message or photo; clicking the link alone does not send one. The website has no account registration, payment collection, or photo upload form.</p>
    <h2>When you send a message</h2>
    <p>Sendblue delivers pilot messages and photo links to our backend on Supabase. OpenAI processes the message, selected recent conversation context, and any photo supplied for analysis to generate a response. We request that OpenAI response storage be disabled; provider processing policies also apply.</p>
    <p>The pilot stores contact details, conversation history, and estimated meals. Contact numbers and message bodies are encrypted in our database. Photos are accessed from the messaging provider during analysis. Text STOP to pause replies; this does not delete previous records.</p>
    <h2>Website hosting</h2>
    <p>The website is hosted on GitHub Pages. GitHub may process technical request information to serve and secure the website.</p>
  </main>;
}
