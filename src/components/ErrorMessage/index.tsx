interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p style={{ color: "#FF0000", fontWeight: 600, marginTop: "8px" }}>
      <span>!</span> {message}
    </p>
  );
};

export default ErrorMessage;
