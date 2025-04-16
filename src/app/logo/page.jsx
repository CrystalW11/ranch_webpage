// src/app/logo/page.jsx
"use client";
import { useRouter } from "next/navigation";

export default function LogoPage() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: "#f0f0f0",
          cursor: "pointer",
        }}
      >
        ← Go Back
      </button>
      <img
        src="/images/rtr-ranch_logo-final_reverse.png"
        alt="RTR Ranch Logo"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
