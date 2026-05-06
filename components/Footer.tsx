export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-slate-600">
        <p>© {new Date().getFullYear()} XcelTrade.ai — All rights reserved.</p>
      </div>
    </footer>
  );
}
