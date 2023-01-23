const Singapore = () => {
  const [city, setCity] = useState("");
  const query = useRouter();

  useEffect(() => {
    let a = query.route.split("/");
    let b = a.pop();
    setCity(b);
  }, []);
  return (
    <>
      <div>Singapore</div>
      <div>Singapore</div>
      <div>Singapore</div>
    </>
  );
};
export default Singapore;
