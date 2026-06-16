export default function Footer() {
  return (
    <footer
      className="bg-black pt-20 pb-10 border-t border-white/10"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <meta itemProp="name" content="Commerce Shala" />
      <meta itemProp="url" content="https://commerce-shala.replit.app/" />
      <meta itemProp="telephone" content="+918004117317" />
      <link itemProp="sameAs" href="https://wa.me/918004117317" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand block with NAP */}
          <div className="col-span-1 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-primary/10 border-primary/30">
                <span className="font-serif text-xl font-bold text-primary">CS</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">COMMERCE SHALA</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6" itemProp="description">
              Kanpur's elite commerce coaching institute. Shaping future commerce leaders with expert guidance in Accountancy, Economics &amp; Business Studies for CBSE, ISC and UP Board.
            </p>

            {/* NAP — schema-friendly address block */}
            <address
              className="not-italic space-y-2 text-sm text-gray-500"
              itemScope
              itemType="https://schema.org/PostalAddress"
              itemProp="address"
            >
              <p>
                <span className="text-gray-400 font-medium">Director:</span>{' '}
                <span itemProp="name">Saurabh Tripathi</span>
              </p>
              <p itemProp="streetAddress">117/P/761 Shivpuri Chhapeda Puliya,</p>
              <p>
                <span itemProp="addressLocality">Kakadeo, Kanpur</span>,{' '}
                <span itemProp="addressRegion">Uttar Pradesh</span>{' '}
                <span itemProp="postalCode">208025</span>,{' '}
                <span itemProp="addressCountry">India</span>
              </p>
              <p className="pt-1">
                <a
                  href="tel:+918004117317"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  itemProp="telephone"
                >
                  +91 80041 17317
                </a>
              </p>
            </address>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#director" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Our Courses</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Student Results</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Admissions</a></li>
            </ul>
          </nav>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold mb-6">Programs Offered</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>CBSE Commerce (Class 11 &amp; 12)</li>
              <li>ISC Commerce (Class 11 &amp; 12)</li>
              <li>UP Board Commerce</li>
              <li className="pt-2 mt-2 border-t border-white/10 text-gray-500">
                Accountancy &bull; Economics &bull; Business Studies
              </li>
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/918004117317?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Commerce%20Shala%20coaching."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-black text-sm font-bold hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Book Free Demo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Commerce Shala, Kanpur. All Rights Reserved.{' '}
            <br className="md:hidden" />
            Managed by{' '}
            <span itemProp="founder" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">Saurabh Tripathi</span>
            </span>.
          </p>
          <p className="text-gray-600 text-xs text-center">
            CBSE &bull; ISC &bull; UP Board &bull; Commerce Coaching &bull; Kanpur, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
