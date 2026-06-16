export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-primary/10 border-primary/30">
                <span className="font-serif text-xl font-bold text-primary">CS</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">COMMERCE SHALA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Kanpur's elite commerce coaching institute. Shaping future commerce leaders with expert guidance and proven methodologies.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#director" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li>CBSE Commerce</li>
              <li>ISC Commerce</li>
              <li>UP Board Commerce</li>
              <li className="pt-4 mt-4 border-t border-white/10 text-sm">
                Accountancy • Economics • Business Studies
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Commerce Shala. All Rights Reserved. <br className="md:hidden" />Managed by Saurabh Tripathi.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
