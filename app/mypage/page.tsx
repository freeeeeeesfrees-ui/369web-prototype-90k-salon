import type { Metadata } from "next";
import { MyPageContent } from "@/components/mypage/MyPageContent";

export const metadata: Metadata = {
  title: "マイページ | Salon Lumière Kawagoe",
};

export default function MyPage() {
  return (
    <main className="py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <MyPageContent />
      </div>
    </main>
  );
}
