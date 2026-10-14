/**
 * Texto entre comillas rectas ASCII (").
 *
 * En Space Grotesk la comilla recta se dibuja inclinada y se lee como ”, así
 * que en titulares se pinta con Plus Jakarta Sans, que la dibuja vertical. El
 * carácter sigue siendo U+0022.
 */
export function Citado({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="font-sans">&quot;</span>
      {children}
      <span className="font-sans">&quot;</span>
    </>
  );
}
