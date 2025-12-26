import { Link } from 'react-router-dom';
import './AboutBrainInjuryPage.css';

function AboutBrainInjuryPage() {
  return (
    <div className="about-brain-injury-page">
      {/* Page Banner */}
      <section className="page-banner about-banner">
        <div className="container">
          <h1>About Brain Injury</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="content-wrapper">
            {/* Main Content */}
            <div className="main-content">
              <p>
                Any event that causes damage to brain tissues is considered a brain injury. There are two general 
                categories of brain injury: congenital (before or during birth) and acquired (injury after birth). 
                Damage can occur suddenly (as in trauma or stroke), or more gradually (as in diseases). Damage can 
                result from a traumatic brain injury (TBI), stroke, brain tumor, lack of oxygen to the brain (anoxia 
                or hypoxia), degenerative diseases, encephalopathy, or other causes.
              </p>

              <p>
                In a stroke, the damage is often localized to a specific area, whereas in anoxia/hypoxia, 
                encephalopathy, degenerative diseases or a TBI, damage is much more widespread which means the 
                symptoms will be more severe and more complex.
              </p>

              <p>
                The brain is the "executive" of the body, with ultimate control over all functions, including 
                speaking, thinking, moving, swallowing, and breathing. It receives messages, interprets them, and 
                then initiates and monitors responses. Brain injuries are as individual as the people who are injured. 
                The short and long-term effects of a brain injury vary widely depending on the cause, location of the 
                injury, and severity. Understanding a person's personality and cognitive abilities before the injury 
                is vital towards understanding any changes that may have occurred after the injury.
              </p>

              <p>
                Physical, cognitive, perceptual/sensory and behavioral/emotional changes are common. Even if the 
                symptoms are mild or atypical, every brain injury is a serious medical condition that requires prompt 
                attention and diagnosis. That diagnosis can be complex, as numerous other conditions (such as 
                depression, epilepsy, and post traumatic stress disorder) can have similar symptoms. For a more 
                complete list, please see "Common Symptoms."
              </p>

              <p>
                The term "traumatic brain injury" (TBI) refers to an injury to the brain that results from a blow to 
                the head (such as in a motor vehicle accident or a fall); it can also be from a penetrating injury 
                such as a gunshot wound. The injury may occur at the site of impact, on the opposite side as the 
                brain rebounds against the skull, or diffusely throughout the brain as a result of twisting and 
                turning on its axis. Injury may occur at the time of impact or it may develop afterwards as a result 
                of swelling and bleeding within the brain.
              </p>

              <p>
                Physical changes which occur from brain injury, such as weakness and visual changes, are much more 
                visible and therefore more recognized than changes in cognition or behavior. What that often means is 
                that a person who does NOT have overt physical signs of injury may NOT seek help from a doctor or 
                hospital initially; or if he/she does, the hospital stay is often relatively short and may not include 
                any rehabilitation or therapy. Many routine assessments done in the emergency room (CT scan, MRI) will 
                not show any evidence of brain injury – but that does NOT mean there IS no injury!
              </p>

              <p>
                Cognitive problems may not initially be recognized. However, as a person returns to normal activities 
                these problems may impact how that person functions in daily life. It is not uncommon for a person to 
                attempt to return to work after the initial injuries have healed, only to find he/she is unable to 
                concentrate, remember, self-organize, and complete tasks as easily as before the injury. If the brain 
                injury is not properly diagnosed and treated by professionals trained in brain injury rehabilitation, 
                the person may not be able to return to normal activities.
              </p>

              <p>
                Sometimes the difficulty is misdiagnosed as psychiatric or even "laziness". The importance of early 
                and proper assessment and treatment by members of a rehabilitation team – physiatrist (M.D. who 
                specializes in rehab medicine), neuropsychologist, physical therapist, occupational therapist, speech 
                therapist, and other team members – is vital to helping survivors of brain injury return to their 
                place in the community. Without this help, it is easy to see how these problems can lead to job loss, 
                changes in relationships, and depression.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              {/* More About Brain Injury */}
              <div className="sidebar-section">
                <h4>MORE ABOUT BRAIN INJURY</h4>
                <ul>
                  <li>
                    <Link to="/brain-injury-causes">
                      Common <strong>CAUSES</strong> of brain injury
                    </Link>
                  </li>
                  <li>
                    <Link to="/brain-injury-symptoms">
                      Common <strong>SYMPTOMS</strong> of brain injury
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Advocacy Organizations */}
              <div className="sidebar-section">
                <h4>Advocacy Organizations</h4>
                <ul>
                  <li>
                    <Link to="/directory">
                      <strong>National and International Brain Advocacy Organizations</strong>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* More Links About Brain Injury */}
              <div className="sidebar-section">
                <h4>MORE LINKS ABOUT BRAIN INJURY</h4>
                <p className="section-subtitle">National Institute of Neurological Disorders and Stroke (NINDS)</p>
                <ul>
                  <li>
                    <a href="http://www.ninds.nih.gov/disorders/stroke/stroke.htm" target="_blank" rel="noopener noreferrer">
                      Stroke Info Page
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ninds.nih.gov/Disorders/All-Disorders/Traumatic-Brain-Injury-Information-Page" target="_blank" rel="noopener noreferrer">
                      TBI Info Page
                    </a>
                  </li>
                </ul>

                <div className="cdc-section">
                  <a href="http://www.cdc.gov" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="http://www.cdc.gov/images/home/110320_be_safe6.jpg" 
                      alt="Be Safe! Visit www.cdc.gov" 
                      className="cdc-badge"
                    />
                  </a>
                  <p>
                    <a href="http://www.cdc.gov" target="_blank" rel="noopener noreferrer">
                      <strong>Centers for Disease Control and Prevention (CDC)</strong>
                    </a> is your online source for credible health information; CDC.org is their official website.
                  </p>
                  <ul>
                    <li>
                      <a href="http://www.cdc.gov/HEADSUP/index.html" target="_blank" rel="noopener noreferrer">
                        Heads Up – Preventing injuries
                      </a>
                    </li>
                    <li>
                      <a href="http://www.cdc.gov/heartdisease/" target="_blank" rel="noopener noreferrer">
                        Heart Disease
                      </a>
                    </li>
                    <li>
                      <a href="http://www.cdc.gov/stroke/" target="_blank" rel="noopener noreferrer">
                        Stroke
                      </a>
                    </li>
                    <li>
                      <a href="http://www.cdc.gov/TraumaticBrainInjury/index.html" target="_blank" rel="noopener noreferrer">
                        Traumatic Brain Injury Center
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* More Resources */}
              <div className="sidebar-section">
                <h4>MORE RESOURCES</h4>
                
                <div className="resource-item">
                  <h6>
                    <a href="https://askjan.org/ADA-Library.cfm" target="_blank" rel="noopener noreferrer">
                      <strong>ADA Library</strong>
                    </a>
                  </h6>
                  <p>Americans with Disabilities Act</p>
                  <p>Job Accommodation Network</p>
                </div>

                <div className="resource-item">
                  <h6>
                    <a href="https://www.emedicinehealth.com/brain-and-nervous-system/center.htm" target="_blank" rel="noopener noreferrer">
                      <strong>Brain & Nervous System Resources</strong>
                    </a>
                  </h6>
                  <p>emedicinehealth</p>
                </div>

                <div className="resource-item">
                  <h6>
                    <a href="http://www.headinjury.com/tbiglossary.htm" target="_blank" rel="noopener noreferrer">
                      <strong>TBI Glossary</strong>
                    </a>
                  </h6>
                  <p>Brain Injury Resource Center</p>
                </div>

                <div className="resource-item">
                  <h6>
                    <a href="http://www.nolo.com/dictionary" target="_blank" rel="noopener noreferrer">
                      <strong>Nolo's Free Dictionary</strong>
                    </a>
                  </h6>
                  <p>Law Terms & Legal Definitions</p>
                </div>

                <div className="resource-item">
                  <h6>
                    <a href="https://suicidepreventionlifeline.org/how-we-can-all-prevent-suicide/" target="_blank" rel="noopener noreferrer">
                      <strong>How You Can Prevent Suicide</strong>
                    </a>
                  </h6>
                  <p>Suicide Prevention Lifeline</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Authored By Section */}
      <section className="authored-section">
        <div className="container">
          <h2>Authored by the BIC Team</h2>
          <p>
            <strong>About Brain Injury</strong> was written by Shirley Wheatland, CCC, MS, senior speech pathologist 
            in the acute rehabilitation department of Alta Bates Summit Medical Center and Matthew Harris, PhD, 
            licensed clinical neuropsychologist and an assistant professor at UNC Hospitals in Chapel Hill, NC.
          </p>
        </div>
      </section>

      {/* Brain Anatomy Reference */}
      <section className="brain-anatomy-section">
        <div className="container">
          <h3>Learn about the brain at the links below:</h3>
          <div className="brain-links">
            <a href="https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain" 
               target="_blank" 
               rel="noopener noreferrer"
               className="brain-link">
              How Your Brain Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBrainInjuryPage;