function MenuIcon({ size = 50, color = "#f1faee", isOpen, setIsOpen }) {
  const height = size * 0.8;
  const barWidth = size * 1;
  const barHeight = size * 0.14;
  const middleTop = height / 2 - barHeight / 2;

  return (
    <label
      htmlFor="menu-toggle"
      className="relative cursor-pointer z-50 block"
      style={{ width: `${size}px`, height: `${height}px` }}
      onChange={() => setIsOpen(!isOpen)}
    >
      <span
        className={`absolute left-0 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 origin-top-left" : ""
        }`}
        style={{
          width: isOpen ? size * 0.96 : barWidth,
          height: barHeight,
          top: 0,
          left: isOpen ? 5 : 0,
          backgroundColor: color,
        }}
      />

      <span
        className={`absolute left-0 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 -translate-x-5" : ""
        }`}
        style={{
          width: barWidth,
          height: barHeight,
          top: middleTop,
          backgroundColor: color,
        }}
      />

      <span
        className={`absolute left-0 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-[-45deg] origin-top-left shadow-md" : ""
        }`}
        style={{
          width: isOpen ? size * 0.96 : barWidth,
          height: barHeight,
          bottom: isOpen ? -1 : 0,
          backgroundColor: color,
        }}
      />
    </label>
  );
}

export default MenuIcon;
