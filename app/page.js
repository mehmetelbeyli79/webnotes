import Login from './Login/Login'
export default function Home() {
  return (
    
    <main className='flex w-full h-screen justify-center'>
      <div className='flex flex-col w-3/5  justify-center items-center'>
        <div className='border-4'>
          <h1>Web Üzerinde Hızlı Not Tut!</h1>
          <h2>Kendi Özel Alanına Eriş!</h2>
          <Login/>
        </div>
        
      </div>
    </main>
  )
}
