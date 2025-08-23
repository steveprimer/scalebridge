/* Install first:
   npm install @calcom/embed-react
   or
   yarn add @calcom/embed-react
*/

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-start py-16 px-4 sm:px-8">
      {/* Heading */}
      <div className="max-w-4xl text-left w-full mb-12">
        <p className="text-md font-medium text-blue-400 mb-2">BOOKING</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Let&apos;s discuss your project!
        </h2>
      </div>

      {/* Cal Embed */}
      <div className="w-full max-w-6xl flex-1">
        <Cal
          namespace="30min"
          calLink="anson-stephan/30min"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "750px", // ensures mobile doesn’t cut it off
            overflow: "auto",
          }}
          config={{
            layout: "month_view",
          }}
        />
      </div>
    </section>
  );
}
