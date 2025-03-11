import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
    return (
        <section className="github-section">
            <h2 className="github-title">📊 GitHub Contribution Calendar</h2>
            <p className="github-description">
                Check out my GitHub activity and contributions over the past year!
            </p>
            <div className="github-calendar-container">
                <GitHubCalendar
                    username="mohan7401647399"
                    blockSize={ 12 }
                    blockMargin={ 4 }
                    theme={ {
                        level0: "#ebedf0",
                        level1: "#9be9a8",
                        level2: "#40c463",
                        level3: "#30a14e",
                        level4: "#216e39",
                    } }
                    fontSize={ 14 }
                />
            </div>
            <div className="github-link"> <a href="https://github.com/mohan7401647399" target="_blank" rel="noreferrer" style={ { textDecoration: "none" } }>Github Repository</a> </div>
        </section>
    );
}
