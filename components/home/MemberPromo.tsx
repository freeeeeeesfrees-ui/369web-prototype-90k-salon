import { Button } from "@/components/ui/Button";

export function MemberPromo() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          会員登録で、さらにお得に。
        </h2>
        <p className="text-white/80 mb-8">
          次回予約のスマート化、ポイント還元、誕生日特典など。
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Button variant="accent" href="/signup">新規会員登録</Button>
          <Button variant="outline" href="/login" className="text-white border-white hover:bg-white hover:text-brand-primary">
            ログイン
          </Button>
        </div>
      </div>
    </section>
  );
}
