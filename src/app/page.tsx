"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";



export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F9FB] text-[#182337]">
      <Head>
        <title>VideoChat Meeting</title>
        <meta
          name="description"
          content="Знайомся обличчям до обличчя — VideoChat Meeting"
        />
      </Head>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Знайомся обличчям до обличчя</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Миттєві відеозустрічі з реальними людьми по всьому світу
        </p>
        <div className="flex gap-4">
          <Button className="bg-[#0057E7] text-white text-lg px-6 py-3 rounded-2xl shadow-md">
            Почати зараз
          </Button>
          <Button
            variant="outline"
            className="text-[#0057E7] text-lg px-6 py-3 rounded-2xl border-[#0057E7]"
          >
            Як це працює
          </Button>
        </div>
      </section>

      {/* Як це працює */}
      <section className="py-20 px-6 bg-[#E5ECF4] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">Як це працює</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "1. Створіть профіль",
              desc: "Зареєструйтесь або увійдіть за допомогою соцмереж."
            },
            {
              title: "2. Оберіть інтереси",
              desc: "Наш алгоритм допоможе знайти найближчих за духом людей."
            },
            {
              title: "3. Спілкуйтесь у відеочаті",
              desc: "Розпочніть відеозустріч за одне натискання."
            }
          ].map(({ title, desc }, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Готові зустріти когось особливого?
        </h2>
        <Button className="bg-[#0057E7] text-white text-lg px-8 py-4 rounded-2xl shadow-lg">
          Почати знайомства
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#182337] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">VideoChat Meeting</h3>
            <p className="text-gray-400">Онлайн знайомства нового покоління</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Посилання</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Про нас</a>
              </li>
              <li>
                <a href="#">Політика конфіденційності</a>
              </li>
              <li>
                <a href="#">Контакти</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Підписка</h4>
            <p className="text-gray-400 mb-2">Отримуйте новини першими</p>
            <input
              type="email"
              placeholder="Ваш Email"
              className="w-full p-2 rounded text-black mb-2"
            />
            <Button className="bg-[#0057E7] w-full">Підписатись</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}