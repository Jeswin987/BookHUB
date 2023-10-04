import React, { useState, useEffect } from "react";
import Books from './Books'
import axios from "axios";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    useEffect(() => {
        // Function to fetch random books when the component mounts
        const fetchRandomBooks = () => {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=random&key=AIzaSyDifwu8GSUgRdFxzq96mOtqSvRXxwDw1Ao' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        };

        // Call the function to fetch random books when the component mounts
        fetchRandomBooks();
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDifwu8GSUgRdFxzq96mOtqSvRXxwDw1Ao' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
          <div style={{paddingBottom:"100px"}} >
                <div className="header">
                    <div className="row1">
                        <h1>A room without books is like<br /> a body without a soul.</h1>
                    </div>
                    <div className="row2">
                        <h2>Find Your Book</h2>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Enter Your Book Name"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={searchBook}
                            />
                            <button onClick={searchBook} type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
    
                <div className="container w-75">
                    {
                        <Books book={bookData} />
                    }
                </div>
             
          </div>
         
              <footer className="text-center text-white  " style={{ backgroundColor: "black" }}>
                  <div className="container d-flex flex-column">
                    <section className="mt-5">
                      <div className="row text-center d-flex justify-content-evenly pt-5">
                        <div className="col-md-2">
                          <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-white">About us</a>
                          </h6>
                        </div>
        
                        <div className="col-md-2">
                          <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-white">Products</a>
                          </h6>
                        </div>
        
                        <div className="col-md-2">
                          <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-white">Help</a>
                          </h6>
                        </div>
        
                        <div className="col-md-2">
                          <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-white">Contact</a>
                          </h6>
                        </div>
                      </div>
                    </section>
        
                    <hr className="my-5" />
        
                    <section className="mb-5">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                          <p>
                          Welcome to BookHub, your ultimate online destination for book enthusiasts and avid readers. At BookHub, we're passionate about books, and our website is designed to make your reading journey even more enjoyable and convenient.
                          </p>
                        </div>
                      </div>
                    </section>
        
                    <section className="text-center mb-5">
                      <a href="" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="" className="text-white me-4">
                        <i className="fab fa-google"></i>
                      </a>
                      <a href="" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="" className="text-white me-4">
                        <i className="fab fa-github"></i>
                      </a>
                    </section>
        
                  </div>
        
                  <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                  >
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">BookHUB.com</a>
                  </div>
                </footer>
        </>
    )
}

export default Main;
