export function Footer() {
  return (
    <footer className="bg-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="layer-20.svg"
          alt="VacationVIP"
          className="h-5 mx-auto mb-5"
        />

        <p className="text-white text-base mb-5 max-w-3xl mx-auto">
          THIS ADVERTISING MATERIAL IS BEING USED FOR THE PURPOSE OF SOLICITING SALES OF TIMESHARE INTERESTS OR PLANS
        </p>

        <div className="bg-white rounded-lg inline-flex items-center gap-2 px-3 py-1 mb-5">
          <img
            src="group6.svg"
            alt="BBB Accredited"
            className="h-9 w-auto"
          />
          <div className="text-left">
            <p className="text-black text-xs font-bold">BBB Rating: A</p>
            <p className="text-black text-xs">
              As of 8/25/2025<br />Click for Profile
            </p>
          </div>
        </div>

        <p className="text-white text-base mb-2">
          Sogno Tours, LLC d/b/a VacationVIP.com
        </p>

        <address className="text-white text-base not-italic mb-5">
          9900 Lake Ellenor Drive Suite 300, Orlando, FL 32809
        </address>

        <p className="text-white text-base mb-5">
          Copyright &copy; 2026 | All Rights Reserved.
        </p>

        <p className="text-white text-base">
          SOT: Florida: ST44683 | Washington: 605354522 | California: 2156600-50 | Hawaii: 7531
        </p>
      </div>
    </footer>
  );
}
