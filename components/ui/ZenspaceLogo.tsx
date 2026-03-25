import Image from "next/image";
import Link from "next/link";
import WaveformIcon from '@/public/icons/audio-tap.svg';

const ZenspaceLogo = () => {
  return (
  
    <Link
      href="/"
      style={{display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Image
        alt="ZenSpaceApp logo"
        src={WaveformIcon}
        width={30}
        height={30} />
      <span style={{ fontFamily: "var(--font-syne)", color: "var(--green-800)" }}>
        ZenspaceApp
      </span>
    </Link>
  )
}

export default ZenspaceLogo;