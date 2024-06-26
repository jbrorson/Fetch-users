import "./Spinner.css";

type SpinnerProps = {
  text: string;
};

export default function Spinner({ text }: SpinnerProps) {
  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}
