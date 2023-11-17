import React from 'react';

export default function Home() {
  return (
    <div className="App">
      <div className="header">
        <h1>Hackavote!</h1>
        <h5>round 0</h5>
      </div>

      <main className="section">
        <section>
          <h3>(TL;DR) We're hackers, just like you, and together:</h3>
          <p className='tldr'>
            We're hackers, just like you, and together: <br/>
            <p>
              - let's build a <span
              style={{fontWeight: 'bold'}}>Community Prize</span> that is judged by the community, not the judges. This
              way, hackers can get
              more extensive feedback from the community.
            </p>
            <p>
              - Hackers list their projects and vote on the projects of others, creating a curated list. Each project
              can
              then feature its wallet address on the platform to garner support and donations from the community.
            </p>
            <p>
              - Don't worry about spending a fortune while voting; it's either free or incurs a minimal cost. So, there
              is
              no fear of losing your money. :)
              - Your time and vote are so valuable, which is why we reward you for finding and ranking projects. Once
              the
              voting concludes, I pledge to gift <span style={{fontWeight: 'bold'}}>100 USDC</span> as <span
              style={{fontWeight: 'bold'}}>Curator Reward</span> to
              the <span
              style={{fontWeight: 'bold'}}>top 3</span> people who were most influential on the ranking, which means
              they voted earlier and more on the
              projects that ended up ranking higher in the system as the Curator Reward. (exact formula is yet to be
              determined)
            </p>
            <p>
              - If I win any official awards offered by the hackathon, <span
              style={{fontWeight: 'bold'}}>I pledge to donate 25% of it to some projects
              listed on Hackavote.</span>
            </p>
          </p>
        </section>
        <section>
          <h3 id="join">So...</h3>
          <p>If that's enough to encourage your participation as a <span style={{fontWeight: 'bold'}}>Hackavoter</span>,
            message <a href='https://t.me/TheMonkeyCoder' target="_blank">@TheMonkeyCoder</a> on
            Telegram. Just
            sending
            your
            name (so I'll know you) and your project's probable name (if you already decided) is enough for now, but later
            I also need your
            wallet address that you're going to use to receive the official hackathon's POAP on. I'm adding Hackavoters to
            a
            group where we all can chat with each other about our projects and get notifications about Hackavote. However,
            do
            let me know if you prefer not to join this group.</p>

          <h3>But if you're still undecided, let's dive a little deeper</h3>
          <p>Before I start, If you have any feedback or suggestion for Hackavote feel free to message me on Telegram, and
            I
            really appreciate it :)</p></section>

        <section>
          <h3>Why Hackavote?</h3>
          <p>Currently, projects are only judged by the official judges and the hackathon partners, with feedback limited
            to
            "yes" or "no." No systematic way allows hackers to get comprehensive feedback from the community or other
            hackers. That's why we aim to create a ranked list of projects,</p>
          <p>
            Also, there is low incentive for the hackathon members and the community to check the projects and get
            familiar
            with them. That's why we defined a <span style={{fontWeight: 'bold'}}>Curator Reward</span> for the top
            curators
            (as defined above) of the list to incentivise them to learn more about the projects.
          </p>
          <p>
            Once the official hackathon concludes, the progress of the hackers is no longer tracked; worsened by a lack of
            incentive to continue, they fail to reach a stage whereby they could apply for grants and VC funding. We can
            maintain this community voting in cycles (e.g., every month for 6 months) after the hackathon to help the
            projects progress and possibly earn more prizes.
          </p>
        </section>

        <section>
          <h3>How is the judgement concluded?</h3>
          <p>We know that no one can judge a project except the market and the real users that want to use that product.
            So
            We recognize that only the market and the genuine users of a product can judge it effectively. There's no
            flawless judgment for a hackathon; we're only providing a solution that's better, fair, and more entertaining
            than the existing approach. Considering this assumption, we're relying on the majority of the votes of the
            hackathon participants to
            rank the hackathon projects.</p>
          <p>Some parts of this project ,as an MVP, are centralized and rely on trusting me personally, but the overall
            process is transparent and auditable, and also there are no incentives for me to cheat on these parts :)
          </p></section>

        <section>
          <h3>Why only hackathon participants can vote?</h3>
          <p>It is a good starter community, since we have access to each other in-person during the hackathon and can
            chat
            about Hackavote and their hackathon's projects efficiently. Also I can uniquely verify them one-by-one
            personally
            and limit people to not vote on their project or set any other limitations if necessary for preventing the
            system
            from being manipulated. The hackathon's POAP might also be helpful for verifing people.</p>
        </section>

        <section>
          <h3>Timeline (this could change)</h3>
          <p>
            At present, I'm onboarding people and gathering an audience. If you're interested in the platform, you can
            also
            help me by bringing in more Hackavoters :)<br/>
            I'm getting data from the projects, but the project submission in the voting platform will be live Saturday
            night.
            (Hackavote is also a hackathon project which I should build during the hackathon :D) We're making every effort
            to
            make submitting
            a project in Hackavote as easy as possible, perhaps by reading the data from your official hackathon's
            submission.
            The submission deadline in Hackavote is Sunday 10:00 am (1 hour after the official hackathon's submission
            deadline) and the voting process starts Sunday 12:00 pm (1 hour after the presentation to the judges) and
            probably
            will end on midnight.
          </p>
        </section>

        <p>So, if you want to join or further discuss the platform, DM @TheMonkeyCoder on <a href='https://t.me/TheMonkeyCoder'
                                                                                             target="_blank">Telegram</a></p>
      </main>
      <div className="section">
        <h4 style={{textAlign: 'center'}}>Happy Hacking :)</h4>
      </div>

    </div>
  );
}
