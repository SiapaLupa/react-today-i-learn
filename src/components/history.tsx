import { Form, useLoaderData } from "react-router-dom";

export default function History(): JSX.Element {
  const { items }: { items: Record<string, string>[] } = useLoaderData();
  const itemsDate = new Set<string>();
  itemsDate;
  items.forEach((item) => {
    itemsDate.add(item.day);
  });
  return (
    <section className="min-h-screen px-40 bg-slate-900">
      {Array.from(itemsDate).map((date: string, index: number) => {
        return (
          <>
            <h1 className="text-2xl leading-loose font-extrabold">
              {index === 0 ? "Today" : date}
            </h1>
            <section className="w-full flex gap-4 flex-wrap">
              {items.reverse().map((item) => {
                if (item.day === date)
                  return (
                    <div className="max-w-md bg-slate-200 text-slate-900 p-4 shadow-xl shadow-slate-900 opacity-90 hover:opacity-50 transition-{opacity} duration-300 rounded-lg">
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  );
              })}
            </section>
          </>
        );
      })}
    </section>
  );
}
