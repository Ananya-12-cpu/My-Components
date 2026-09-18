import BackLink from '../components/BackLink'

function SliderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <BackLink />

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl text-center">
          <h1 className="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Slider
          </h1>
          <p className="text-gray-400">This module is still under construction. Check back soon.</p>
        </div>
      </div>
    </div>
  )
}

export default SliderPage
