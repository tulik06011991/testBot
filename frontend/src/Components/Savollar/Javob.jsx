const Javob = () => {
  const { natija } = useContext(UserContext);
  const [data] = useState(natija); // natija ma'lumotini o'zgaruvchiga yuklash

  console.log(data);

  return (
    <>
      <div>
        <br /><br /><br /><br />
        <h1 className='text-xl font-bold'>
          Javoblar soni: {data.totalQuestions} {/* data ma'lumotini foydalanish */}
        </h1>
      </div>
    </>
  );
}

export default Javob;
