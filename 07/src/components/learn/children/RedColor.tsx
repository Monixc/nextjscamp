const RedColor = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div style={{ color: "red", fontSize: "50px" }}>{children}</div>
    </>
  );
};
export default RedColor;