import { FaHome, FaMusic, FaBook, FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const navItems = [
  { href: '/', label: 'HOME', icon: <FaHome /> },
  { href: '/music', label: 'MUSIC', icon: <FaMusic /> },
  { href: '/writing', label: 'WRITING', icon: <FaBook /> },
  { href: 'https://github.com/bsaff', label: 'GITHUB', icon: <FaGithub />, external: true },
  { href: 'https://www.linkedin.com/in/benjamin-saff-4678085a/', label: 'LINKEDIN', icon: <FaLinkedin />, external: true },
];

export default function NavIcons({ currentPath, className }) {
  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className={item.href === currentPath ? 'active' : ''}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener' : undefined}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
