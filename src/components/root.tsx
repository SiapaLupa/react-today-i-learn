import { Form, Outlet } from "react-router-dom";

export default function Root(): JSX.Element {
  return (
    <>
      <header className="h-screen grid grid-flow-col p-16 gap-8">
        <section className="w-full h-full box-content m-auto rounded-xl overflow-hidden">
          <Form
            action="/"
            method="post"
            className="h-full bg-gray-700 flex flex-col relative"
          >
            <h1 className="text-center text-3xl leading-loose">
              Today I Learn...
            </h1>
            <input
              type="text"
              placeholder="boiling egg.."
              className="p-4 text-center outline-none border-b-white"
              name="title"
              required
            />
            <textarea
              placeholder="first, we need to prepare the ingredients"
              className="h-full outline-none resize-none p-4"
              name="description"
              required
            ></textarea>
            <input
              type="submit"
              value="+"
              className="absolute bottom-6 right-4 w-12 aspect-square rounded-full bg-slate-200"
            />
          </Form>
        </section>
        <section className="w-full h-full bg-emerald-100 m-auto rounded-xl overflow-hidden"></section>
      </header>
      <main
        style={{ "--bgcolor": "rgb(30 41 59 / var(--tw-bg-opacity))" }}
        className="bg-[var(--bgcolor)]"
      >
        <h1 className="text-center text-9xl leading-loose bg-slate-800">
          My Learning History
        </h1>
        <Outlet />
      </main>
    </>
  );
}
