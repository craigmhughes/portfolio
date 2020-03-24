import React from 'react';

export default function WorkItem({title, date, subtitle, links, icons}){

    const stackIcons = icons ? icons.map(icon => <img src={require(`../assets/images/icons/${icon}.svg`)} alt={icon} className="Work-item__stack-icon"/>) : null;

    return(
        <main className="Work-item">
            <section className="Work-item__content">
                <h2 className="Work-item__title">{title} {stackIcons}</h2>
                <p>{date}</p>
                <p>{subtitle}</p>
                <nav>
                    <a href={links[0] ?? "#"} className={`Work-item__link-item ${links[0] ? "" : "empty"}`}>Live Version</a>
                    <a href={links[1] ?? "#"} className={`Work-item__link-item ${links[1] ? "" : "empty"}`}>Source Code</a>
                </nav>
            </section>
        </main>
    );
}