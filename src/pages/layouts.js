import Navbar from "@/components/Navbar";

// import custom components
export default function Layout({ children }) {
  // styles the main html tag

  return (
    <>
      <main>
        <Navbar />
        <section>{children}</section>
      </main>
    </>
  );
}
