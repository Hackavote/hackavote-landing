import React from "react";

export default function Home() {
  return (
    <div className="App">
      <div className="header">
        <h1>Hackavote!</h1>
        <h5 style={{paddingBottom: '20px'}}>round 0</h5>
        <a href="https://app.hackavote.xyz/" target="_blank" className="see-projects">See Projects</a>
      </div>

      <main className="section">
        <section>
          <h3>(TL;DR) We&apos;re hackers, just like you, and together:</h3>
          <p className="tldr">
            <p>
              - let&apos;s build a <span
              style={{fontWeight: "bold"}}>Community Prize</span> that is judged by the community, not the judges. This
              way, hackers can get
              more extensive feedback from the community.
            </p>
            <p id="community">
              - Hackers list their projects and vote on the projects of others, creating a curated list. Each project
              can
              then feature its wallet address on the platform to garner support and donations from the community.
            </p>
            <p>
              - Don&apos;t worry about spending a fortune while voting; it&apos;s either free or incurs a minimal cost.
              So,
              there
              is
              no fear of losing your money. :)</p>
            <p id="pledge">
              - Your time and vote are so valuable, which is why we reward you for finding and ranking projects. Once
              the
              voting concludes, I pledge to gift <span style={{fontWeight: "bold"}}>100 USDC</span> as <span
              style={{fontWeight: "bold"}}>Curator Reward</span> to
              the <span
              style={{fontWeight: "bold"}}>top 3</span> people who were most influential on the ranking, which means
              they voted earlier and more on the
              projects that ended up ranking higher in the system as the Curator Reward. (exact formula is yet to be
              determined)
            </p>
            <p>
              - If I win any official awards offered by the hackathon, <span
              style={{fontWeight: "bold"}}>I pledge to donate 25% of it to some projects
              listed on Hackavote.</span>
            </p>
          </p>
        </section>
        <section>
          <h3 id="join">So...</h3>
          <p>If that&apos;s enough to encourage your participation as a Hackavoter, <a href="https://t.me/hackavote">Join
            this Telegram Group</a>. Don&apos;t worry about being spammed, hackers are busy building :)</p>

          <h3>But if you&apos;re still undecided, let&apos;s dive a little deeper</h3>
          <p>Before I start, If you have any feedback or suggestion for Hackavote feel free to message me on Telegram,
            and
            I
            really appreciate it :)</p></section>

        <section>
          <h3>Why Hackavote?</h3>
          <p>Currently, projects are only judged by the official judges and the hackathon partners, with feedback
            limited
            to
            &quot;yes&quot; or &quot;no.&quot; No systematic way allows hackers to get comprehensive feedback from the
            community or other
            hackers. That&apos;s why we aim to create a ranked list of projects,</p>
          <p>
            Also, there is low incentive for the hackathon members and the community to check the projects and get
            familiar
            with them. That&apos;s why we defined a <span style={{fontWeight: "bold"}}>Curator Reward</span> for the top
            curators
            (as defined above) of the list to incentivise them to learn more about the projects.
          </p>
          <p>
            Once the official hackathon concludes, the progress of the hackers is no longer tracked; worsened by a lack
            of
            incentive to continue, they fail to reach a stage whereby they could apply for grants and VC funding. We can
            maintain this community voting in cycles (e.g., every month for 6 months) after the hackathon to help the
            projects progress and possibly earn more prizes.
          </p>
        </section>

        <section>
          <h3>How is the judgement concluded?</h3>
          <p>We know that no one can judge a project except the market and the real users that want to use that product.
            So
            We recognize that only the market and the genuine users of a product can judge it effectively. There&apos;s
            no
            flawless judgment for a hackathon; we&apos;re only providing a solution that&apos;s better, fair, and more
            entertaining
            than the existing approach. Considering this assumption, we&apos;re relying on the majority of the votes of
            the
            hackathon participants to
            rank the hackathon projects.</p>
          <p>Some parts of this project ,as an MVP, are centralized and rely on trusting me personally, but the overall
            process is transparent and auditable, and also there are no incentives for me to cheat on these parts :)
          </p></section>

        <section>
          <h3>Why only hackathon participants can vote?</h3>
          <p>It is a good starter community, since we have access to each other in-person during the hackathon and can
            chat
            about Hackavote and their hackathon&apos;s projects efficiently. Also I can uniquely verify them one-by-one
            personally
            and limit people to not vote on their project or set any other limitations if necessary for preventing the
            system
            from being manipulated. The hackathon&apos;s POAP might also be helpful for verifing people.</p>
        </section>

        <section>
          <h3>Timeline (this could change)</h3>
          <p>
            At present, I&apos;m onboarding people and gathering an audience. If you&apos;re interested in the platform,
            you can
            also
            help me by bringing in more Hackavoters :)<br/>
            I&apos;m getting data from the projects, but the project submission in the voting platform will be live
            Saturday
            night.
            (Hackavote is also a hackathon project which I should build during the hackathon :D)<br/>We&apos;re making
            every
            effort
            to
            make submitting
            a project in Hackavote as easy as possible, perhaps by reading the data from your official hackathon&apos;s
            submission.<br/>
            The submission deadline in Hackavote is Sunday 10:00 am (1 hour after the official hackathon&apos;s
            submission
            deadline)<br/>
            The voting process starts Sunday 12:00 pm (1 hour after the presentation to the judges) and
            probably
            will end on midnight.
          </p>
        </section>

        <p>So, if you want to join or further discuss the platform, <a href="https://t.me/hackavote"
                                                                       target="_blank">Join this Telegram Group</a></p>
      </main>
      <div className="section">
        <h4 style={{textAlign: "center"}}>Happy Hacking :)</h4>
      </div>

    </div>
  );
}
