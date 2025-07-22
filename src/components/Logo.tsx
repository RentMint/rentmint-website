const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center`}>
      <svg
        width="180"
        height="48"
        viewBox="0 0 180 48"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* RentMint Typography Logo */}
        <text
          x="0"
          y="32"
          className="font-display font-bold text-rentmint-primary fill-rentmint-primary"
          fontSize="28"
          style={{ letterSpacing: '-0.025em' }}
        >
          Rent
        </text>
        <text
          x="76"
          y="32"
          className="font-display font-bold text-rentmint-accent fill-rentmint-accent"
          fontSize="28"
          style={{ letterSpacing: '-0.025em' }}
        >
          Mint
        </text>
        
        {/* Subtle accent dot */}
        <circle cx="168" cy="28" r="3" className="fill-rentmint-accent" />
      </svg>
    </div>
  );
};

export default Logo;