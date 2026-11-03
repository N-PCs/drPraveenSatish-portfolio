export type LegalTab = "disclaimer" | "consent" | "privacy" | "terms";

export function openLegalModal(tab: LegalTab = "disclaimer") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-legal-modal", { detail: { tab } }));
  }
}
