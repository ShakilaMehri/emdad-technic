import type { Metadata } from "next";
import ArticleCard from "@/components/cards/ArticleCard";
import { articles } from "@/data/articleData";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "مقالات | امداد خودرو تکنیک",
  description:
    "راهنماها و مقالات کاربردی درباره نگهداری خودرو، امداد جاده‌ای و تعمیرات خودرو در بندرعباس",
};

export default function ArticlesPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-3">
            مقالات
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            راهنماهای کاربردی برای نگهداری بهتر از خودروی شما
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              icon={article.icon}
              title={article.title}
              readTime={article.readTime}
              slug={article.slug}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
