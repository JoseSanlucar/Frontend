const bookedTimesByDate = {
    '2024-02-20': ['18:00', '19:00', '21:00'],
    '2024-2-19': ['18:00', '22:00', '16:00'],
    '2024-02-21': ['18:00', '19:00', '21:00'],
    '2024-02-22': ['18:00', '19:00', '16:00'],
    '2024-02-23': ['18:00', '19:00', '21:00'],
    '2024-02-24': ['18:00', '17:00', '20:00'],
    '2024-02-25': ['18:00', '19:00', '21:00'],
    '2024-02-26': ['18:00','20:00'],
    '2024-02-27': ['18:00', '19:00', '21:00'],
    '2024-02-28': ['18:00'],
  };


  const fetchAPI = (date) => {
    const bookedTimes = bookedTimesByDate[date] || [];
    const desiredTimes = ['15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'];
    const availableTimes = desiredTimes.filter(time => !bookedTimes.includes(time));
    return availableTimes;
};

function submitAPI(formData, simulateSuccess = true) {
  // Simulación de una operación asincrónica con un temporizador
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (simulateSuccess) {
              resolve(true); // Resuelve la promesa con true si la simulación es exitosa
          } else {
              reject(new Error("Submission failed")); // Rechaza la promesa con un error si la simulación falla
          }
      }, 1000); // Simula una demora de 1 segundo, puedes ajustar este valor según tus necesidades
  });
}



  export{fetchAPI, submitAPI}