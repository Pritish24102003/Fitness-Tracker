const fetchFitnessData = async () => {
    try {
      const response = await fetch('https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json', {
        headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  