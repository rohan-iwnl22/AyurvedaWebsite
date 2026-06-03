import BranchCard from "./BranchCard";
import styles from "./FooterSection.module.css";

export default function FooterSection() {
  const branches = [
    {
      name: "North Side",
      address:
        "Office No. 101, Supreme Square, North Side Rd, Metro City - 400001",
      phone: "+91 98765 43210",
      email: "north@ayurvedademo.com",
      mapUrl:
        "https://maps.google.com/?q=Ayurvedic+Clinic+North+Side+Metro+City",
    },
    {
      name: "West End",
      address:
        "Flat No. 1, Ground Floor, West End Lane No. 2, Metro City - 400002",
      phone: "+91 98765 43210",
      email: "west@ayurvedademo.com",
      mapUrl: "https://maps.google.com/?q=Ayurvedic+Clinic+West+End+Metro+City",
    },
    {
      name: "East Gate",
      address:
        "Row House No. 2, Clover Corner, East Gate Rd, Metro City - 400003",
      phone: "+91 98765 43210",
      email: "east@ayurvedademo.com",
      mapUrl:
        "https://maps.google.com/?q=Ayurvedic+Clinic+East+Gate+Metro+City",
    },
    {
      name: "South Hub",
      address:
        "Shop No. 12, Destination Center, South Hub City, Metro City - 400004",
      phone: "+91 98765 43210",
      email: "south@ayurvedademo.com",
      mapUrl:
        "https://maps.google.com/?q=Ayurvedic+Clinic+South+Hub+Metro+City",
    },
    {
      name: "Central Point",
      address:
        "Plot No. 84, Sector 24, Near Central Station, Metro City - 400005",
      phone: "+91 98765 43210",
      email: "central@ayurvedademo.com",
      mapUrl:
        "https://maps.google.com/?q=Ayurvedic+Clinic+Central+Point+Metro+City",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* NABH Accreditation Banner */}
        <div className={styles.nabhBanner}>
          <div className={styles.nabhBadge}>
            <div className={styles.nabhBadgeText}>
              NABH
              <br />
              ACCREDITED
            </div>
          </div>
          <div className={styles.nabhText}>
            <h3>Accredited Ayurvedic Healthcare Provider</h3>
            <p>
              Ayurmana Ayurvedic Center is proud to be NABH accredited. We
              uphold the highest clinical safety, standards of hygiene, and
              therapeutic excellence.
            </p>
          </div>
        </div>

        {/* HQ / Origin Section */}
        <h2 className={styles.gridTitle}>Our Branch Locations</h2>

        {/* Branch Locations Grid */}
        <div className={styles.branchGrid}>
          {branches.map((branch) => (
            <BranchCard
              key={branch.name}
              name={branch.name}
              address={branch.address}
              phone={branch.phone}
              email={branch.email}
              mapUrl={branch.mapUrl}
            />
          ))}
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div>
            &copy; {new Date().getFullYear()} Ayurmana Ayurvedic Center. All
            Rights Reserved.
          </div>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <span>HQ: Veda Valley, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
