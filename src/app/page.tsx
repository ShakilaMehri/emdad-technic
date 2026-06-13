import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="container section">
      <h1>امداد خودرو تکنیک بندرعباس</h1>

      <div className="flex gap-4 mt-6">
        <Button>
          تماس فوری
        </Button>

        <Button variant="secondary">
          مشاهده خدمات
        </Button>

        <Button variant="ghost">
          واتساپ
        </Button>
      </div>
    </main>
  );
}