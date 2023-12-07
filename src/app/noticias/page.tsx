import Link from "next/link";

export default function Noticias() {
  return (
    <main>
      <h1>Notícias</h1>
      <Link href="/noticia/1">Jovem brasileira ganha troféu</Link>
      <br />
      <br />
      <Link href="/noticia/2">Mineiro é campeão mundial de jiu-jitsu</Link>
    </main>
  );
}
