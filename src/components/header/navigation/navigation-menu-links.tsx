'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { schnyder } from '@/libs/next-fonts/local-fonts/schnyder/schnyder';
import { playFairDisplay } from '@/libs/next-fonts/google-fonts/play-fair-display';
import { bodoniModa } from '@/libs/next-fonts/archive-fonts/bodoni-moda';

type TProps = React.FC<{
  menuStatus: boolean;
  isMobile: boolean | undefined;
}>;

const links = [
  { name: 'Anasayfa', url: '/', isActive: true },
  { name: 'Eğitim', url: '/', isActive: false },
  { name: 'İletişim', url: '/', isActive: false },
  { name: 'Fiyatlar', url: '/', isActive: false },
  { name: 'Lokasyon', url: '/', isActive: false },
];

export const NavigationMenuLinks: TProps = ({ isMobile, menuStatus }) => {
  return (
    menuStatus && (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-950 sm:rounded-[24px] sm:shadow sm:shadow-zinc-700">
        <div className={'absolute inset-0'}>
          <ul className="relative flex h-screen w-full flex-col items-center justify-center basePhone:-space-y-2 sm:h-full sm:-space-y-2">
            {links.map((link, index) => (
              <li
                key={link.name}
                className="relative flex h-[60px] flex-col items-center justify-center overflow-hidden basePhone:h-[82px] sm:h-[75px]"
              >
                <motion.div
                  initial={{
                    y: 70,
                    opacity: 0.15,
                  }}
                  animate={{
                    y: -2,
                    opacity: 1,
                  }}
                  exit={{
                    y: '100%',
                    scale: 0.95,
                    transition: {
                      delay: 0.5 - index * 0.1,
                      duration: 0.35,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    delay: !isMobile ? 0.35 + index * 0.1 : 0.05 + index * 0.125,
                    type: 'ease',
                    ease: [0.22, 1, 0.78, 1],
                    opacity: {
                      duration: 1,
                      delay: index * 0.15,
                    },
                  }}
                >
                  <Link
                    href={link.url}
                    className={`${
                      link.isActive ? 'opacity-100' : 'opacity-50'
                    } transition-opacity duration-500 hover:opacity-100 ${
                      playFairDisplay.className
                    } pointer-events-auto relative 
                  z-[57000] text-5xl lowercase text-zinc-100 basePhone:text-6xl lgPhone:text-7xl sm:text-6xl`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};
