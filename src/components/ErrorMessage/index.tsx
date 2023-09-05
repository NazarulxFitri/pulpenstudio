interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p
      style={{
        color: "#FF0000",
        fontSize: "12px",
        marginTop: "8px",
      }}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
