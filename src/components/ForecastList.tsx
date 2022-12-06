const ForecastList = (): JSX.Element => {
  const list = [
    {
      id: 1,
      weather: 'cloudy',
      temperature: '96',
    },
    {
      id: 2,
      weather: 'cloudy',
      temperature: '96',
    },
    {
      id: 3,
      weather: 'cloudy',
      temperature: '96',
    },
    {
      id: 4,
      weather: 'cloudy',
      temperature: '96',
    },
    {
      id: 5,
      weather: 'cloudy',
      temperature: '96',
    },
    {
      id: 6,
      weather: 'cloudy',
      temperature: '96',
    },
    {
      id: 7,
      weather: 'cloudy',
      temperature: '96',
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-sm-2">
      {list.map((l) => (
        <div className="col border p-4">{l.weather}</div>
      ))}
    </div>
  );
};

export default ForecastList;
