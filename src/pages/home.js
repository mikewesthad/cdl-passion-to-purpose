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
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      maxWidth: "600px",
      maxHeight: "600px",
      background: "rgb(0, 0, 0, 0.8)",
      color: "white",
      borderRadius: "2rem"
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
  console.log(searchParams.get("role") === "teacher");

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
            <h2 style={{}}>Hello Teachers!</h2>
            <p>
              Thank you for user testing with us! We are excited to share Passion to Purpose with
              you and learn more how you might apply this free student-centered tool to your
              practice. It takes just a few minutes to “play.” Afterwards, we ask that you complete
              a short survey sharing your experience with us and letting us know if there is
              anything we could do to make it even more useful or applicable to your needs.
            </p>
            <p>
              We created Passion to Purpose as a way to help students (aged 13-24) navigate the
              challenging process of ideation and brainstorming for project based learning.
              Ultimately, we want to help cultivate ownership of learning by helping young people
              connect their interests to projects of civic or social purpose. We hope that the
              playfulness of the experience brings more fun and engagement to your learners! If you
              want your learners to play, feel free to share this link:{" "}
              <a
                href="passiontopurpose.io"
                onClick={event => {
                  event.preventDefault();
                  window.open("passiontopurpose.io");
                }}
              >
                passiontopurpose.io
              </a>
            </p>

            <p>Thank you again for participating!</p>
            <button className="modalButton" onClick={closeModal}>
              Play
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
