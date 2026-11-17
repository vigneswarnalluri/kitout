import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { models } from "@/lib/models";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image className="footer-logo" src="/images/brand/logo-white.png" alt={`${site.name} ${site.tagline}`} width={1180} height={336} />
          <p className="footer-text">
            {site.description} {site.slogan}
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Units</h4>
          <ul>
            {models.map((m) => (
              <li key={m.slug}>
                <Link href={`/models/${m.slug}`}>{m.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.mapHref} target="_blank" rel="noopener noreferrer">
                {site.address}
              </a>
            </li>
          </ul>
          <p className="footer-social">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name} {site.tagline} All rights reserved.
        </span>
      </div>
    </footer>
  );
}
