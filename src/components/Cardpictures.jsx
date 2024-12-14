import "./Cardpictures.css";

const Cardpictures = () => {
  return (
    <span>
        <h2 className="TheirView">What they’ve said</h2>
    <div className="Cardpictures">

      <div>
        <img className="Anishaimg" src="./image/avatar-anisha.png" alt="" />
         
         <div className="AnishaP">
        <h4>Anisha Li</h4>
        <p>
           “Manage has supercharged our team’s workflow. The
          ability to maintain visibility on larger milestones at all times keeps
          everyone motivated.”
        </p>
        </div>
      </div>
      
     
      
      <div className="AliBravoP">
        <img className="AliBravoimg"  src="./image/avatar-ali.png" alt="" />
         
        <h4>Ali Bravo</h4>
        <p>
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </p>
      </div>
      
      <div className="RichardP">
        
        <img className="Richardimg" src="./image/avatar-richard.png" alt="" />
        <h4>Richard Watts</h4>
        <p>
           “Manage allows us to provide structure and process. It
          keeps us organized and focused. I can’t stop recommending them to
          everyone I talk to!”
        </p>
      </div>
    </div>
    <span>
      <button className="btnCardpicture">Get Started</button>
      </span>

    </span>
    
  );
};

export default Cardpictures;
