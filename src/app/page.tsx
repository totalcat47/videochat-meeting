"use client";

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Що таке Videochat Meeting?",
      answer:
        "Це сучасний відеочат для знайомств та спілкування з реальними людьми.",
    },
    {
      question: "Чи безкоштовний сервіс?",
      answer:
        "Так, базовий функціонал безкоштовний. Є додаткові преміум-можливості.",
    },
    {
      question: "Чи потрібна реєстрація?",
      answer:
        "Можна спробувати без реєстрації, але для повного доступу потрібен акаунт.",
    },
    {
      question: "Чи безпечно користуватися?",
      answer:
        "Ми шифруємо трафік та захищаємо ваші дані від сторонніх осіб.",
    },
    {
      question: "На яких пристроях працює?",
      answer:
        "Сервіс працює на ПК, планшетах та смартфонах без встановлення додатків.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F7F9FB] text-[#182337]">
      <Head>
        <title>VideoChat Meeting</title>
        <meta
          name="description"
          content="Знайомся обличчям до обличчя — VideoChat Meeting"
        />
      </Head>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Ліва частина – зображення */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl shadow-xl overflow-hidden">

      <Image
      src="/images/hero-section.png"
      alt="Спілкування у відеочаті"
      className="object-cover"
      width={1200}      // вкажи реальну ширину зображення
      height={800}      // вкажи реальну висоту зображення
      layout="responsive" // щоб адаптувати під ширину контейнера
    />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-100 blur-2xl opacity-50"></div>
            </div>
          </div>

          {/* Права частина – текст */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Головна назва продукту */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 leading-tight mb-4">
              Videochat <br /> Meeting
            </h1>

            {/* Підзаголовок */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Знайомся обличчям до обличчя
            </h2>

            {/* Опис */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Сучасний відеочат-застосунок, що працює за принципом чат-рулетки та
              дозволяє спілкуватися з цікавими людьми у будь-який час.
            </p>
          </div>
        </div>
      </section>

      {/* Як це працює */}
      <section className="py-20 px-6 bg-[#E5ECF4] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">Як це працює</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "✅ Миттєве підключення",
              desc: "Знайди співрозмовника за лічені секунди без очікувань.",
            },
            {
              title: "✅ Реальні люди",
              desc: "Живе спілкування без ботів і фейкових акаунтів.",
            },
            {
              title: "✅ Без обмежень",
              desc: "Спілкуйся скільки хочеш і з ким хочеш без лімітів.",
            },
            {
              title: "✅ Повна анонімність",
              desc: "Твої дані залишаються конфіденційними та захищеними.",
            },
            {
              title: "✅ Зручний інтерфейс",
              desc: "Все максимально просто – один клік, і ти вже у чаті.",
            },
            {
              title: "✅ Спілкування за інтересами",
              desc: "Обирай теми, які тобі цікаві, і знаходь однодумців.",
            },
          ].map(({ title, desc }, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Часті запитання
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border rounded-xl shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="text-blue-500 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 border-t">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
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
        </div>
      </footer>
    </main>
  );
}
