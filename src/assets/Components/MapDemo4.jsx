import React from 'react'

function MapDemo4() {
  var books = [
  {
    "id": 101,
    "name": "The Great Book",
    "releseyear": 2024,
    "ratings": 4.5,
    "author": "John Doe",
    "price": 699
  },
  {
    "id": 102,
    "name": "Learning JavaScript",
    "releseyear": 2022,
    "ratings": 2.8,
    "author": "Jane Smith",
    "price": 1199
  },
  {
    "id": 103,
    "name": "Modern Web Design",
    "releseyear": 2024,
    "ratings": 4.3,
    "author": "Alex Johnson",
    "price": 799
  },
  {
    "id": 104,
    "name": "Python for Beginners",
    "releseyear": 2025,
    "ratings": 2.6,
    "author": "Emily Clark",
    "price": 259
  },
  {
    "id": 105,
    "name": "Data Science Handbook",
    "releseyear": 2023,
    "ratings": 3.9,
    "author": "Michael Brown",
    "price": 699
  },
  {
    "id": 106,
    "name": "AI and Machine Learning",
    "releseyear": 2021,
    "ratings": 1.7,
    "author": "Sophia White",
    "price": 599
  },
  {
    "id": 107,
    "name": "React in Action",
    "releseyear": 2026
    ,
    "ratings": 2.4,
    "author": "David Wilson",
    "price": 349
  },
  {
    "id": 108,
    "name": "C++ Programming",
    "releseyear": 2025,
    "ratings": 4.2,
    "author": "Chris Evans",
    "price": 1399
  },
  {
    "id": 109,
    "name": "Cloud Computing Basics",
    "releseyear": 2022,
    "ratings": 3.5,
    "author": "Nancy Green",
    "price": 459
  },
  {
    "id": 110,
    "name": "Cybersecurity Essentials",
    "releseyear": 2023,
    "ratings": 1.8,
    "author": "Robert King",
    "price": 999
  }
]
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Map Demo 4</h1>
        {/* <h1>id:- {books[0].id}</h1>
          <h1>name:- {books[0].name}</h1>
          <h1>name:- {books[0].releseyear}</h1>
          <h1>name:- {books[0].author}</h1>
          <h1>name:- {books[0].price}</h1>
          <h1>name:- {books[0].ratings}</h1> */}

        <table className='table table-dark'>
            <thead>
                <tr align="center">
                    <th>id</th>
                    <th>name</th>
                    <th>releseyear</th>
                    <th>ratings</th>
                    <th>author</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
            {
              books.map((book)=>{

                  return <tr align="center" >
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.releseyear}
                      {book.releseyear == 2025 && " Current Year"}
                      {book.releseyear == 2026 && " Next Year"}
                      {book.releseyear == 2024 && " previous Year"}
                    </td>
                    <td>{book.ratings}
                      {4<=book.ratings  && " High Recom.."}
                      {2>=book.ratings && " Low Recom.."}
                    </td>
                    <td>{book.author}</td>
                    <td  style={{backgroundColor : (500<=book.price && book.price<=1500) && ((1000<=book.price && book.price<=1500)? "red" : "yellow")}}>{book.price}
                      {(1000<=book.price && book.price<=1500) && " Highe Price"}                    
                       <span>{(500<=book.price && book.price<=1000) && " Normal Price"}</span>               
                    </td>
                  </tr>
              })

            }
            </tbody>
        </table>

          
    </div>
  )
}

export default MapDemo4