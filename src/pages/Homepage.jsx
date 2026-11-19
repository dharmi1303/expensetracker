import Expenselist from "../components/Expenselist";
import Navbar from "../components/Navbar";

export default function Homepage() {
    const expense=[
      {
        amount:"₹2,500",
        shopping:"grosary shopping",
        date:"17 Nov 2026",
        category:"food"
      },
      {
        amount:"₹1,500",
        shopping:"cloth shopping",
        date:"13 March 2026",
        category:"shopping"
      },
      {
        amount:"₹3,500",
        shopping:"vegitable shopping",
        date:"11 Dec 2026",
        category:"food"
      },
    ];
    
    return (
        <>
        <Navbar/>
        <Expenselist expense={expense} />
        </>
    )
}