import React, { Component } from "react";
import { FaCrown, FaCocktail } from "react-icons/fa";
import { MdFreeBreakfast, MdPets } from "react-icons/md";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCrown />,
        title: "Suíte Presidencial",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <MdFreeBreakfast />,
        title: "Café da Manhã",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaCocktail />,
        title: "Frigobar Livre",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <MdPets />,
        title: "Pets Friendly",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="serviços" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
