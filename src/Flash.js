import React from "react";

function Flash({ name, picture }) {
    return <div>
        <h3>I love freakin' { name }</h3>
        <img src={picture} />
    </div>
}

const bandILike = [
    {
        name: "Metaallica",
        image: "https://www.rollingstone.com/wp-content/uploads/2018/09/metallica-whiskey.jpg"
    },
    {
        name: "Aerosmith",
        image: "https://images-na.ssl-images-amazon.com/images/I/C19l+styVkS._SL1000_.png"
    },
    {
        name: "Eric Clapton",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/13/09/Eric-Clapton.jpg"
    },
    {
        name: "Bon Jovi",
        image: "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/b285f492-Bon-Jovi-660-Reuters.jpg?ve=1&tl=1?ve=1&tl=1"
    },
    {
        name: "Linkin Park",
        image: "https://www.tvovermind.com/wp-content/uploads/2018/10/Linkin-Park.jpg"
    }
];

export default Flash;