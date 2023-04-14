import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards"
import "./App.css";
import Footer from "./components/Footer";
import "./components/components_css/Cards.css";
import cardData from "./CardData";



export default function App(){
    const data = cardData.map(function (lists){
        return(
            <Cards
                key={lists.id}
                img={lists.coverImg}
                rating={lists.stats.rating}
                reviewCount={lists.stats.reviewCount}
                location={lists.location}
                title={lists.title}
                price={lists.price}
                openSpot={lists.openSpots}
            />

        );
    })
    return(
        <>
            <Navbar />
            <Hero />
            <div className={"cards-list"}>
                {data}
            </div>
            <Footer />

        </>
    );
}


//
// {/*<Cards*/}
// {/* img={wedding}*/}
// {/* star={star}*/}
// {/* rating={5.0}*/}
// {/* reviewCount={5}*/}
// {/* location={"USA"}*/}
// {/*/>*/}
//
// {/*<Cards*/}
// {/* img={bike}*/}
// {/* star={star}*/}
// {/* rating={5.0}*/}
// {/* reviewCount={5}*/}
// {/* location={"USA"}*/}
// {/*/>*/}
