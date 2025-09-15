
export default function Home() {
  return (
    <div className="gap-5">
      {/* sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536) */}
      <div className="main-container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        <div className="box bg-red-50 text-red-500 p-5">1Box</div>
        <div className="box bg-red-100 text-red-500 p-5" >2Box</div>
        <div className="box bg-red-200 text-red-500 p-5" >3Box</div>
        <div className="box bg-red-300 text-red-500 p-5" >4Box</div>
        <div className="box bg-red-400 p-5" >5Box</div>
        <div className="box bg-red-500 p-5" >6Box</div>
        <div className="box bg-red-600 p-5" >7Box</div>
        <div className="box bg-red-700 p-5" >8Box</div>
        <div className="box bg-red-800 p-5" >9Box</div>
      </div>
    </div>
    
  )
}
