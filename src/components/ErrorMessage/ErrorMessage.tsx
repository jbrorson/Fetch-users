import "./ErrorMessage.css";

type ErrorMessageProps = {
  text: string;
};

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div className="Error">
      <h1>Ett fel har inträffat!</h1>
      <p>{text}</p>
    </div>
  );
}
