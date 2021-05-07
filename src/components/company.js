import { Typography } from "@material-ui/core";

const Company = ({ value }) => {
  return (
    <div className="missionSection">
      <div className="missionHeader">Everything you need, all in one place</div>
      <div className="mission">
        <div className="inspo">
          <div className="inspoHeading">
            <p>Get Inspiration From </p>
            <p> our Collection of Photos </p>
          </div>
          </div> 
          <div className="inspo">
            <div className="inspoHeading">
              <p>Browse Real Evenst</p>
              <p> in Unique Venue spaces</p>
            </div>
          </div>
          <div className="inspo">
            <div className="inspoHeading">
              <p>Discover New Ieas & </p>
              <p> Save What You Love </p>
            </div>
          </div>

          <div className="inspo">
            <div className="inspoBody">
              Explore daily uploads of professional photos. Find a photo you
              love, then click to see the full event album and event
              professionals who created the details.{" "}
            </div>
          </div>

          <div className="inspo">
            <div className="inspoBody">
              Imagine your next event at a venue you love. Filter by capacity
              and amenities, then browse galleries of real events hosted at each
              venue.{" "}
            </div>
          </div>

          <div className="inspo">
            <div className="inspoBody">
              Use our top lists and expert guides to narrow down your favorite
              photos, venues, and event professionals, then save them to a
              curated Idea Slate.{" "}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Company;
