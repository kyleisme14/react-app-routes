import React, { Component } from "react";
import axios from "axios";
import "./CharacterContainer.css";

import Character from "./Character";

const data = [
  {
    title: "Dragon Ball Z",
    creator: "Takao Koyama",
    caption:
      "Doragon Bōru Zetto, commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation",
    user: "@romebell",
    tags: ["anime", "dope"],
    date: "April 26, 1989",
    imageUrl:
      "https://i.pinimg.com/originals/2b/a0/7e/2ba07e697bf5022a207a3863545168f5.gif",
  },
  {
    title: "Fullmetal Alchemist",
    creator: "Hiromu Arakawa",
    caption:
      "Set in the early 20th century, in a fictional universe in which alchemy is a widely practiced science, the series follows the journey of two alchemist brothers, Edward and Alphonse Elric, who are searching for the philosophers stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.",
    user: "Sydney",
    tags: ["#shonen", "#female-mangaka"],
    date: "October 4, 2003",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Fullmetal_Alchemist_%282003%29_key_visual.png",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    creator: "Hiromu Arakawa",
    caption:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    user: "cooldude2",
    tags: ["#anime", "#cool"],
    date: "2009-2012",
    imageUrl:
      "https://static.wikia.nocookie.net/fma/images/e/e9/Fmab-poster.png/revision/latest?cb=20131124145205",
  },
  {
    title: "Weeb Show #1",
    creator: "Weeb Lord #1",
    caption: "Weeb Product to be Consumed",
    user: "xXx_Weeaboo_xXx",
    tags: ["Weeb", "Weeaboo"],
    date: "Weebuary Weeb, 202Weeb",
    imageUrl:
      "https://1stslice.com/wp-content/uploads/2019/06/anime-was-a-mistake-1024x613.png",
  },
  {
    title: "JUJUTSU KAISEN",
    creater: "Gege Akutami.",
    caption:
      "The story of Jujutsu Kaisen is set in a world where Cursed Spirits feed on unsuspecting humans and fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about Should any curse consume Sukunas body parts the power they gain could destroy the world as we know it Fortunately there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural!",
    user: "@djontic",
    tags: ["anime", "jujutsu"],
    date: "01/14/96",
    imageUrl:
      "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/39/Shonen_Jump_2021-26_%28Artwork%29.png/revision/latest/scale-to-width-down/600?cb=20210531083500",
  },
  {
    title: "Neon Genesis Evangelion",
    creator: "Hideaki Anno",
    caption:
      "If you like the fighting robot genre, but also like apocalyptic mythology, check this out.",
    user: "kyle k",
    tags: ["Apocalyptic", "Mecha", "Psychological drama"],
    date: "October 4, 1995",
    imageUrl: "https://flxt.tmsimg.com/assets/p451029_b_h9_aa.jpg",
  },
  {
    title: "Death Note",
    creator: "VIZ Media",
    caption:
      "Light Yagami finds the Death Note, a notebook dropped by a rogue Shinigami death god.",
    user: "jluu",
    tags: ["anime", "death-note"],
    date: "05-03-2007",
    imageUrl:
      "https://derf9v1xhwwx1.cloudfront.net/image/upload/w_350,q_60,c_fill/oth/FunimationStoreFront/2290291/Latvian/2290291_Latvian_ShowKeyart_8fe5271d-e59a-44ad-a444-e99d5a236e89.jpg",
  },
  {
    title: "Dragon Ball Z",
    creator: "Akira Toriyama",
    caption:
      '"Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. "Dragon Ball Z" teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.',
    user: "Dev",
    tags: ["Goku", "Vegeta"],
    date: "First episode date: April 26, 1989",
    imageUrl:
      "https://ssl-static.libsyn.com/p/assets/c/8/1/0/c8102f2ab1500fd8/dbznextdimension_01.jpg",
  },
  {
    title: "One Piece",
    creator: "Eiichiro Oda",
    caption:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
    user: "@chillwill",
    tags: ["#luffy", "#gumgum"],
    date: "July 22, 1997",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/7TzXXGeyMRbOjKE7UDiNXOHlQK0=/0x0:1280x738/1200x800/filters:focal(538x267:742x471)/cdn.vox-cdn.com/uploads/chorus_image/image/65232906/one_piece.0.png",
  },
  {
    title: "Death Note",
    creator: "Tsugumi Ohba",
    caption: "Get the notebook!",
    user: "@jakepalmer",
    tags: ["death", "murder"],
    date: "2006",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
  },
  {
    title: "Case Closed",
    creator: "Gosho Aoyama",
    caption: "Detective Conan",
    user: "kawaharm",
    tags: ["mystery", "thriller"],
    date: "January 19, 1994",
    imageUrl:
      "https://fictionhorizon.com/wp-content/uploads/2020/10/When-Will-Detective-Conan-Case-Closed-End-03.jpg",
  },
  {
    title: "Fullmetal Alchemist",
    creator: "Shō Aikawa",
    caption:
      "In the fictitious country of Amestris, two young brothers, Edward and Alphonse Elric, are bestowed with the gift of alchemy - the supernatural ability to transform matter.",
    user: "Fullmetal Fan",
    tags: ["#fullmetalalchemist", "#anime"],
    date: "10/4/2003",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Fullmetal_Alchemist_%282003%29_key_visual.png",
  },
  {
    title: "Akira",
    creator: "Katsuhiro Ôtomo",
    caption:
      "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by a teenager, his gang of biker friends and a group of psychics.",
    user: "jboogiewitdahoodie",
    tags: ["#fun", "#whoooo"],
    date: "1988",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/AKIRA_%281988_poster%29.jpg/220px-AKIRA_%281988_poster%29.jpg",
  },
  {
    title: "Bleach",
    creator: "Tite Kubo",
    caption:
      "Japanese anime television series based on Tite Kubo's original manga series of the same name",
    user: "Mik19",
    tags: ["#anime", "#bride"],
    date: "October 5, 2004",
    imageUrl:
      "https://www.phoneswiki.com/wp-content/uploads/2021/04/Bleach-Season-17-Release-Date-Spoilers-Anime-to-Return-in-2021-with-1000Year-Blood-Arc.jpg",
  },
  {
    title: "Violet Evergarden",
    creator: " Akatsuki, Kana",
    caption: "anime adaptation of the violet evergarden novel",
    user: "kabin",
    tags: ["comming-of-age", "fantasy"],
    date: "Jan 11, 2018",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGo4nmUkBO1MZrGppPcSt9V5fwVqbeOHe2A&usqp=CAU",
  },
  {
    title: "K",
    creator: "GoHands, GORA",
    caption:
      "Its not about a mans appearence, or whats inside.. My policy is to judge a man by his actions",
    user: "@Hunter Lee McGuire ",
    tags: ["Action", "Scifi"],
    date: "2012",
    imageUrl: "blob:https://imgur.com/21a54957-8fc8-4462-a9e9-4b4999cf64e8",
  },
  {
    title: "Avatar: The Last Airbender",
    creator: "Michael Dante DiMartino; Bryan Konietzko",
    caption: "Uncle Iroh was a central character from this Nickelodeon Series",
    user: "@PatrickBrennan",
    tags: ["wise", "tea"],
    date: "February 21, 2005",
    imageUrl: "https://imgur.com/a/LjF2iRQ",
  },
  {
    title: "Maid-Sama!, When The Tough Girl Is Secretly A Maid",
    creator: "Hori-san to Miyamura-kun",
    caption:
      "This is another high school romcom series, but this time, the male lead is a superstar, contrasting sharply with the seemingly boring Miyamura-kun. Takumi Usui could land any girl he likes, but he has eyes for only one: the tough-as-nails student council president, Misaki Ayuzawa.",
    user: "Mekel Tensley",
    tags: ["romantic", "comedy"],
    date: "January 10, 2021",
    imageUrl:
      "https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-06-at-4.17.27-PM.png?q=50&fit=crop&w=740&h=374&dpr=1.5",
  },
  {
    title: "Mobile Suit Gundam",
    creator: "Yoshiyuki Tomino",
    caption:
      'It is year 0079 of the Universal Century. Mankind has moved to space, living in colony clusters known as "Sides." One of these Sides declares itself the "Principality of Zeon" and declares war on the Earth Federation, the governmental body currently ruling Earth. Using powerful humanoid robots known as "mobile suits," Zeon quickly gains the upper hand.',
    user: "Neo Neofotistos",
    tags: ["mecha", "sci-fi"],
    date: "Arpil 7, 1979",
    imageUrl: "https://cdn.myanimelist.net/images/anime/5/88524.jpg",
  },
];

