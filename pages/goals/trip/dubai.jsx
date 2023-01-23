const Dubai = () => {
  const [city, setCity] = useState("");
  const query = useRouter();

  useEffect(() => {
    let a = query.route.split("/");
    let b = a.pop();
    setCity(b);
  }, []);
  return (
    <>
      <div>Dubai</div>
      <div>Dubai</div>
      <div>Dubai</div>
    </>
  );
};
export default Dubai;
