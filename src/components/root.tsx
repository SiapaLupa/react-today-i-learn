import { Form, Outlet } from "react-router-dom";

export default function Root(): JSX.Element {

  return (
    <>
      <header className="h-screen flex justify-center flex-col items-center">
        <h1 className="text-center text-3xl leading-loose">Today I Learn...</h1>
        <section className="w-96 aspect-square bg-slate-200">
          <div className="relative w-full h-full bg-gray-800 flex flex-col overflow-hidden">
            <Form action="/" method="post" className="h-full">
              <input
                type="text"
                placeholder="boiling egg.."
                className="w-full p-4 text-center outline-none border-b-white"
                name="title"
                required
              />
              <textarea
                placeholder="first, we need to prepare the ingredients"
                className="w-full h-full outline-none resize-none p-4"
                name="description"
                required
              ></textarea>
              <input
                type="submit"
                value="+"
                className="absolute bottom-6 right-4 w-12 aspect-square rounded-full bg-slate-200"
              />
            </Form>
          </div>
        </section>
      </header>
      <main style={{"--bgcolor":"rgb(30 41 59 / var(--tw-bg-opacity))"}} className="bg-[var(--bgcolor)]">
        <h1 className="text-center text-9xl leading-loose bg-slate-800">My Learning History</h1>
        <Outlet />
      </main>
    </>
  );
}
