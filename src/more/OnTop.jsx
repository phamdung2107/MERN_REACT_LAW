import { useEffect, useState } from "react";

function OnTop() {
  const [showGototop, setShowGototop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGototop(true);
      } else {
        setShowGototop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showGototop && (
        <button
          style={{
            position: "fixed",
            right: 40,
            bottom: 60,
            padding: 10,
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
        >
          Top
        </button>
      )}
    </>
  );
}

export default OnTop;
