type MessagingConfig = {
  enabled: boolean;
  phoneNumber: string;
};

/** Open a conversation only with the configured Calorietext business line. */
export function getMessagingHref(config: MessagingConfig): string | null {
  if (!config.enabled) return null;

  const number = config.phoneNumber.trim();
  if (!/^\+[1-9]\d{7,14}$/.test(number)) {
    throw new Error("Messaging needs an international business number, such as +12025550123.");
  }

  // A plain recipient-only link works without guessing the visitor's device.
  // Opening the composer does not send a message; the visitor chooses to send.
  return `sms:${number}`;
}
