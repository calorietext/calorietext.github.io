import { sitePath } from "../../lib/site-path";

export default function Terms() {
  return <main className="legal-page">
    <a href={sitePath("/")} className="legal-back">← Back to Calorietext</a>
    <h1>About the private pilot</h1>
    <p>Calorietext is under development. Live AI texting is available to approved, verified testers. The website’s animated conversations remain illustrative; some demonstrated features are still planned.</p>
    <h2>Opening Messages</h2>
    <p>Get Started opens a conversation addressed to Calorietext in your messaging app. You must choose to send a message. Clicking the button does not create an account, start a paid plan, or send a text automatically. Messaging availability depends on your device, provider, and pilot access. Your mobile plan’s messaging and data charges may apply.</p>
    <h2>Using the pilot</h2>
    <p>Send hello to begin, HELP for instructions, TODAY for your logged daily total in UTC, or STOP to pause replies. Public availability, pricing, and trial terms have not been finalized.</p>
    <h2>Nutrition estimates</h2>
    <p>Calorie and macro estimates can vary with ingredients and portions and may be inaccurate. Sample values on this website are not personalized nutrition advice.</p>
    <h2>Independent project</h2>
    <p>Calorietext is an independent project. iMessage is an Apple service, and Android is a Google platform. This website does not imply an affiliation with either company.</p>
  </main>;
}
