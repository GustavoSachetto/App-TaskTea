export function CurrentDate() {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const date = new Date();
  const dayName = days[date.getDay()];
  const day = date.getDate();

  return `${dayName}, dia ${day}`;

}
