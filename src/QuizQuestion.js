import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>//quiz question button logic goes here</ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
