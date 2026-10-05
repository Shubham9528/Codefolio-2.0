export function Button({ children, href, onClick, type = "button", className = "", variant = "portfolio" }) {
  const classes = variant === "ghost"
    ? `btn-ghost ${className}`
    : `btn-portfolio ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
