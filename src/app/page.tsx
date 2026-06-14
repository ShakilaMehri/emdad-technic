import Container from "@/components/ui/Container";
import ArticleCard from "@/components/cards/ArticleCard";

export default function Home() {
  return (
    <main className="section">
      <Container>
        <h2 className="mb-8 text-center">
          آخرین مقالات
        </h2>

        <div className="grid gap-6">
          <ArticleCard
            icon="🚗"
            title="اگر ماشین وسط جاده خاموش شد چه کار کنیم؟"
            readTime="۵ دقیقه مطالعه"
          />

          <ArticleCard
            icon="🔋"
            title="نشانه‌های خرابی باتری خودرو"
            readTime="۳ دقیقه مطالعه"
          />
        </div>
      </Container>
    </main>
  );
}