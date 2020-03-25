import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import Attribution from "../components/attribution";
import Modal from "react-modal";

export default function Home(props) {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "80%",
      height: "40%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center"
    }
  };
  var searchParams = new URLSearchParams(window.location.search);

  const [modalIsOpen, setIsOpen] = React.useState(searchParams.get("role") === "teacher");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //console.log(searchParams.get("role") === "teacher");

  return (
    <Container>
      <h1 className="title">Passion to Purpose</h1>
      <div className="description">
        <p>How can you turn your passion into a purpose?</p>
        <p>Answer a couple simple questions to generate design questions to inspire yourself.</p>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 style={{}}>Hello Teacher!</h2>
            <p>
              This is where the things we want to say to teachers will go! It's going to be a lot of
              information. It will probably take up all of this space in the modal box.
            </p>
            <div className="text-center">
              <Link className="teacher-button" to={"/teacher-context"}>
                Interested Teacher?
              </Link>
            </div>
            <button style={{}} onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Let's Imagine &#8594;
        </Link>
      </div>
      <Attribution style={{ marginTop: "2rem", textAlign: "center" }} />
    </Container>
  );
}
