import React, { useState } from "react";

export default function About() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnStyle, setBtnStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
  });
  const changeMode = () => {
    if (myStyle.color === "white") {
      setBtnText("Enable Dark Mode");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
    } else {
      setBtnText("Enable Light Mode");
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
    }
  };
  return (
    <>
      <div my-3 style={myStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla fugit
        blanditiis ducimus amet doloremque debitis, quibusdam ipsam explicabo
        vero inventore et quos necessitatibus nihil ab error soluta? Repudiandae
        incidunt enim, sunt tenetur sapiente repellat eius itaque facilis quidem
        quisquam. Minus maxime illo ipsa minima ipsum hic voluptatum, nulla
        dolorum assumenda nihil, magnam in eos modi, repudiandae at quae quia
        aperiam earum ducimus libero vero. Ipsum placeat magni, eligendi
        consequuntur exercitationem adipisci dolor molestiae modi cum illo quis
        perspiciatis a eveniet quaerat repudiandae in autem obcaecati nesciunt
        accusantium perferendis sed, nemo ut cumque id! Laborum possimus maiores
        tenetur dolorum inventore rem doloremque tempore enim expedita nostrum
        dignissimos ea deserunt soluta nisi laboriosam atque sunt accusantium,
        reiciendis est aspernatur, quod in modi? Quos placeat modi, consequatur
        deserunt ad reiciendis officiis sit amet a ratione fuga unde similique
        tempora vero ducimus necessitatibus corrupti facere corporis
        exercitationem possimus animi dicta? Adipisci quia est tempora totam
        sunt odit aperiam ab quidem cupiditate molestias! Beatae repudiandae
        laboriosam at numquam modi minima enim maiores, cum quis odit. Fugit
        tempora exercitationem esse at ullam et? Eos tenetur assumenda ipsam
        enim eveniet, iure, repudiandae fuga id dignissimos accusantium minima.
        Et sint distinctio nesciunt, magni cupiditate corrupti nemo sed totam
        incidunt alias voluptatum numquam nihil explicabo voluptatem quia
        maiores. Tempora laborum quo alias. Dignissimos earum atque maxime
        laboriosam, unde error provident. Laborum expedita labore repudiandae
        impedit debitis deserunt ratione, maiores assumenda dolorem incidunt
        quam numquam ea reiciendis aut animi, voluptates temporibus, ipsa sequi
        velit harum! Officiis alias fugit quam exercitationem labore totam vitae
        repellendus amet, illo facilis incidunt, nulla harum explicabo! Debitis
        voluptate eligendi totam fugiat molestiae aliquid porro doloribus
        excepturi? Quaerat maiores delectus facilis ut facere error veniam minus
        nihil, voluptatem unde ducimus quasi neque, corrupti eaque consectetur,
        modi quos maxime ab voluptate repudiandae. Nobis animi aut nisi tenetur
        asperiores temporibus.
      </div>
      <div className="container my-3">
        <button style={btnStyle} className="btn" onClick={changeMode}>
          {btnText}
        </button>
      </div>
    </>
  );
}
