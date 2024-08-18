enum DayOfWeek {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday,
}

let twoLiteralType: "робочый" | "вихiдний";

const isWeekend = (day: DayOfWeek): boolean => {
   return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
