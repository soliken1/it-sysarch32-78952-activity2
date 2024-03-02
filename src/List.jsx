import solikenpic from "./assets/soliken.jpg";
import ajpic from "./assets/aj.jpg";
import art from "./assets/art.jpg";
import franz from "./assets/franz.jpg";
import jemuel from "./assets/jemuel.jpg";
import vicser from "./assets/vicser.jpg";
function List() {
  const students = [
    {
      id: 1,
      name: "Ken James Macas",
      email: "kennethjamesmacas@gmail.com",
      profile: solikenpic,
    },
    {
      id: 2,
      name: "Jemuel Rosal",
      email: "jemuelrosal@gmail.com",
      profile: jemuel,
    },
    {
      id: 3,
      name: "Clint D'art Diamos",
      email: "clintdartdiamos@gmail.com",
      profile: art,
    },
    {
      id: 4,
      name: "Alvin John Araneta",
      email: "alvinjohnaraneta@gmail.com",
      profile: ajpic,
    },
    {
      id: 5,
      name: "Franz Ruie Morada",
      email: "franzruiemorada@gmail.com",
      profile: franz,
    },
    {
      id: 6,
      name: "Vicser Espiritu",
      email: "vicserespiritu@gmail.com",
      profile: vicser,
    },
  ];

  return students;
}

export default List;
