
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black p-10">
  <aside className="w-52">
    <p>
      <span className="font-bold text-white">CS--Ticket System.</span>
      <br />
      <span className="text-gray-300">A Customer Service Ticket System is a tool that tracks and manages customer issues from submission to resolution, helping teams respond faster and stay organized.</span>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-gray-300">About us</a>
    <a className="link link-hover text-gray-300">Contact</a>
    <a className="link link-hover text-gray-300">Our Mission</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Services</h6>
    <a className="link link-hover text-gray-300">Products and services</a>
    <a className="link link-hover text-gray-300">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Information</h6>
    <a className="link link-hover text-gray-300">Terms and Condition</a>
    <a className="link link-hover text-gray-300">Privacy policy</a>
    <a className="link link-hover text-gray-300">Join US</a>

  </nav>
  <nav>
    <h6 className="footer-title text-white">Social Links</h6>
    <a className="link link-hover text-gray-300">Facebook</a>
    <a className="link link-hover text-gray-300">Twitter</a>
    <a className="link link-hover text-gray-300">Instagram</a>
    <a className="link link-hover text-gray-300">Mail</a>
  </nav>
</footer>
    );
};

export default Footer;