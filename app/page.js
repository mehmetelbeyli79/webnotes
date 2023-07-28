import Login from "./Login/page";
export default function Home() {
  return (
    <main className="flex w-full h-screen justify-center">
      <div className="flex flex-col md:w-3/5 w-4/5 md:h-3/6 justify-center items-center">
        <div className="border-2 rounded-sm border-red-200 shadow-lg p-8 md:p-12">
          <h1 className="md:text-4xl text-3xl leading-tight mb-6 text-center">
            Web Üzerinde Hızlı Not Tut!
          </h1>
          <h2 className="md:text-2xl text-2xl leading-tight text-center mb-6">
            Kendi Özel Alanına Eriş!
          </h2>
          <Login />
        </div>
      </div>
    </main>
  );
}
