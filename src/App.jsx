import AnniversarySection from "./components/AnniversarySection";
import AlbumSection from "./components/AlbumSection";
import CitiesSection from "./components/CitiesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import LetterSection from "./components/LetterSection";
import ScenesSection from "./components/ScenesSection";
import StorySection from "./components/StorySection";
import TimelineSection from "./components/TimelineSection";
import { siteContent } from "./data/siteContent";

function pluralizeYearMonth(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} 年 ${months} 个月`;
  }

  if (years > 0) {
    return `${years} 年`;
  }

  return `${months} 个月`;
}

function getAnniversaryMetrics(startDateString) {
  const startDate = new Date(startDateString);
  const now = new Date();

  const diffMs = now.getTime() - startDate.getTime();
  const dayCount = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  const days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = Math.max(0, years * 12 + months);

  return {
    anniversaryText: pluralizeYearMonth(totalMonths),
    dayCount,
    metrics: [
      { label: "相爱时长", value: pluralizeYearMonth(totalMonths) },
      { label: "一起走过", value: `${dayCount} 天` },
      { label: "共同城市", value: "4 座" },
      { label: "仍在继续", value: "现在进行时" },
    ],
  };
}

export default function App() {
  const { couple, anniversary, timeline, cities, album } = siteContent;
  const { anniversaryText, dayCount, metrics } = getAnniversaryMetrics(
    anniversary.startDate
  );

  return (
    <div className="page-shell">
      <HeroSection
        content={couple}
        anniversaryText={anniversaryText}
        dayCount={dayCount}
      />
      <main>
        <StorySection story={couple.story} />
        <ScenesSection items={couple.scenes} />
        <AnniversarySection
          label={anniversary.label}
          note={anniversary.note}
          metrics={metrics}
        />
        <TimelineSection items={timeline} />
        <CitiesSection cities={cities} />
        <AlbumSection items={album} />
        <LetterSection letter={couple.letter} closing={couple.letterClosing} />
      </main>
      <FooterSection text={couple.footerText} />
    </div>
  );
}
