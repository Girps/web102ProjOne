import Card from "./Card"
import Cover from '../assets/Cover.png'
// Board component that holds a grid/row of cards displaying images food trucks 
const  Board = () => 
    {


        const cards = [
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "First Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Second Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Third Card" }, 
    { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "First Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Second Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Third Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Third Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Third Card" },
  { img: "https://picsum.photos/id/237/200/300", title: "Puppy", description: "Third Card" }
       
    ];

        return (
            <div>
                 <img src = {Cover}></img>
            <h1 style ={{fontSize: "48px" , color: "white",     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // x-offset, y-offset, blur, color
,
}}>Puppy Adoptions!</h1>
            <table> 
                
                {cards.reduce((rows, card, index) => {
      if (index % 3 === 0) rows.push([]); // start a new row every 6 cards
      rows[rows.length - 1].push(card);
      return rows;
    }, []).map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((card, cardIndex) => (
          <td key={cardIndex}>
            <Card imgSrc={card.img} title={card.title + rowIndex } description={card.description} />
          </td>
        ))}
      </tr>
    ))}
            </table>
            </div>
        ) 
    }

export default Board;  