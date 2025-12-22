export default function Hero() {
  const isHolidayClosed = true;

  return (
    <section 
      className="relative flex flex-col  items-center bg-red-900 h-[900px] md:h-[500px] overflow-hidden text-center px-4 py-20 text-yellow-50">
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] bg-yellow-50 flex justify-center items-center slide-down"
        style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
      >
        <img 
          src="/Hidden Cafe-Logo(3).png" 
          alt="Logo" 
          style={{ width: '350px' }} 
          className="h-auto mb-4 bg-yellow-50" 
        />
      </div>

      <div className="mt-[220px] md:mt-[100px] w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10 px-4 z-10 fade-in">
        <div className="text-lg space-y-3 text-center md:text-left">
          {!isHolidayClosed && (
            <a 
              href="https://hidden-cafe.hrpos.heartland.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-yellow-50 font-semibold py-3 rounded hover:underline transition"  
            >
              🍳 Order Online
            </a>
          )}

          {isHolidayClosed && (
            <div className="bg-yellow-50 text-red-900 rounded-lg p-4 max-w-sm mx-auto md:mx-0">
              <p className="font-bold text-lg"> Closed for the Holidays!</p>
              <p className="text-sm mt-1">
                We will reopen and be ready for online orders on <strong>January 2nd</strong>.
                <br />
                Thank you for supporting our family business!
              </p>
            </div>
          )}
          <div><a href="tel:+13036788034" className="hover:underline">☎️ (303)678-8034</a></div>
          <div>📍829 Main Street, Suite #5<br /> Longmont, CO 80501</div>
          <p className="font-semibold text-yellow-50">🚫 NO RESERVATIONS -<br /> FIRST COME, FIRST SERVED!</p>
        </div>

        <address className="not-italic text-lg space-y-3 text-center md:text-right">
          <div className="leading-relaxed">
            <span className="font-bold text-2xl">🕒HOURS:</span><br />
            Sunday: 7:00am - 12:45pm<br />
            Monday: 6:00am - 1:45pm<br />
            Tuesday: CLOSED<br />
            Wednesday: 6:00am - 1:45pm<br />
            Thursday: 6:00am - 1:45pm<br />
            Friday: 6:00am - 1:45pm<br />
            Saturday: 7:00am - 12:45pm
          </div>
        </address>
      </div>
      <div>
          <p className="italic text-2xl mt-8 fade-in font-semibold">"Family owned since 1993"</p>
          
      </div>
    </section>
  )
}

