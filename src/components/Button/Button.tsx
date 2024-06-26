// Addera knapp för att addera fler users till listan
type ButtonProps = {
  onClick: () => void;
  isFetching: boolean;
};

export default function Button({ onClick, isFetching }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={isFetching}>
      {isFetching ? "Hämtar..." : "Hämta ny användare"}
    </button>
  );
}
