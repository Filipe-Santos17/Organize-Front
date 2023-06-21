export default function ErroMsg({ erro }: { erro: string }) {
  if (!erro) return null;
  return <p className="error-message">{erro}</p>;
}
