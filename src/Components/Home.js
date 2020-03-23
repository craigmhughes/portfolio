import React, {createRef} from 'react';
import {Link} from 'react-router-dom';

import RenderCanvas from './Canvas';

export default function Home(){

    const canvasParent = createRef();

    return(
        <main className="Home-slide">
            <section className="Home-slide__content--first">
                <img src={require("../assets/images/me.webp")} alt="Profile Shot" className="Home-slide__content-image"/>
                <h1 className="Home-slide__content-title">Craig Hughes</h1>
                <ul className="Home-slide__tag-list">
                    <li className="Home-slide__tag-list-item--tag">Developer</li>
                    <li className="Home-slide__tag-list-item--tag">2020Grad</li>
                </ul>

                <p className="Home-slide__content-desc">
                Hi, I’m a Web Developer based in Greater Manchester.
                <br/><br/>
                I also like to make music in my spare time. Why don’t you give it a go?
                Hit a pad and make sure your sound is on!
                </p>
                <section className="Home-slide__link-list">
                    <Link to="/">View CV</Link>
                    <Link to="/">View Work</Link>
                </section>

                <nav className="Home-slide__tag-list">
                    <Link to="https://www.linkedin.com/in/craig-m-hughes/" className="Home-slide__tag-list-item">Linkedin</Link>
                    <Link to="https://github.com/craigmhughes" className="Home-slide__tag-list-item">Github</Link>
                    <Link to="https://twitter.com/hghscraig" className="Home-slide__tag-list-item">Twitter</Link>
                </nav>
            </section>
            <section className="Home-slide__content" ref={canvasParent}>
                <RenderCanvas parent={canvasParent}/>
            </section>
        </main>
    );
}