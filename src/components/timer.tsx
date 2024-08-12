useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
export default function Timer() {
<a href="https://logwork.com/countdown-timer" class="countdown-timer" data-timezone="Asia/Kolkata" data-textcolor="f56e0f" data-date="2024-08-14 00:00" data-digitscolor="#f56e0f" data-unitscolor="#f56e0f">Time Remaining</a>
}