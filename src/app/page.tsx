import HomePageContent from "@/components/pages/HomePageContent";
import { tr } from "@/data/locales/tr";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata(
  "tr",
  "home",
  tr.ui.pages.home.title,
  tr.ui.pages.home.description,
);

export default function HomePage() {
  return <HomePageContent data={tr} locale="tr" />;
}