const displayCharacters = data.map((a, idx) => {
  return (
    <Character
      key={idx}
      title={a.title}
      creator={a.creator}
      caption={a.caption}
      user={a.user}
      tags={a.tags}
      date={a.date}
      imageUrl={a.imageUrl}
    />
  );
});

class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }

  componentDidMount() {
      axios.get('https://api.jikan.moe/v3/top/anime')
      .then((response) => {
          console.log(response.data);
          this.setState({
              data: response.data.top
          })
      })
      .catch((error) => {
          console.log('error hitting api', error);
      })
  }

  displayAnimes() {
    const display = this.state.data.map((a, idx) => {
        return <Character
        key={idx}
        title={a.title}
        creator={a.members}
        caption={a.title}
        user={'Rome Bell'}
        tags={[a.type, a.type]}
        date={a.start_date}
        imageUrl={a.image_url}
      />
    });

    return display;
  }

  render() {
    return (
      <div>
        <div className="navbar is-inline-flex is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Bulma"
              />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-item">
              <div className="control has-icons-left">
                <input
                  className="input is-small has-text-centered"
                  type="text"
                  placeholder="search"
                />
                <span className="icon is-left is-small">
                  <i className="material-icons">search</i>
                </span>
              </div>
            </div>
          </div>
          <div className="navbar-item is-flex-touch">
            <a className="navbar-item">
              <i className="material-icons">explore</i>
            </a>
            <a className="navbar-item">
              <i className="material-icons">favorite_border</i>
            </a>
            <a className="navbar-item">
              <i className="material-icons">person_outline</i>
            </a>
          </div>
        </div>
        <div className="columns body-columns">
          <div className="column is-half is-offset-one-quarter">
            {this.displayAnimes()}
            {displayCharacters}

            <div className="card">
              <div className="header">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://source.unsplash.com/random/96x96"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
              </div>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/random/1280x960"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <a href="">
                        <i className="material-icons">favorite_border</i>
                      </a>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <a href="">
                          <i className="material-icons">chat_bubble_outline</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <p>
                    <strong>32 Likes</strong>
                  </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                </div>
              </div>
              <div className="card-footer">
                <div className="columns is-mobile">
                  <div className="column is-11">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Add a comment . . ."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <button className="button">
                      <i className="material-icons">more_horiz</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="header">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://source.unsplash.com/random/96x96"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
              </div>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/random/1280x960"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <a href="">
                        <i className="material-icons">favorite_border</i>
                      </a>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <a href="">
                          <i className="material-icons">chat_bubble_outline</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <p>
                    <strong>32 Likes</strong>
                  </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                </div>
              </div>
              <div className="card-footer">
                <div className="columns is-mobile">
                  <div className="column is-11">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Add a comment . . ."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <button className="button">
                      <i className="material-icons">more_horiz</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="header">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://source.unsplash.com/random/96x96"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
              </div>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://source.unsplash.com/random/1280x960"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item has-text-centered">
                      <a href="">
                        <i className="material-icons">favorite_border</i>
                      </a>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <a href="">
                          <i className="material-icons">chat_bubble_outline</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <p>
                    <strong>32 Likes</strong>
                  </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.<a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2018-1-1">12:02 PM - 1 May 2018</time>
                </div>
              </div>
              <div className="card-footer">
                <div className="columns is-mobile">
                  <div className="column is-11">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Add a comment . . ."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <button className="button">
                      <i className="material-icons">more_horiz</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer">
              <div className="container is-fluid">
                <div className="content has-text-centered">
                  <p>
                    <strong>Bulma</strong> by
                    <a href="http://jgthms.com">Jeremy Thomas</a>. The source
                    code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">
                      MIT
                    </a>
                    . The website content is licensed
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                      CC BY NC SA 4.0
                    </a>
                    .
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterContainer;