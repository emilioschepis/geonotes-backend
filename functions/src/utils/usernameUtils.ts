import { sdk } from "../graphql/client";

/**
 * Generates a unique username for a user from their email address.
 *
 * @param email - The email of the user.
 */
export async function generateUniqueUsername(email: string): Promise<string> {
  function generateRandomFourDigits(): string {
    return Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
  }

  const base = email.split("@")[0].toLowerCase();
  const sanitized = base.replace(/[^a-z0-9_]/, "");

  const usernames = (await sdk.Usernames({ like: `${sanitized}%` })).users.map((user) => user.username);

  let uniqueUsername = sanitized + generateRandomFourDigits();

  while (usernames.includes(uniqueUsername)) {
    uniqueUsername = sanitized + generateRandomFourDigits();
  }

  return uniqueUsername;
}
