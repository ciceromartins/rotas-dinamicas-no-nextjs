import Link from "next/link";

export default function Noticia({ params }: { params: any }) {
  let titulo = "";
  /*switch (params.id) {
    case "1":
      titulo = "Jovem brasileira ganha troféu";
      break;
    case "2":
      titulo = "Mineiro é campeão mundial de jiu-jitsu";
      break;
    default:
      titulo = "Notícia não encontrada!";
      break;
  }*/

  return (
    <main>
      ID: {params.params[0]}
      <br />
      SLUG: {params.params[1]}
      <br />
      CIDADE: {params.params[2]}
    </main>
  );
}
