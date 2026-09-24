import "./styles/index.css";
import articleCardHtml from "./components/article-card/article-card.html?raw";
import articleContentHtml from "./components/article-content/article-content.html?raw";
import bannerHtml from "./components/banner/banner.html?raw";
import buttonHtml from "./components/button/button.html?raw";
import cardHtml from "./components/card/card.html?raw";
import civicTechBannerHtml from "./components/civic-tech-banner/civic-tech-banner.html?raw";
import inputHtml from "./components/input/input.html?raw";
import labelHtml from "./components/label/label.html?raw";
import listHtml from "./components/list/list.html?raw";
import officialBiographyHtml from "./components/official-biography/official-biography.html?raw";
import stripBannerHtml from "./components/strip-banner/strip-banner.html?raw";
import tableHtml from "./components/table/table.html?raw";

interface GallerySection {
  title: string;
  description: string;
  html: string;
}

const sections: GallerySection[] = [
  { title: "Button", description: "Variants, sizes and states", html: buttonHtml },
  { title: "Card", description: "Container with header, content and footer", html: cardHtml },
  { title: "Banner", description: "Contextual notification tones", html: bannerHtml },
  { title: "Input", description: "Form text controls", html: inputHtml },
  { title: "Label", description: "Form labels and helpers", html: labelHtml },
  { title: "List", description: "Categorized items with action links", html: listHtml },
  { title: "Table", description: "Tabular data with status badges", html: tableHtml },
  { title: "ArticleCard", description: "News and article cards", html: articleCardHtml },
  { title: "ArticleContent", description: "Structured article body", html: articleContentHtml },
  { title: "OfficialBiography", description: "Official profile page", html: officialBiographyHtml },
  { title: "StripBanner", description: "Compact notification strip", html: stripBannerHtml },
  { title: "CivicTechBanner", description: "Large campaign banner", html: civicTechBannerHtml },
];

function isDark() {
  return document.documentElement.classList.contains("dark");
}

function renderThemeButton(): void {
  const button = document.querySelector<HTMLButtonElement>("#theme-toggle");

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("kapwa-theme", isDark() ? "dark" : "light");
    button.textContent = isDark() ? "Light" : "Dark";
  });
}

function renderGallery(): void {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) {
    return;
  }

  app.innerHTML = `
    <header class="sticky top-0 z-10 border-b border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface)]/90 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" class="kapwa-heading-sm text-[var(--color-kapwa-text-strong)]">kapwa-cn</a>
        <div class="flex items-center gap-2">
          <a
            href="https://github.com/gglennd/kapwa-cn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View kapwa-cn on GitHub"
            class="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-kapwa-text-support)] transition-colors hover:bg-[var(--color-kapwa-bg-gray-default)] hover:text-[var(--color-kapwa-text-strong)]"
          >
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.504-.337 9.59 9.59 0 0 1 2.504.337c1.91-1.296 2.75-1.026 2.75-1.026.544 1.378.201 2.397.098 2.65.64.7 1.029 1.595 1.029 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
              />
            </svg>
          </a>
          <button
            id="theme-toggle"
          type="button"
          class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 bg-[var(--color-kapwa-bg-gray-default)] text-[var(--color-kapwa-text-strong)] hover:bg-[var(--color-kapwa-bg-gray-hover)] active:bg-[var(--color-kapwa-bg-gray-active)] focus-visible:ring-[var(--color-kapwa-border-focus)] text-sm px-3 py-1.5 h-8"
        >${isDark() ? "Light" : "Dark"}</button>
      </div>
    </header>
    <main id="top" class="mx-auto max-w-5xl px-6 py-12">
      <section class="mb-14">
        <h1 class="kapwa-heading-xl text-[var(--color-kapwa-text-strong)]">Kapwa component gallery</h1>
        <p class="kapwa-body-lg-default mt-2 text-[var(--color-kapwa-text-support)]">
          Every component below is plain HTML + Tailwind. Open the docs site for
          copyable snippets and framework usage.
        </p>
      </section>
      ${sections
        .map(
          section => `
            <section class="mb-16">
              <h2 class="kapwa-heading-lg text-[var(--color-kapwa-text-strong)]">${section.title}</h2>
              <p class="kapwa-body-sm-default mb-4 text-[var(--color-kapwa-text-support)]">${section.description}</p>
              <div class="rounded-lg border border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface-raised)] p-4 md:p-6">
                ${section.html}
              </div>
            </section>
          `,
        )
        .join("")}
    </main>
    <footer class="border-t border-[var(--color-kapwa-border-weak)]">
      <div class="mx-auto max-w-5xl px-6 py-6 text-sm text-[var(--color-kapwa-text-support)]">
        kapwa-cn — a port of the <a class="underline hover:text-[var(--color-kapwa-text-strong)]" href="https://github.com/bettergovph/kapwa" target="_blank" rel="noopener noreferrer">Kapwa design system</a> (BetterGov Philippines). CC0-1.0.
      </div>
    </footer>
  `;

  renderThemeButton();
}

const savedTheme = localStorage.getItem("kapwa-theme");

if (savedTheme) {
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
}

renderGallery();
